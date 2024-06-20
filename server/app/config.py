import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'postgresql://user:password@localhost/flask_app_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

