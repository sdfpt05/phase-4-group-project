# phase-4-group-project

This is a Flask backend application with a PostgreSQL database, providing endpoints for managing books and users.
The app is deployed here: https://phase-4-group-project.onrender.com

## Prerequisites

- Python 3.8 or higher
- PostgreSQL
- `pipenv` for managing the virtual environment and dependencies

## Setting Up the Project

### 1. Clone the Repository

```bash
git clone <https://github.com/sdfpt05/phase-4-group-project.git>
cd <phase-4-group-project>
```

### 2. Set Up the Virtual Environment

Use pipenv to set up the virtual environment and install the dependencies:

```bash
pipenv install
```

### 3. Configure the Database

Ensure that PostgreSQL is installed and running on your machine. Create a database for the project:

```sql
CREATE DATABASE flask_app_db;
CREATE USER flask_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE flask_app_db TO flask_user;
```

### 4. Set Up Environment Variables

Create a .env file in the project root directory and add the following environment variables:

```env
DATABASE_URL=postgresql://flask_user:your_password@localhost/flask_app_db
```

### 5. Initialize the Database

Use Flask-Migrate to initialize and migrate the database:

```bash
pipenv run flask db init
pipenv run flask db migrate
pipenv run flask db upgrade
```

### 6. Run the Application

Start the Flask application:

```bash
pipenv run python run.py
```

The application will be available at http://127.0.0.1:5000.
