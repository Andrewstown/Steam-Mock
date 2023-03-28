from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

from config import db

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String)
    picture = db.Column(db.String)
    bio = db.Column(db.String)    
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_games = db.relationship('UserGame', backref='user')

    serialize_rules = ('-user_games.user', '-games.users','-created_at', '-updated_at')

    games = association_proxy('user_games', 'game')

    def __repr__(self):
        return f'<user name:{self.name}, email:{self.address}, >'


class Game(db.Model, SerializerMixin):
    __tablename__ = "games"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    #price should prob be float with 2 decimals but I'm tired
    price = db.Column(db.Integer)
    genre = db.Column(db.String)
    description = db.Column(db.String)    
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    def __repr__(self):
        return f'<game title:{self.title}, price:{self.price}, genre: {self.genre}, description: {self.description}>'

    user_games = db.relationship('UserGame', backref='game')

    serialize_rules = ('-user_games.game', '-users.games','-created_at', '-updated_at')

    users = association_proxy('user_games', 'user')

    @validates('price')
    def validate_price(self, key, value):
        if value < 0:
            raise ValueError("must have a valid price")
        return value

    @validates('description')  
    def validate_description(self, key, description):
        if not description:
            raise ValueError('Description must be present.')
        
        if len(description) < 20:
            raise ValueError('the description must be at least 20 characters')
        return description




class UserGame(db.Model, SerializerMixin):
    __tablename__ = "user_games"

    id = db.Column(db.Integer, primary_key=True)
    hours_played = db.Column(db.Integer)
    last_played = db.Column(db.DateTime)
    user_rating = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    game_id = db.Column(db.Integer, db.ForeignKey('games.id'))

    serialize_rules = ('-user.games', '-games.user', '-user.user_games', 'game.user_games','-created_at', '-updated_at')