# Clinical Laboratory Landing Page

A front-end landing page developed for a clinical laboratory website, with a Flask backend and MySQL database for persistent contact form submissions and service attendance requests.

The goal of this project is to practice HTML, CSS, JavaScript and backend development with Python, creating a clean and functional institutional page for laboratory services.

## Preview

<img width="1907" height="943" alt="image" src="https://github.com/user-attachments/assets/1fc20557-ad6f-443a-a404-46a9ba7c2421" />

<img width="1608" height="900" alt="image" src="https://github.com/user-attachments/assets/6801eed4-1a70-4343-b702-63bb229ef3dc" />

<img width="1900" height="944" alt="image" src="https://github.com/user-attachments/assets/d2b14a99-bf66-4a49-9ebb-8982c8723a3e" />

<img width="1917" height="945" alt="image" src="https://github.com/user-attachments/assets/fb0bced1-b02c-464b-a092-6b8660053a2b" />




## Features

- Laboratory presentation page
- Quick information about opening hours
- Exam results access section
- Service information cards (Anatomia Patológica, Imunologia, Biologia Molecular, Hematologia, Microbiologia, Bioquímica, Endocrinologia, Toxicologia)
- Contact modal form with frontend validation
- Service attendance form with type selection (Agendamento, Dúvida, Reclamação, Elogio)
- Responsive and clean layout
- REST API backend with Flask
- Contact and attendance form submissions stored in MySQL database
- Admin routes protected with API Key authentication
- Admin panel (`admin.html`) to view and filter attendance records

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Fetch API)
- Python 3 (Flask)
- MySQL
- Flask-CORS, Flask-MySQLdb, python-dotenv
- Visual Studio Code
- Postman (API testing)
- Git & GitHub (branches, pull requests, merge)

## 📂 Project Structure

```
lab-landing-page/
│
├── Front/
│   ├── HTML/
│   │   ├── index.html              # Home page
│   │   ├── laboratorio.html        # About the laboratory
│   │   ├── serviços.html           # Services page
│   │   ├── Fale conosco.html       # Contact page
│   │   └── admin.html              # Admin panel (protected)
│   └── CSS/
│       └── estilo.css              # Global styles
├── script.js                       # Frontend interactivity + contact form
├── script-atendimento.js           # Frontend interactivity + attendance form
├── app.py                          # Flask backend
├── requirements.txt
├── .env.example                    # Environment variables template
├── .gitignore                      # .env must be listed here
├── SETUP.md                        # Setup instructions
├── setup.bat                       # Windows setup script
├── imagens/
│   └── logo.png
└── README.md
```

## 🔒 API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/api/contato` | No | Submit contact form |
| GET | `/api/contatos` | API Key | List all contacts (admin) |
| POST | `/api/atendimento` | No | Submit attendance form |
| GET | `/api/atendimentos` | API Key | List all attendance records (admin) |
| GET | `/api/criar-tabela` | No | Create contacts table (run once) |
| GET | `/health` | No | Health check |

Admin routes require the `X-API-Key` header with the value defined in `.env`.

## 🗄️ Database Tables

**contatos** — stores contact form submissions:
```sql
CREATE TABLE IF NOT EXISTS contatos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mensagem TEXT NOT NULL,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**formulario_atendimento** — stores attendance form submissions:
```sql
CREATE TABLE IF NOT EXISTS formulario_atendimento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    tipo VARCHAR(255) NOT NULL,
    mensagem TEXT NOT NULL,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## ⚙️ Setup

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your credentials:

```
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DB=lab_vilas
ADMIN_API_KEY=your-secret-key
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Create the database tables. The contacts table can be created via the API:

```
GET http://localhost:5000/api/criar-tabela
```

The attendance table must be created directly in MySQL:

```sql
CREATE TABLE IF NOT EXISTS formulario_atendimento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    tipo VARCHAR(255) NOT NULL,
    mensagem TEXT NOT NULL,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

5. Run the backend:

```bash
python app.py
```

6. Open `index.html` in your browser.
7. Access the admin panel at `admin.html` — enter your `ADMIN_API_KEY` to log in.

## 🎯 Learning Goals

This project was developed to practice:

- HTML page structure and multi-page navigation
- CSS layout with Flexbox and Grid
- Responsive design with media queries
- JavaScript DOM manipulation and Fetch API
- Modal implementation
- REST API development with Flask
- MySQL database integration
- Multiple database tables for different form types
- Environment variables and security best practices
- API Key authentication
- Admin panel with login, data table and filters
- API testing with Postman
- Git branching, pull requests and merge workflow
- Preparing projects for GitHub portfolio
