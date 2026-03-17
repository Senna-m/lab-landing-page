# 🧪 Lab Vilas — Landing Page de Laboratório Clínico

Site institucional para laboratório clínico com backend em Flask, banco de dados MySQL e painel administrativo protegido.

<img width="1372" height="913" alt="image" src="https://github.com/user-attachments/assets/98005139-689e-40f5-a7fd-94f9f9c8de0b" />

---

## 🎯 Sobre o projeto

Aplicação full stack desenvolvida para laboratório clínico, com foco em:
- Apresentação institucional dos serviços
- Formulário de contato integrado ao banco de dados
- Painel administrativo com autenticação por API Key para gestão dos atendimentos

---

## 🛠️ Stack

| Camada | Tecnologia |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (Fetch API) |
| Backend | Python 3 · Flask · Flask-CORS · Flask-MySQLdb |
| Banco de dados | MySQL |
| Autenticação | API Key (X-API-Key header) |
| Ambiente | python-dotenv |
| Testes de API | Postman |
| Versionamento | Git & GitHub (branches, pull requests, merge) |

---

## ⚙️ Funcionalidades

- ✅ Página institucional com informações do laboratório
- ✅ Cards de serviços (Biologia Molecular, Imunologia, Hematologia, e mais)
- ✅ Formulário de contato com validação no frontend
- ✅ Formulário de atendimento (Agendamento, Dúvida, Reclamação, Elogio)
- ✅ Dados persistidos em MySQL (tabelas separadas por tipo)
- ✅ API REST com Flask para receber e consultar formulários
- ✅ Painel admin (`admin.html`) com tabela, filtros e login por API Key
- ✅ Rotas administrativas protegidas com autenticação

---

## 🔒 API Endpoints

| Método | Rota | Auth | Descrição |
|---|---|---|---|
| POST | `/api/contato` | ❌ | Enviar formulário de contato |
| GET | `/api/contatos` | ✅ API Key | Listar contatos (admin) |
| POST | `/api/atendimento` | ❌ | Enviar formulário de atendimento |
| GET | `/api/atendimentos` | ✅ API Key | Listar atendimentos (admin) |
| GET | `/health` | ❌ | Health check |

> Rotas admin exigem o header `X-API-Key` com o valor definido no `.env`.

---

## 📂 Estrutura do projeto

```
lab-landing-page/
├── Front/
│   ├── HTML/
│   │   ├── index.html              # Página principal
│   │   ├── laboratorio.html        # Sobre o laboratório
│   │   ├── serviços.html           # Serviços
│   │   ├── Fale conosco.html       # Contato
│   │   └── admin.html              # Painel admin (protegido)
│   └── CSS/
│       └── estilo.css              # Estilos globais
├── script.js                       # Formulário de contato + interatividade
├── script-atendimento.js           # Formulário de atendimento
├── app.py                          # Backend Flask
├── requirements.txt
├── .env.example                    # Template de variáveis de ambiente
├── .gitignore
└── SETUP.md                        # Instruções de configuração
```

---

## 🚀 Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/Senna-m/lab-landing-page.git
cd lab-landing-page

# 2. Copie o arquivo de ambiente e preencha as credenciais
cp .env.example .env

# 3. Instale as dependências
pip install -r requirements.txt

# 4. Crie as tabelas no banco
# Tabela de contatos (via API):
GET http://localhost:5000/api/criar-tabela

# Tabela de atendimentos (via MySQL):
# Cole o SQL do SETUP.md no seu cliente MySQL

# 5. Rode o backend
python app.py

# 6. Abra o index.html no navegador
```

---

## 🗄️ Banco de dados

```sql
-- Contatos
CREATE TABLE IF NOT EXISTS contatos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mensagem TEXT NOT NULL,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Atendimentos
CREATE TABLE IF NOT EXISTS formulario_atendimento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    tipo VARCHAR(255) NOT NULL,
    mensagem TEXT NOT NULL,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 👩‍💻 Sobre

Desenvolvido por **Nathalie Senna** — [GitHub](https://github.com/Senna-m) · [LinkedIn](https://linkedin.com/in/nathalie-senna-a37b483b0/)
