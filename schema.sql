DROP DATABASE IF EXISTS food_swap;

CREATE DATABASE food_swap;

\connect food_swap;

CREATE TABLE users (
  id SERIAL,
  name VARCHAR(25) NULL DEFAULT NULL,
  username VARCHAR(25) NULL DEFAULT NULL,
  picture VARCHAR(255) NULL DEFAULT NULL,
  email VARCHAR(255) NULL DEFAULT NULL,
  bio VARCHAR(255) NULL DEFAULT NULL,
  latitude Float,
  longitude Float,
  PRIMARY KEY (id)
);

CREATE TABLE food (
  id SERIAL,
  name VARCHAR(25) NULL DEFAULT NULL,
  description VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE friends (
  id SERIAL,
  userFriend1 INTEGER NOT NULL REFERENCES users(id),
  userFriend2 INTEGER NOT NULL REFERENCES users(id),
  PRIMARY KEY (id)
);

CREATE TABLE trade (
  id SERIAL,
  userId1 INTEGER NOT NULL REFERENCES users(id),
  foodId1 INTEGER NOT NULL REFERENCES food(id),
  userId2 INTEGER NOT NULL REFERENCES users(id),
  foodId2 INTEGER NOT NULL REFERENCES food(id),
  status BOOLEAN DEFAULT NULL,
  PRIMARY KEY (id)
);



INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES (1,'Airyque Ervin','Airwick','https://vignette.wikia.nocookie.net/my-pokemon-fanfic-adventures/images/5/51/Bulbasaur.jpg/revision/latest?cb=20130826134437','airwick.gmail.com','Team bulbasaur', 37.79343979856637,-122.42271423339844);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES (2,'Allen Price','HackerPirate','https://vignette.wikia.nocookie.net/pokemon/images/5/54/Pokemon-Ash-s-Pikachu-Riley-Sir-Aaron-s-Lucarios-pokemon-guys-10262907-563-579.jpg/revision/latest?cb=20131129010151','hacker_reactor.gmail.com','HR Pirateship Captain',37.791676312661046,-122.42769241333008);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(3,'Angela Chang','angela_chang','https://vignette.wikia.nocookie.net/mighty355/images/d/de/Torchic.jpg/revision/latest?cb=20150818122011','angela_chang.gmail.com','Team torchic',37.779466409747215,-122.42340087890625);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(4,'Anna Sun','anna_sun','https://vignette.wikia.nocookie.net/mighty355/images/d/de/Torchic.jpg/revision/latest?cb=20150818122011','anna_sun.gmail.com','Team Torchic',37.774921097392664,-122.43756294250488);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(5,'Archana Nayak','archana_nayak','https://www.pidgi.net/wiki/images/5/5b/Tepig_-_Pokemon_Conquest.jpg','archana_nayak.gmail.com','Team Tepig',37.761419193645686,-122.42417335510254);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(6,'Daphne Dang','daphne_dang','https://vignette.wikia.nocookie.net/mighty355/images/7/7a/Cyndaquil.jpg/revision/latest?cb=20150818121852','daphne_dang.gmail.com','Team Cyndaquil',37.7934652331513,-122.39928597584367);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(7,'David Bruhn','david_bruhn','https://vignette.wikia.nocookie.net/mighty355/images/d/de/Torchic.jpg/revision/latest?cb=20150818122011','david_bruhn.gmail.com','Team Torchic',37.77926289427511,-122.41928100585938);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(8,'Gil Kwok','gil_kwok','https://vignette.wikia.nocookie.net/nationalpokedex/images/9/9e/Fennekin.jpg/revision/latest?cb=20131225134838','gil_kwok.gmail.com','Team Fenneken',37.78021262835114,-122.4162769317627);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(9,'Mikhail Stepanov','mikhail_stepanov','https://vignette.wikia.nocookie.net/nationalpokedex/images/9/9e/Fennekin.jpg/revision/latest?cb=20131225134838','mikhail_stepanov.gmail.com','Team Fenneken',37.784113193898264,-122.4030590057373);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(10,'Hayden Marx','hayden_marx','https://i.pinimg.com/736x/79/d9/7c/79d97cd68801eb29a4a5a33e208fb2ff--pokemon-charmander-google-search.jpg','hayden_marx.gmail.com','Team Charmander',37.78248515678485,-122.40780115127563);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(11,'Illya Yanchuk','illya_yanchuk','https://vignette.wikia.nocookie.net/nationalpokedex/images/9/9e/Fennekin.jpg/revision/latest?cb=20131225134838','illya_yanchuk.gmail.com','Team Fenneken',37.78172200204317,-122.39614963531494);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(12,'Kenneth Laprelle','kenneth_laprelle','https://www.pidgi.net/wiki/images/5/5b/Tepig_-_Pokemon_Conquest.jpg','kenneth_laprelle.gmail.com','Team Tepig',37.78250211568961,-122.39269495010376);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(13,'Lam Bui','lam_bui','https://img00.deviantart.net/546c/i/2012/035/b/2/squirtle_by_maii1234-d4oo1aq.jpg','lam_bui.gmail.com','Team Squirtle',37.788946217811656,-122.40149259567261);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(14,'Lara Dashut','lara_dashut','https://vignette.wikia.nocookie.net/mighty355/images/7/7a/Cyndaquil.jpg/revision/latest?cb=20150818121852','lara_dashut.gmail.com','Team Cyndaquil',37.78443540532579,-122.40647077560425);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(15,'Lory Zhang','lory_zhang','https://vignette.wikia.nocookie.net/mighty355/images/d/de/Torchic.jpg/revision/latest?cb=20150818122011','lory_zhang.gmail.com','Team Torchic',37.782688663385215,-122.41044044494629);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(16,'Matt Mullen','matt_mullen','https://vignette.wikia.nocookie.net/mighty355/images/7/7a/Cyndaquil.jpg/revision/latest?cb=20150818121852','matt_mullen.gmail.com','Team cyndaquil. I am a snack and a half',37.781230187034424,-122.40627765655518);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(17,'Mishall Afzal','kenneth_laprelle','https://i.pinimg.com/736x/10/22/61/102261e46841f4084744dba74fafe5f6--type-pokemon-pokemon-sun.jpg','kenneth_laprelle.gmail.com','Team litten',37.780984278302874,-122.40843415260315);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(18,'Stephan Lefort','stephan_lefort','https://i.pinimg.com/736x/10/22/61/102261e46841f4084744dba74fafe5f6--type-pokemon-pokemon-sun.jpg','stephan_lefort.gmail.com','team litten',37.78434213374124,-122.40348815917969);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(19,'suhail Ansari','suhail_ansari','https://vignette.wikia.nocookie.net/nationalpokedex/images/9/9e/Fennekin.jpg/revision/latest?cb=20131225134838','suhail_ansari.gmail.com','Team Fenneken',37.783841856869735,-122.403005361557);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(20,'Thomas Eliot','thomas_eliot','https://www.pidgi.net/wiki/images/5/5b/Tepig_-_Pokemon_Conquest.jpg','thomas_eliot.gmail.com','Team Tepig',37.785359635574224,-122.40386366844177);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(21,'Victor Huynh','victor_huynh','https://www.pidgi.net/wiki/images/5/5b/Tepig_-_Pokemon_Conquest.jpg','victor_huynh.gmail.com','Team Tepig',37.78654670334071,-122.40198612213135);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(22,'Alex Choi','alex_choi','https://i.pinimg.com/736x/79/d9/7c/79d97cd68801eb29a4a5a33e208fb2ff--pokemon-charmander-google-search.jpg','alex_choi.gmail.com','Team Charmander',37.78756417482158,-122.40405678749084);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(23,'Angel Hernandez','angel_hernandez','https://vignette.wikia.nocookie.net/mighty355/images/7/7a/Cyndaquil.jpg/revision/latest?cb=20150818121852','angel_hernandez.gmail.com','Team Cyndaquil',37.78919210005242,-122.40572327747941);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(24,'Dustin Burns','dustin_burns','https://i.pinimg.com/736x/10/22/61/102261e46841f4084744dba74fafe5f6--type-pokemon-pokemon-sun.jpg','dustin_burns.gmail.com','Team litten',37.790497805829254,-122.40386366844177);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(25,'Tiffany Pham','tiffany_pham','https://vignette.wikia.nocookie.net/agus-pokemon/images/f/ff/Togepi.png/revision/latest?cb=20140616073706','tiffany_pham.gmail.com','Team Togepi',37.79196457765796,-122.4051833152771);
INSERT INTO users (id,name,username,picture,email,bio,latitude,longitude) VALUES(26,'Calvin Wong','calvin_wong','https://i.pinimg.com/736x/79/d9/7c/79d97cd68801eb29a4a5a33e208fb2ff--pokemon-charmander-google-search.jpg','calvin_wong.gmail.com','Team Charmander',37.7942706571458,-122.40164279937744);
