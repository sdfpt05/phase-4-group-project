from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Email, EqualTo, Length

class SignupForm(FlaskForm):
      username = StringField('Username', validators=[DataRequired()])
      email = StringField('Email', validators=[DataRequired(), Email()])
      password = PasswordField('Password', validators=[DataRequired()])
       password2 = PasswordField(
        'Repeat Password', validators=[DataRequired(), EqualTo('password')])
   submit = SubmitField('Sign Up')

class BookForm(FlaskForm):
   title = StringField('Title', validators=[DataRequired()])
    author = StringField('Author', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[Length(min=0, max=500)])
    submit = SubmitField('Submit')

