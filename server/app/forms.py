from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Email, EqualTo, Length

class SignupForm(FlaskForm):
      username = StringField('Username', validators=[DataRequired()])
      email = StringField('Email', validators=[DataRequired(), Email()])
      password = PasswordField('Password', validators=[DataRequired()])
    
