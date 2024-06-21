from flask import Blueprint, request, jsonify
from . import db
from .models import Book, User
from .forms import SignupForm, BookForm

bp = Blueprint('routes', __name__)

@bp.route('/signup', methods=['POST'])
def signup():
    form = SignupForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        return jsonify({'message': 'User created successfully'}), 201
    return jsonify({'errors': form.errors}), 400

@bp.route('/books', methods=['GET'])
def get_books():
    books = Book.query.all()
    return jsonify([book.to_dict() for book in books])

@bp.route('/addbook', methods=['POST'])
def add_book():
    form = BookForm()
    if form.validate_on_submit():
        book = Book(title=form.title.data, author=form.author.data, description=form.description.data)
        db.session.add(book)
        db.session.commit()
        return jsonify({'message': 'Book added successfully'}), 201
    return jsonify({'errors': form.errors}), 400

@bp.route('/book/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def book_detail(id):
    book = Book.query.get_or_404(id)
    if request.method == 'GET':
        return jsonify(book.to_dict())
    elif request.method == 'PUT':
        form = BookForm()
        if form.validate_on_submit():
            book.title = form.title.data
            book.author = form.author.data
            book.description = form.description.data
            db.session.commit()
            return jsonify({'message': 'Book updated successfully'})
        return jsonify({'errors': form.errors}), 400
    elif request.method == 'DELETE':
        db.session.delete(book)
        db.session.commit()
        return jsonify({'message': 'Book deleted successfully'})

