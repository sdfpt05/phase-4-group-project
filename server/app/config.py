import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URI') or 'postgresql://phase_4_project:password@localhost/phase_4_app_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

