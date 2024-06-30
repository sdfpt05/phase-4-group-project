from flask import Blueprint, request, jsonify, render_template
from . import db
from .models import User, Book, Client
from .forms import SignupForm, BookForm, ClientForm
from werkzeug.security import generate_password_hash, check_password_hash

bp = Blueprint('main', __name__)

@bp.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json() or {}
    form = SignupForm(data=data)
    if form.validate_on_submit():
        user = User(
            username=form.username.data,
            email=form.email.data,
            password=generate_password_hash(form.password.data)
        )
        db.session.add(user)
        db.session.commit()
        return jsonify({"message": "User registered successfully"}), 201
    return jsonify({"errors": form.errors}), 400

@bp.route('/api/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if user is None or not check_password_hash(user.password_hash, password):
        return jsonify({"message": "Invalid email or password"}), 401

    return jsonify({"message": "Login successful", "user": user.username}), 200

@bp.route('/api/books', methods=['GET'])
def get_books():
    books = Book.query.all()
    return jsonify([{
        'id': book.id,
        'title': book.title,
        'author': book.author,
        'description': book.description,
        'image_url': book.image_url
    } for book in books]), 200

@bp.route('/api/addbook', methods=['POST'])
def add_book():
    data = request.get_json() or {}
    form = BookForm(data=data)
    if form.validate_on_submit():
        book = Book(
            title=form.title.data,
            author=form.author.data,
            description=form.description.data,
            image_url=form.image_url.data
        )
        db.session.add(book)
        db.session.commit()
        return jsonify({"message": "Book added successfully"}), 201
    return jsonify({"errors": form.errors}), 400

@bp.route('/api/book/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def book_detail(id):
    book = Book.query.get_or_404(id)
    
    if request.method == 'GET':
        return jsonify({
            'id': book.id,
            'title': book.title,
            'author': book.author,
            'description': book.description,
            'image_url': book.image_url
        }), 200

    elif request.method == 'PUT':
        data = request.get_json() or {}
        form = BookForm(data=data)
        if form.validate_on_submit():
            book.title = form.title.data
            book.author = form.author.data
            book.description = form.description.data
            book.image_url = form.image_url.data
            db.session.commit()
            return jsonify({"message": "Book updated successfully"}), 200
        return jsonify({"errors": form.errors}), 400

    elif request.method == 'DELETE':
        db.session.delete(book)
        db.session.commit()
        return jsonify({"message": "Book deleted successfully"}), 200

@bp.route('/api/addclient', methods=['POST'])
def add_client():
    data = request.get_json() or {}
    form = ClientForm(data=data)
    if form.validate_on_submit():
        client = Client(
            roll=form.roll.data,
            username=form.username.data,
            mobile=form.mobile.data,
            email=form.email.data
        )
        db.session.add(client)
        db.session.commit()
        return jsonify({"message": "Client added successfully"}), 201
    return jsonify({"errors": form.errors}), 400

@bp.route('/api/dashboard', methods=['GET'])
def dashboard():
    books_count = Book.query.count()
    users_count = User.query.count()
    clients_count = Client.query.count()

    return jsonify({
        'books_count': books_count,
        'users_count': users_count,
        'clients_count': clients_count
    }), 200


