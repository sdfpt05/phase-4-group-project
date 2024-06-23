from . import db

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), index=True, unique=True)
    author = db.Column(db.String(120), index=True)
    description = db.Column(db.String(500))

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'author': self.author,
            'description': self.description
        }


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
