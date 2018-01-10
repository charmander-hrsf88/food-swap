/*
Table User
  id,
  name,e
  username,
  picture,
  email,
  bio,
  location X,
  location Y
*/




const dummyData = [

  //Airyque Ervin
  {
    name: 'Airyque Ervin',
    username: 'Airwick',
    picture: 'https://vignette.wikia.nocookie.net/my-pokemon-fanfic-adventures/images/5/51/Bulbasaur.jpg/revision/latest?cb=20130826134437',
    email: 'airwick.gmail.com',
    bio: 'Team bulbasaur',
    latitude: 37.782552992380566,
    longitude: -122.40983778610826
  },

  //Allen Price
  {
    name: 'Allen Price',
    username: 'HackerPirate',
    picture: 'https://vignette.wikia.nocookie.net/pokemon/images/5/54/Pokemon-Ash-s-Pikachu-Riley-Sir-Aaron-s-Lucarios-pokemon-guys-10262907-563-579.jpg/revision/latest?cb=20131129010151',
    email: 'hacker_reactor.gmail.com',
    bio: 'HR Pirateship Captain',
    latitude: 37.791676312661046,
    longitude: -122.42769241333008
  },

  //Angela Chang
  {
    name: 'Angela Chang',
    username: 'angela_chang',
    picture: 'https://vignette.wikia.nocookie.net/mighty355/images/d/de/Torchic.jpg/revision/latest?cb=20150818122011',
    email: 'angela_chang.gmail.com',
    bio: 'Team torchic',
    latitude: 37.779466409747215,
    longitude: -122.42340087890625
  },

  //Anna sun
  {
    name: 'Anna Sun',
    username: 'anna_sun',
    picture: 'https://vignette.wikia.nocookie.net/mighty355/images/d/de/Torchic.jpg/revision/latest?cb=20150818122011',
    email: 'anna_sun.gmail.com',
    bio: 'Team Torchic',
    latitude: 37.774921097392664,
    longitude: -122.43756294250488
  },

  //Archana Nayak
  {
    name: 'Archana Nayak',
    username: 'archana_nayak',
    picture: 'https://www.pidgi.net/wiki/images/5/5b/Tepig_-_Pokemon_Conquest.jpg',
    email: 'archana_nayak.gmail.com',
    bio: 'Team Tepig',
    latitude: 37.761419193645686,
    longitude: -122.42417335510254
  },

  //Daphne Dang
  {
    name: 'Daphne Dang',
    username: 'daphne_dang',
    picture: 'https://vignette.wikia.nocookie.net/mighty355/images/7/7a/Cyndaquil.jpg/revision/latest?cb=20150818121852',
    email: 'daphne_dang.gmail.com',
    bio: 'Team Cyndaquil',
    latitude: 37.7934652331513,
    longitude: -122.39928597584367
  },

  //David Bruhn
  {
    name: 'David Bruhn',
    username: 'david_bruhn',
    picture: 'https://vignette.wikia.nocookie.net/mighty355/images/d/de/Torchic.jpg/revision/latest?cb=20150818122011',
    email: 'david_bruhn.gmail.com',
    bio: 'Team Torchic',
    latitude: 37.77926289427511,
    longitude: -122.41928100585938
  },

  //Gil Kwok
  {
    name: 'Gil Kwok',
    username: 'gil_kwok',
    picture: 'https://vignette.wikia.nocookie.net/nationalpokedex/images/9/9e/Fennekin.jpg/revision/latest?cb=20131225134838',
    email: 'gil_kwok.gmail.com',
    bio: 'Team Fenneken',
    latitude: 37.78021262835114,
    longitude: -122.4162769317627
  },

  //Mikhail Stepanov
  {
    name: 'Mikhail Stepanov',
    username: 'mikhail_stepanov',
    picture: 'https://vignette.wikia.nocookie.net/nationalpokedex/images/9/9e/Fennekin.jpg/revision/latest?cb=20131225134838',
    email: 'mikhail_stepanov.gmail.com',
    bio: 'Team Fenneken',
    latitude: 37.784113193898264,
    longitude: -122.4030590057373
  },

  //Hayden Marx
  {
    name: 'Hayden Marx',
    username: 'hayden_marx',
    picture: 'https://i.pinimg.com/736x/79/d9/7c/79d97cd68801eb29a4a5a33e208fb2ff--pokemon-charmander-google-search.jpg',
    email: 'hayden_marx.gmail.com',
    bio: 'Team Charmander',
    latitude: 37.78248515678485,
    longitude: -122.40780115127563
  },

  //Illya Yanchuk
  {
    name: 'Illya Yanchuk',
    username: 'illya_yanchuk',
    picture: 'https://vignette.wikia.nocookie.net/nationalpokedex/images/9/9e/Fennekin.jpg/revision/latest?cb=20131225134838',
    email: 'illya_yanchuk.gmail.com',
    bio: 'Team Fenneken',
    latitude: 37.78172200204317,
    longitude: -122.39614963531494
  },

  //Kenneth Laprelle
  {
    name: 'Kenneth Laprelle',
    username: 'kenneth_laprelle',
    picture: 'https://www.pidgi.net/wiki/images/5/5b/Tepig_-_Pokemon_Conquest.jpg',
    email: 'kenneth_laprelle.gmail.com',
    bio: 'Team Tepig',
    latitude: 37.78250211568961,
    longitude: -122.39269495010376
  },

  //Lam Bui
  {
    name: 'Lam Bui',
    username: 'lam_bui',
    picture: 'https://img00.deviantart.net/546c/i/2012/035/b/2/squirtle_by_maii1234-d4oo1aq.jpg',
    email: 'lam_bui.gmail.com',
    bio: 'Team Squirtle',
    latitude: 37.788946217811656,
    longitude: -122.4014925956726
  },

  //Lara Dashut
  {
    name: 'Lara Dashut',
    username: 'lara_dashut',
    picture: 'https://vignette.wikia.nocookie.net/mighty355/images/7/7a/Cyndaquil.jpg/revision/latest?cb=20150818121852',
    email: 'lara_dashut.gmail.com',
    bio: 'Team Cyndaquil',
    latitude: 37.78443540532579,
    longitude: -122.40647077560425
  },

  //Lory Zhang
  {
    name: 'Lory Zhang',
    username: 'lory_zhang',
    picture: 'https://vignette.wikia.nocookie.net/mighty355/images/d/de/Torchic.jpg/revision/latest?cb=20150818122011',
    email: 'lory_zhang.gmail.com',
    bio: 'Team Torchic',
    latitude: 37.782688663385215,
    longitude: -122.41044044494629
  },

  //Matt Mullen
  {
    name: 'Matt Mullen',
    username: 'matt_mullen',
    picture: 'https://vignette.wikia.nocookie.net/mighty355/images/7/7a/Cyndaquil.jpg/revision/latest?cb=20150818121852',
    email: 'matt_mullen.gmail.com',
    bio: 'Team cyndaquil. I am a snack and a half',
    latitude: 37.781230187034424,
    longitude: -122.40627765655518
  },

  //Mishall Afzal
  {
    name: 'Mishall Afzal',
    username: 'kenneth_laprelle',
    picture: 'https://i.pinimg.com/736x/10/22/61/102261e46841f4084744dba74fafe5f6--type-pokemon-pokemon-sun.jpg',
    email: 'kenneth_laprelle.gmail.com',
    bio: 'Team litten',
    latitude: 37.780984278302874,
    longitude: -122.40843415260315
  },

  //Stephan Lefort
  {
    name: 'Stephan Lefort',
    username: 'stephan_lefort',
    picture: 'https://i.pinimg.com/736x/10/22/61/102261e46841f4084744dba74fafe5f6--type-pokemon-pokemon-sun.jpg',
    email: 'stephan_lefort.gmail.com',
    bio: 'team litten',
    latitude: 37.78434213374124,
    longitude: -122.40348815917969
  },

  //Suhail Ansari
  {
    name: 'suhail Ansari',
    username: 'suhail_ansari',
    picture: 'https://vignette.wikia.nocookie.net/nationalpokedex/images/9/9e/Fennekin.jpg/revision/latest?cb=20131225134838',
    email: 'suhail_ansari.gmail.com',
    bio: 'Team Fenneken',
    latitude: 37.783841856869735,
    longitude: -122.403005361557
  },

  //Thomas Eliot
  {
    name: 'Thomas Eliot',
    username: 'thomas_eliot',
    picture: 'https://www.pidgi.net/wiki/images/5/5b/Tepig_-_Pokemon_Conquest.jpg',
    email: 'thomas_eliot.gmail.com',
    bio: 'Team Tepig',
    latitude: 37.785359635574224,
    longitude: -122.40386366844177
  },

  //Victor Huynh
  {
    name: 'Victor Huynh',
    username: 'victor_huynh',
    picture: 'https://www.pidgi.net/wiki/images/5/5b/Tepig_-_Pokemon_Conquest.jpg',
    email: 'victor_huynh.gmail.com',
    bio: 'Team Tepig',
    latitude: 37.78654670334071,
    longitude: -122.40198612213135
  },

  //Alex Choi
  {
    name: 'Alex Choi',
    username: 'alex_choi',
    picture: 'https://i.pinimg.com/736x/79/d9/7c/79d97cd68801eb29a4a5a33e208fb2ff--pokemon-charmander-google-search.jpg',
    email: 'alex_choi.gmail.com',
    bio: 'Team Charmander',
    latitude: 37.78756417482158,
    longitude: -122.40405678749084
  },

  //Angel Hernandez
  {
    name: 'Angel Hernandez',
    username: 'angel_hernandez',
    picture: 'https://vignette.wikia.nocookie.net/mighty355/images/7/7a/Cyndaquil.jpg/revision/latest?cb=20150818121852',
    email: 'angel_hernandez.gmail.com',
    bio: 'Team Cyndaquil',
    latitude: 37.78919210005242,
    longitude: -122.40572327747941
  },

  //Dustin Burns
  {
    name: 'Dustin Burns',
    username: 'dustin_burns',
    picture: 'https://i.pinimg.com/736x/10/22/61/102261e46841f4084744dba74fafe5f6--type-pokemon-pokemon-sun.jpg',
    email: 'dustin_burns.gmail.com',
    bio: 'Team litten',
    latitude: 37.790497805829254,
    longitude: -122.40386366844177
  },

  //Tiffany Pham
  {
    name: 'Tiffany Pham',
    username: 'tiffany_pham',
    picture: 'https://vignette.wikia.nocookie.net/agus-pokemon/images/f/ff/Togepi.png/revision/latest?cb=20140616073706',
    email: 'tiffany_pham.gmail.com',
    bio: 'Team Togepi',
    latitude: 37.79196457765796,
    longitude: -122.4051833152771
  },

  //Calvin Wong
  {
    name: 'Calvin Wong',
    username: 'calvin_wong',
    picture: 'https://i.pinimg.com/736x/79/d9/7c/79d97cd68801eb29a4a5a33e208fb2ff--pokemon-charmander-google-search.jpg',
    email: 'calvin_wong.gmail.com',
    bio: 'Team Charmander',
    latitude: 37.7942706571458,
    longitude: -122.40164279937744
  }
];
