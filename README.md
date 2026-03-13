# Clinical Laboratory Landing Page

A front-end landing page developed for a clinical laboratory website, with a Flask backend and MySQL database for persistent contact form submissions.

The goal of this project is to practice HTML, CSS, JavaScript and backend development with Python, creating a clean and functional institutional page for laboratory services.

## Preview

<img width="666" height="542" alt="image" src="https://github.com/user-attachments/assets/8ee541b3-97c0-452f-b3d7-e4541f71ff92" />

## Features

- Laboratory presentation page
- Quick information about opening hours
- Exam results access section
- Service information cards (Anatomia Patológica, Imunologia, Biologia Molecular, Hematologia, Microbiologia, Bioquímica, Endocrinologia, Toxicologia)
- Contact modal form with frontend validation
- Responsive and clean layout
- REST API backend with Flask
- Contact form submissions stored in MySQL database
- Admin route protected with API Key authentication

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Fetch API)
- Python 3 (Flask)
- MySQL
- Flask-CORS, Flask-MySQLdb, python-dotenv
- Visual Studio Code
- Postman (API testing)

## 📂 Project Structure

```
lab-landing-page/
│
├── index.html             # Home page
├── laboratorio.html       # About the laboratory
├── serviços.html          # Services page
├── estilo.css             # Global styles
├── script.js              # Frontend interactivity + form submission
├── app.py                 # Flask backend
├── requirements.txt
├── .env.example           # Environment variables template
├── .gitignore             # .env must be listed here
├── SETUP.md               # Setup instructions
├── setup.bat              # Windows setup script
├── imagens/
│   └── logo.png
└── README.md
```

## 🔒 API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/api/contato` | No | Submit contact form |
| GET | `/api/contatos` | API Key | List all contacts (admin) |
| GET | `/api/criar-tabela` | No | Create table (run once) |
| GET | `/health` | No | Health check |

Admin routes require the `X-API-Key` header with the value defined in `.env`.

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

4. Create the database table:

```
GET http://localhost:5000/api/criar-tabela
```

5. Run the backend:

```bash
python app.py
```

6. Open `index.html` in your browser.

## 🎯 Learning Goals

This project was developed to practice:

- HTML page structure and multi-page navigation
- CSS layout with Flexbox and Grid
- Responsive design with media queries
- JavaScript DOM manipulation and Fetch API
- Modal implementation
- REST API development with Flask
- MySQL database integration
- Environment variables and security best practices
- API Key authentication
- API testing with Postman
- Preparing projects for GitHub portfolio
