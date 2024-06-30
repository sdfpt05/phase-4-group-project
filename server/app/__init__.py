from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from .config import Config
from flask_cors import CORS


db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(
        __name__,
        static_url_path='',
        static_folder='../client/dist',
        template_folder='../client/dist'
    )
    # app.config.from_object(Config)
    cors = CORS(app, resources={r"/*": {"origins": "*"}})
    app.config["CORS_HEADERS"] = "Content-Type" 
    app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://phase_4_project:UJuxOc3QDqIX15EzzIf0MK9CVbUok6kG@dpg-cpqpuarv2p9s73do1kp0-a.oregon-postgres.render.com/phase_4_app_db"
    app.config["SECRET_KEY"] = "UJuxOc3QDqIX15EzzIf0MK9CVbUok6kG"
    
    db.init_app(app)
    migrate.init_app(app, db)

    from . import routes
    app.register_blueprint(routes.bp)

    # Disable CSRF protection
    app.config['WTF_CSRF_ENABLED'] = False

    return app



