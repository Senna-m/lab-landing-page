# 🚀 Guia de Configuração - Conectar Formulário ao Banco de Dados

## 📋 Resumo da Solução

Este projeto usa:
- **Backend**: Python + Flask
- **Banco de Dados**: MySQL
- **Frontend**: HTML + JavaScript (comunicação via API REST)

---

## 1️⃣ Pré-requisitos

Instale antes de começar:

### Windows
- **Python 3.8+**: [Download aqui](https://www.python.org/downloads/)
- **MySQL**: [Download MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- **Git** (opcional): [Download aqui](https://git-scm.com/)

### Mac/Linux
```bash
# macOS (com Homebrew)
brew install python@3.11
brew install mysql

# Linux (Ubuntu/Debian)
sudo apt-get install python3 python3-pip mysql-server
```

---

## 2️⃣ Configurar o Banco de Dados MySQL

### Iniciar MySQL
```bash
# Windows (se instalado como serviço)
# Já deve estar rodando automaticamente

# Mac
brew services start mysql

# Linux
sudo service mysql start
```

### Criar banco de dados
```bash
mysql -u root -p
```

Digite sua senha (se houver). Dentro do MySQL, execute:

```sql
CREATE DATABASE labvilas;
USE labvilas;
```

---

## 3️⃣ Configurar o Arquivo `.env`

1. Na pasta do projeto, copie `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Edite o arquivo `.env` com suas credenciais:
```
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=sua_senha_do_mysql
MYSQL_DB=labvilas
FLASK_ENV=development
```

---

## 4️⃣ Instalar Dependências Python

```bash
# Navegue para a pasta do projeto
cd "c:\Users\Nathalie\SITE _ VILAS"

# Crie um ambiente virtual
python -m venv venv

# Ative o ambiente virtual
# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate

# Instale as dependências
pip install -r requirements.txt
```

---

## 5️⃣ Criar a Tabela no Banco

Acesse a API: http://localhost:5000/api/criar-tabela

Isso criará a tabela `contatos` automaticamente.

---

## 6️⃣ Iniciar o Backend

```bash
python app.py
```

Você verá:
```
 * Running on http://0.0.0.0:5000
 * Debug mode: on
```

O backend está rodando! ✅

---

## 7️⃣ Testar o Formulário

1. Abra [index.html](index.html) em um navegador
2. Clique em "Contato"
3. Preencha o formulário
4. Clique em "Enviar"

Se tudo funcionar, verá: **"Mensagem enviada com sucesso!"**

---

## 8️⃣ Visualizar Dados no Banco

Para listar todos os contatos recebidos, acesse:

```
http://localhost:5000/api/contatos
```

Você receberá um JSON com todos os dados armazenados.

---

## 🐛 Solução de Problemas

### ❌ "Erro ao conectar com o servidor"
- Verifique se o backend está rodando: `python app.py`
- Teste: http://localhost:5000/health
- Verifique o console do navegador (F12) para mais detalhes

### ❌ "Erro no banco de dados"
- Verifique credenciais em `.env`
- Ensure MySQL está rodando
- Teste conexão manualmente: `mysql -u root -p labvilas`

### ❌ "Módulo não encontrado"
- Certifique-se que o ambiente virtual está ativado
- Reinstale dependências: `pip install -r requirements.txt`

### ❌ Porta 5000 em uso
Altere a porta em `app.py` (última linha):
```python
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3000)  # Mude 5000 para 3000
```

Também atualize em `script.js`:
```javascript
const resposta = await fetch('http://localhost:3000/api/contato', {
```

---

## 📦 Deploy para Production

Quando for colocar em produção, use:

```bash
pip install gunicorn
gunicorn app:app
```

Ou deploy em serviços como:
- **Heroku** (com suporte a MySQL)
- **PythonAnywhere**
- **Render**
- **Railway**
- **AWS/DigitalOcean** (VPS próprio)

---

## 📚 Estrutura do Projeto

```
SITE _ VILAS/
├── app.py                 # Backend Flask
├── requirements.txt       # Dependências
├── .env                  # Configurações (não commitar!)
├── .env.example          # Exemplo de .env
├── script.js             # Frontend + formulário
├── index.html            # Página principal
└── estilo.css            # Estilos
```

---

## ✅ Próximos Passos

1. ✅ Backend conectado
2. ⬜ Adicionar validação mais robusta (e-mail verificado)
3. ⬜ Enviar e-mail confirmação automática
4. ⬜ Painel administrativo para visualizar mensagens
5. ⬜ Deploy em produção

---

**Dúvidas?** Consulte a documentação:
- [Flask](https://flask.palletsprojects.com/)
- [Flask-MySQLdb](https://flask-mysqldb.readthedocs.io/)
- [MySQL](https://dev.mysql.com/doc/)
