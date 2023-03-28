from flask import Flask, make_response, request, jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource

from models import db, User, Game, Review, UserGame

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

api = Api(app)
db.init_app(app)
migrate = Migrate(app, db)

#/users
class Users(Resource):
    #GET
    def get(self):
        return make_response([user.to_dict() for user in User.query.all()], 200)
    
    #POST
    def post(self):
        try:
            new_user = User(
                name = request.get_json()['name'],
                email = request.get_json()['email'],
                password = request.get_json()['password']
            )

            db.session.add(new_user)
            db.session.commit()

            return make_response(jsonify(new_user.to_dict()), 201)
        except ValueError as e:
            return make_response({'error': e.__str__()}, 400)

api.add_resource(Users, '/users')

#/users/:id
class UserById(Resource):
    #GET
    def get(self, id):
        user = User.query.filter_by(id = id).first().to_dict()

        if not user:
            return make_response({'error': 'User Not Found!'}, 404)

        return make_response(user, 200)

    #PATCH
    def patch(self, id):
        user = User.query.filter_by(id= id).first()

        if not user:
            return make_response({'error': 'User Not Found!' }, 404)

        try: 
            request_json = request.get_json()
            for key in request_json:
                setattr(user, key, request_json[key])
        
            db.session.add(user)
            db.session.commit()

            return make_response(user.to_dict(), 200)
        except ValueError as e:
            return make_response({'error': e.__str__()}, 400)

    #DELETE
    def delete(self, id):
        user = User.query.filter_by(id = id).first()

        if not user:
            return make_response({'error': 'User Not Found!'}, 404)

        db.session.delete(user)
        db.session.commit()

        return make_response('', 204)

api.add_resource(UserById, '/users/<int:id>')

#/games
class Games(Resource):
    #GET
    def get(self):
        return make_response(jsonify([game.to_dict() for game in Game.query.all()]), 200)

    #POST
    def post(self):
        try:
            new_game = Game(
                price = request.get_json()['price'],
                genre = request.get_json()['genre'],
                title = request.get_json()['title'],
                description = request.get_json()['description']
            )

            db.session.add(new_game)
            db.session.commit()

            return make_response(jsonify(new_game.to_dict()), 201)
        except ValueError as e:
            return make_response({'error': e.__str__()}, 400)

api.add_resource(Games, '/games')

#/games/:id
class GameById(Resource):
    #GET
    def get(self, id):
        return make_response(Game.query.filter_by(id = id).first().to_dict(), 200)

    #PATCH
    def patch(self, id):
        game = Game.query.filter_by(id == id).first()

        if not game:
            return make_response({ 'error': 'Game Not Found!'}, 404)

        try:
            request_json = request.get_json()
            for key in request_json:
                setattr(game, key, request_json[key])
        
            db.session.add(game)
            db.session.commit()

            return make_response(game.to_dict(), 200)
        except ValueError as e:
            return make_response({'error': e.__str__()}, 400)

    #DELETE
    def delete(self, id):
        game = Game.query.filter_by(id = id).first()

        if not game:
            return make_response({'error': 'Game Not Found!'}, 404)
        
        db.session.delete(game)
        db.session.commit()

        return make_response('', 204)

api.add_resource(GameById, '/games/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)