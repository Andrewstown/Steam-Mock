from faker import Faker
from random import randint
from datetime import datetime

from app import app
from models import db, User, Game, Review, UserGame

userTemp = {
    'images': ['https://images.wallpapersden.com/image/download/akira-kurusu-hd-persona-5-4k_bWhsaWWUmZqaraWkpJRoZ2WtaGdl.jpg', 'https://i.redd.it/2gpmu2gi5fp81.jpg', 'https://static.wikia.nocookie.net/the-secret-world-of-the-animated-characters/images/1/19/CharlieMagne.jpg/revision/latest/scale-to-width-down/320?cb=20211022144246', 'https://cdn.pixilart.com/photos/large/6b2753d8322e716.jpg', 'https://lumiere-a.akamaihd.net/v1/images/ct_starwarsgalaxyofadventures_chewbaccaddt-17324_e75574c4.jpeg?region=0,0,600,600&width=320', 'https://static.wikia.nocookie.net/battlefordreamisland/images/8/8f/OTKt-nsC_400x400.jpeg/revision/latest/scale-to-width-down/320?cb=20190711143225'],
    'passwords': ['password123', 'yullneverGETTHIS!', 'baseball2005', 'iHATEjustice123321', 'mariokart8iscool', 'wonder543women']
}

gameTemp = {
    'images': ['https://cdn.cloudflare.steamstatic.com/steam/apps/361420/header.jpg?t=1656698434', 'https://cdn.cloudflare.steamstatic.com/steam/apps/648800/header.jpg?t=1655744208', 'https://cdn.cloudflare.steamstatic.com/steam/apps/602960/header.jpg?t=1679062168', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1533390/header.jpg?t=1673750290', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/header.jpg?t=1678446810', 'https://cdn.cloudflare.steamstatic.com/steam/apps/457140/header.jpg?t=1677179763', 'https://cdn.cloudflare.steamstatic.com/steam/apps/518790/header.jpg?t=1679924765', 'https://cdn.cloudflare.steamstatic.com/steam/apps/526870/header.jpg?t=1670335305', 'https://cdn.cloudflare.steamstatic.com/steam/apps/251570/header.jpg?t=1650477344', 'https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg?t=1665425286', 'https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg?t=1678981332', 'https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg?t=1666290860', 'https://cdn.cloudflare.steamstatic.com/steam/apps/4000/header.jpg?t=1663621793', 'https://cdn.cloudflare.steamstatic.com/steam/apps/960090/header.jpg?t=1668396558', 'https://cdn.cloudflare.steamstatic.com/steam/apps/220/header.jpg?t=1666823596', 'https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg?t=1675801903', 'https://cdn.cloudflare.steamstatic.com/steam/apps/274900/header.jpg?t=1666994527', 'https://cdn.cloudflare.steamstatic.com/steam/apps/400/header.jpg?t=1673562889', 'https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg?t=1677267116', 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1668125812'],
    'prices': [0.00, 0.99, 1.99, 2.99, 3.99, 4.99, 7.49, 9.99, 14.99, 19.99, 24.99, 29.99, 39.99, 49.99, 59.99],
    'genres': ['Indie', 'Adventure', 'Multiplayer', 'Fantasy', 'Sports', 'Puzzle', 'Shooter', 'Racing', 'Open World', 'RPG', 'Strategy', 'Anime', 'Sci-fi', 'Horror', 'PvP', 'PvE', 'VR', 'Sandbox', 'Space', 'Mediveal', 'Rouglike', 'Platformer', 'Tower Defence'],
    'titles': ['Astroneer', 'Raft', 'Barotrauma', 'Gorilla Tag', 'Dead Space', 'Oxygen Not Included', 'theHunter: Call of the Wild', 'Satisfactory', '7 Days to Die', 'Team Fortress 2', 'Rust', 'Terraria', 'Garrys Mod', 'Bloons TD 6', 'Half-Life 2', 'Left 4 Dead 2', 'Murder Miners', 'Portal', 'Portal 2', 'Counter-strike: Global Offensive'],
    'descriptions': ['A game of aerospace industry and interplanetary exploration.', 'Throw you and your friends into an epic oceanic adventure! Alone or together, players battle to survive a perilous voyage across a vast sea! Gather debris, scavenge reefs and build your own floating home, but be wary of the man-eating sharks!', 'A 2D co-op submarine simulator – in space, with survival horror and RPG elements. Steer your submarine, complete missions, fight monsters, fix leaks, operate machinery, man the guns and craft items, and stay alert!', 'Run, jump, and climb using only your hands. Play tag or infection with people online. Run away from the infected players, or outmaneuver the survivors to catch them.', 'The sci-fi survival-horror classic returns, completely rebuilt to offer an even more immersive experience — including visual, audio, and gameplay improvements — while staying faithful to the original game’s thrilling vision.', 'A space-colony simulation game. Deep inside an alien space rock your industrious crew will need to master science, overcome strange new lifeforms, and harness incredible space tech to survive, and possibly, thrive.', 'Experience an atmospheric hunting game like no other in this realistic and visually breathtaking open world. Immerse yourself in the atmospheric single player campaign, or share the ultimate hunting experience with friends.', 'A first-person open-world factory building game with a dash of exploration and combat. Play alone or with friends, explore an alien planet, create multi-story factories, and enter conveyor belt heaven!', 'An open-world game that is a unique combination of first-person shooter, survival horror, tower defense, and role-playing games. Play the definitive zombie survival sandbox RPG that came first. Navezgane awaits!', 'Nine distinct classes provide a broad range of tactical abilities and personalities. Constantly updated with new game modes, maps, equipment and, most importantly, hats!', 'The only aim is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.', 'Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game', 'A physics sandbox. There arent any predefined aims or goals. We give you the tools and leave you to play.', 'Get ready for a massive 3D tower defense game designed to give you hours and hours of the best strategy gaming available.', 'This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans', 'Halo-inspired. Destructible/constructible environments. Vehicles. Zombie survival. Hookshots. Infection mode: Be the zombie & eat the dead to level up your zombie abilities.', 'Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.', ],
    'studios': ['System Era Softworks', 'Redbeet Interactive', 'Axolot Games', 'FakeFish, Undertow Games', 'Daedalic Entertainment', 'Another Axiom', 'Motive', 'Electronic Arts', ' Klei Entertainment', 'Expansive Worlds', 'Coffee Stain Studios', 'The Fun Pimps', 'Valve', 'JForce Games', 'Ninja Kiwi', 'Facepunch Studios', 'Re-Logic']
}

reviewTemp = {
    'descriptions': ['a bit lackluster but once you get it, you really get it.', 'DO NOT BUY THIS GAME!!!', 'Only good with friends... Sucks otherwise', 'Are you kidding me?? Why havent you bought this yet???', 'Meh...', 'a really fun twist on this genre, not what you are expecting!', 'ive put too many hours into this', 'a nice story with super fast pace multiplayer!!', 'only fun for like 5 mins..', 'Another spark from this studio, keep it up!', 'games like these only come once in a blue moon.', 'man, if i ever see these guys make another game, IM GOING TO EXPLODE!!!!!!!!!!', 'you only find ones like these on steam', 'TAKE MY MONEY ALREADY11111!111!! sorry for caps', 'a WASTE of money! I want a refund']
}

if __name__ == '__main__':
    f = Faker()
    with app.app_context():
        print('Deleting Data...')
        User.query.delete()
        Game.query.delete()
        Review.query.delete()
        UserGame.query.delete()

        print('Creating Users...')
        for i in range(40):
            user = User(
                bio = f.paragraph(nb_sentences=5), 
                img = randint(1, 3) == 1 and 'https://steamuserimages-a.akamaihd.net/ugc/885384897182110030/F095539864AC9E94AE5236E04C8CA7C2725BCEFF/' or userTemp['images'][randint(0, len(userTemp['images'])-1)],
                name = f.first_name(),
                email = f.email(),
                password = userTemp['passwords'][randint(0, len(userTemp['passwords'])-1)],
                created_at = f.date_between(start_date=datetime(2003, 9, 12))
            )
            db.session.add(user)

        print('Creating Games...')
        for i in range(30):
            game = Game(
                img = gameTemp['images'][randint(0, len(gameTemp['images'])-1)],
                price = gameTemp['prices'][randint(0, len(gameTemp['prices'])-1)],
                genre = gameTemp['genres'][randint(0, len(gameTemp['genres'])-1)],
                title = gameTemp['titles'][randint(0, len(gameTemp['titles'])-1)],
                studio = gameTemp['studios'][randint(0, len(gameTemp['studios'])-1)],
                description = gameTemp['descriptions'][randint(0, len(gameTemp['descriptions'])-1)],
                created_at = f.date_between(start_date=datetime(2003, 9, 12)),
            )
            game.updated_at = f.date_between(start_date=game.created_at)
            db.session.add(game)

        print('Generating UserGames with Reviews in them...')
        for user in User.query.all():
            for game in Game.query.all():
                if randint(1, 3) == 1:
                    usergame = UserGame(
                        last_played = f.date_between(start_date=game.created_at),
                        hours_played = randint(0, 1000),
                        game_id = game.id,
                        user_id = user.id
                    )
                    db.session.add(usergame)
                    if randint(1, 2) == 1:
                        review = Review(
                            rating = randint(1, 10),
                            description = reviewTemp['descriptions'][randint(0, len(reviewTemp['descriptions'])-1)],
                            created_at = f.date_between(start_date=game.created_at),
                            game_id = game.id,
                            user_id = user.id
                        )
                        db.session.add(review)

        db.session.commit()
        print('Finished!')