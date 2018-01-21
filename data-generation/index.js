const fs = require('fs');
const models = require('../server/models');

const file = fs.readFileSync('profile.json', 'utf8');
const data = JSON.parse(file);
const promises = data.map((profile) => {
  const { username, realname, email, password, profilePictureUrl, rating } = profile;
  return models.users.create({ username, name: realname, email, password, picture: profilePictureUrl, rating })
    .catch((e) => console.log(e));
});

Promise.all(promises)
  .then(() => {

    const promisesFood = data.map((profile) => {
      const { username, title, url } = profile;
      return models.users.findByUsername({ username })
        .then((user) => {
          if (!user) {
            throw new Error();
          }
          return models.food.create({ dishname: title, description: 'Some delicious food', userId: user.id, picture: url })
        })        
        .then((food) => {
          const foodPromises = food.map((item) => {
            return models.trade.initiate({ userId1: item.user_id, foodId1: item.id, userId2: 1, foodId2: 1 })
              .catch(() => {});
          })
          return Promise.all(foodPromises);
        })
    });

    Promise.all(promisesFood)
      .then(() => {})
      .catch(e => console.log(e));
});
