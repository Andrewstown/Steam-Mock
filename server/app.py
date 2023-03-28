#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, make_response, request, jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource

# Local imports
from config import app, db, api
from models import db, User, Game, UserGames

#this was in the doc so I'm adding it
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)


# Views go here!

#GET /users
class Users(Resource):
    def get(self):

        user_list = [user.to_dict() for user in User.query.all()]

        response = make_response(user_list, 200)

        return response

#POST /users
    def post(self):
        try:
            new_user = User(
                name = request.get_json()('name'),
                email = request.get_json()('email'),
                password = request.get_json()('password')
                picture = request.get_json()('picture')
            )

            new_user_dict = new_user.to_dict()

            db.session.add(new_user)
            db.session.commit()

            response = make_response(jsonify(new_user_dict), 201)

            return response
        
        except ValueError:
            response = make_response({"errors": ["validation errors"]}, 400)

            return response        

api.add_resource(Users, '/users')


#GET /users/:id

class UserById(Resource):
    def get(self, id):

        user = User.query.filter(User.id == id).first().to_dict()

        if not user:
            return make_response({
                "error": "User not found"
            }, 404)
        else:
            response = make_response(user, 200)

            return response

#DELETE /users/:id

    def delete_user(self, id):
        user = User.query.filter_by(id = id).first()

        if user:

            db.session.delete(user)
            db.session.commit()

            response = make_response(
                "",
                204

            )

        else:

            response = make_response(
                {"error": "user not found"},
                404
            )

        return response

#PATCH /users/:id
    def patch(self, id):

        user = User.query.filter(User.id == id).first()

        if not user:
            return make_response({ "error": "User not found" }, 404)

        try: 
            request_json = request.get_json()
            for key in request_json:
                setattr(user, key, request_json[key])
        
        
            db.session.add(user)
            db.session.commit()

            response = make_response(user.to_dict(), 200)

        except ValueError:
            response = make_response({
                "error": "Invalid input"
            }, 400)

        return response    

api.add_resource(UserById, '/users/<int:id>')


#GET /games
class Games(Resource):
    def get(self):

        game_list = [game.to_dict() for game in Game.query.all()]

        response = make_response(game_list, 200)

        return response


#POST /games
    def post(self):
        try:
            new_game = Game(
                title = request.get_json()('title'),
                price = request.get_json()('price'),
                genre = request.get_json()('genre')
                description = request.get_json()('description')
            )

            new_game_dict = new_game.to_dict()

            db.session.add(new_game)
            db.session.commit()

            response = make_response(jsonify(new_game_dict), 201)

            return response
        
        except ValueError:
            response = make_response({"errors": ["validation errors"]}, 400)

            return response   

api.add_resource(Games, '/games')


#GET /games/:id

class GamesById(Resource):
    def get(self, id):

        game = Game.query.filter(Game.id == id).first().to_dict()

        response = make_response(game, 200)

        return response

#DELETE /games/:id

    def delete_game(self, id):
        game = Game.query.filter_by(id = id).first()

        if game:

            db.session.delete(game)
            db.session.commit()

            response = make_response(
                "",
                204

            )

        else:

            response = make_response(
                {"error": "Game not found"},
                404
            )

        return response

# PATCH /games/:id

    def patch(self, id):

        game = Game.query.filter(Game.id == id).first()

        if not game:
            return make_response({ "error": "Game not found" }, 404)

        try: 
            request_json = request.get_json()
            for key in request_json:
                setattr(game, key, request_json[key])
        
        
            db.session.add(game)
            db.session.commit()

            response = make_response(game.to_dict(), 200)

        except ValueError:
            response = make_response({
                "error": "Invalid input"
            }, 400)

        return response  

api.add_resource(GameById, '/games/<int:id>')



if __name__ == '__main__':
    app.run(port=5555, debug=True)
