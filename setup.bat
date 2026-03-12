@echo off
REM Script para facilitar o setup no Windows

echo ======================================
echo  Configurando Projeto LabVilas
echo ======================================
echo.

REM Criar ambiente virtual
echo [1/4] Criando ambiente virtual...
python -m venv venv
echo ✓ Ambiente virtual criado

REM Ativar ambiente virtual
echo.
echo [2/4] Ativando ambiente virtual...
call venv\Scripts\activate
echo ✓ Ambiente virtual ativado

REM Instalar dependências
echo.
echo [3/4] Instalando dependências...
pip install -r requirements.txt
echo ✓ Dependências instaladas

REM Criar .env a partir de .env.example
echo.
echo [4/4] Configurando arquivo .env...
if exist .env (
    echo ⚠ .env já existe, pulando...
) else (
    copy .env.example .env
    echo ✓ .env criado - EDITE COM SUAS CREDENCIAIS!
    echo.
    echo ⚠ IMPORTANTE: Edite o arquivo .env com suas credenciais do MySQL
    start notepad .env
)

echo.
echo ======================================
echo  Setup Completo!
echo ======================================
echo.
echo Próximos passos:
echo 1. Edite .env com suas credenciais MySQL
echo 2. Execute: python app.py
echo 3. Acesse: http://localhost:5000/api/criar-tabela
echo 4. Abra index.html no navegador
echo.
pause
