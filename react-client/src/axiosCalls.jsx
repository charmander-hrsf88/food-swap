import axios from 'axios';

/*
////////////////////////////////////
              AUTH
////////////////////////////////////
*/
export function logOut(cb) {
  axios({
    method: 'get',
    url: '/logout',
  })
    .then((result) => {
      // console.log('friend', result.data, '. this:', this);
      cb(null, false);
    })
    .catch((e) => {
      console.log(e, this);
    });
}

export function userInfo(cb) {
  axios({
    method: 'get',
    url: '/session',
  })
    .then((result) => {
      console.log('friend', result.data);
      if (result.data.user !== null) {
        cb(result.data, true);
      } else {
        cb(null, false);
      }
    })
    .catch((e) => {
      console.log(e, this);
    });
}


/*
////////////////////////////////////
              FRIENDS
////////////////////////////////////
*/
export function getFriends(userId) {
  axios({
    method: 'get',
    url: '/api/friends/user/1',
  })
    .then((result) => {
      console.log('friend', result.data);
    })
    .catch((e) => {
      console.log(e, this);
    });
}

export function getSpecificFriend(userId, friendId) {
  axios({
    method: 'get',
    url: '/api/friends/user/1/user/2',
  })
    .then((result) => {
      console.log('Friend', result.data);
    })
    .catch((e) => {
      console.log(e, this);
    });
}

export function addFriend(userId, friendId) {
  axios({
    method: 'post',
    url: '/api/friends/create',
    data: {
      userId1: 1,
      userId2: 2,
    },
  })
    .then((data) => {
      console.log('Friends', data);
    })
    .catch((err) => {
      console.log(err, this);
    });
}


/*
////////////////////////////////////
              FOOD
////////////////////////////////////
*/
export function getAllFood() {
  axios({
    method: 'get',
    url: '/api/food',
  })
    .then((result) => {
      console.log(result.data);
    })
    .catch((e) => {
      console.log('err', e, this);
    });
}

export function getSpecificFood(foodId) {
  axios({
    method: 'get',
    url: '/api/food/1',
  })
    .then((result) => {
      console.log(result.data);
    })
    .catch((e) => {
      console.log('err', e, this);
    });
}

export function addFood(dish, description, userId) {
  axios({
    method: 'post',
    url: '/api/food',
    data: {
      dishname: dish,
      description: description,
      userId: 1,
    },
  })
    .then((result) => {
      console.log(result.data);
    })
    .catch((e) => {
      console.log('err', e, this);
    });
}


/*
////////////////////////////////////
              TRADES
////////////////////////////////////
*/
export function getTrades(userId) {
  axios({
    method: 'get',
    url: '/api/trade/1',
  })
    .then((results) => {
      console.log(results.data);
    })
    .catch((e) => {
      console.log('err', e, this);
    });
}

export function getAllTradesBetweenTwoUsers(userId, otherUserId) {
  axios({
    method: 'get',
    url: '/api/trade/user1/1/user2/2',
  })
    .then((result) => {
      console.log(result.data);
    })
    .catch((e) => {
      console.log('err', e, this);
    });
}

export function requestTrade(userId, foodId, requestUserId, requestFoodId) {
  axios({
    method: 'post',
    url: '/api/trade/initiate',
    data: {
      userId1: 1,
      foodId1: 1,
      userId2: 2,
      foodId2: 2,
    },
  })
    .then((results) => {
      console.log(results.data);
    })
    .catch((e) => {
      console.log('err', e, this);
    });
}

export function acceptTrade(tradeId) {
  axios({
    method: 'post',
    url: '/api/trade/accept',
    data: {
      id: 4,
    },
  })
    .then((results) => {
      console.log('accept:', results.data);
    })
    .catch((e) => {
      console.log('err', e, this);
    });
}

export function rejectTrade(tradeId) {
  axios({
    method: 'post',
    url: '/api/trade/reject',
    data: {
      id: 5,
    },
  })
    .then((results) => {
      console.log(results.data);
    })
    .catch((e) => {
      console.log('err', e, this);
    });
}


/*
////////////////////////////////////
              USERS
////////////////////////////////////
*/
export function getAllUsers() {
  axios({
    method: 'get',
    url: '/api/users',
  })
    .then((results) => {
      console.log(results.data)
    })
    .catch((e) => {
      console.log('err', e, this)
    })
}

export function getSpecificUser(userId) {
  axios({
    method: 'get',
    url: '/api/users/1',
  })
    .then((result) => {
      console.log(result.data);
    })
    .catch((e) => {
      console.log('err', e, this);
    });
}

export function updateUser(userId, name, username, bio, picture, email, latitude, longitude) {
  console.log(userId, name, username, bio, picture, email, latitude, longitude);
}
