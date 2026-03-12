from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL
import MySQLdb.cursors
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuração do banco de dados
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST', 'localhost')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER', 'root')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD', '')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB', 'lab_vilas')
app.config['MYSQL_UNIX_SOCKET'] = os.getenv('MYSQL_UNIX_SOCKET', None)

mysql = MySQL(app)

CREATE_TABLE_SQL = """
CREATE TABLE IF NOT EXISTS contatos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mensagem TEXT NOT NULL,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
"""

# Função auxiliar — verifica se o header X-API-Key veio correto
def verificar_api_key():
    chave_esperada = os.getenv('ADMIN_API_KEY')
    chave_recebida = request.headers.get('X-API-Key')
    return chave_recebida == chave_esperada


@app.route('/api/criar-tabela', methods=['GET'])
def criar_tabela():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(CREATE_TABLE_SQL)
        mysql.connection.commit()
        cursor.close()
        return jsonify({"mensagem": "Tabela criada com sucesso"}), 200
    except Exception as e:
        return jsonify({"erro": str(e)}), 500


@app.route('/api/contato', methods=['POST'])
def enviar_contato():
    try:
        dados = request.get_json()

        if not all([dados.get('nome'), dados.get('email'), dados.get('mensagem')]):
            return jsonify({"erro": "Todos os campos são obrigatórios"}), 400

        cursor = mysql.connection.cursor()
        cursor.execute(
            "INSERT INTO contatos (nome, email, mensagem) VALUES (%s, %s, %s)",
            (dados['nome'], dados['email'], dados['mensagem'])
        )
        mysql.connection.commit()
        cursor.close()

        return jsonify({"mensagem": "Mensagem enviada com sucesso"}), 201

    except MySQLdb.Error as e:
        return jsonify({"erro": f"Erro no banco de dados: {str(e)}"}), 500
    except Exception as e:
        return jsonify({"erro": f"Erro: {str(e)}"}), 500


@app.route('/api/contatos', methods=['GET'])
def listar_contatos():
    # Bloqueia quem não tiver a chave correta no header
    if not verificar_api_key():
        return jsonify({"erro": "Acesso não autorizado"}), 401

    try:
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("SELECT * FROM contatos ORDER BY data_envio DESC")
        contatos = cursor.fetchall()
        cursor.close()
        return jsonify(contatos), 200
    except Exception as e:
        return jsonify({"erro": str(e)}), 500


@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "ok"}), 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)