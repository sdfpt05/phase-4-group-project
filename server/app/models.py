from . import db
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(256))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(64))
    author = db.Column(db.String(64))
    description = db.Column(db.String(200))
    image_url = db.Column(db.String(200))



class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    roll = db.Column(db.String(64), unique=True)
    username = db.Column(db.String(64))
    mobile = db.Column(db.String(64))
    email = db.Column(db.String(120), unique=True)
