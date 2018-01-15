GET http://localhost:8000/api/friends/user/:userId1

axios({
  method: 'get',
  url: '/api/friends/user/1'
})
.then((result) => {
  result.data // [object Object]
})
.catch((e) => {
  console.log(e)
});

-----------------------------------------------

GET http://localhost:8000/api/friends/user/:userId1/user/:userId2

axios({
  method: 'get',
  url: '/api/friends/user/1/user/2,
})
.then((result) => {
  result.data // [object Object]
})
.catch((e) => {
  console.log(e)
});

-----------------------------------------------

POST http://localhost:8000/api/friends/create

axios({
  method: 'post',
  url: '/api/friends/create'
  data: {
    userId1: <--some user id -->,
    userId2: <--another user id -->
  }
})
.then(() => {
  // success
})
.catch(() => {
  // failure
});



-----------------------------------------------

GET http://localhost:8000/api/food

axios({
  method: 'get',
  url: '/api/food'
})
.then((result) => {
  result.data
})
.catch((e) => {

})

-----------------------------------------------

GET http://localhost:8000/api/food/:id

axios({
  method: 'get',
  url: '/api/food/1',
})
.then((result) => {
  result.data
})
.catch((e) => {

});

-----------------------------------------------

POST http://localhost:8000/api/food

axios({
  method: 'post',
  url: '/api/food',
  data: {
    dishname: "FILL_ME_IN",
    description: "FILL_ME_IN",
    userId: "FILL_ME_IN"
  }
})
.then((result) => {
  result.data
})
.catch((e) => {

});

-----------------------------------------------

GET http://localhost:8000/api/trade/:userId

axios({
  method: 'get',
  url: '/api/trade/1'
})
.then((result) => {
  result.data
})
.catch((e) => {

});

-----------------------------------------------

GET http://localhost:8000/api/trade/user1/:userId1/user2/:userId2

axios({
  method: 'get',
  url: '/api/trade/user1/1/user2/5',
})
.then((result) => {
  result.data
})
.catch((e) => {

})

-----------------------------------------------

POST http://localhost:8000/api/trade/initiate

axios({
  method: 'post',
  url: '/api/trade/initiate',
  data: {
    userId1: FILL_ME_IN,
    foodId1: FILL_ME_IN,
    userId2: FILL_ME_IN,
    foodId2: FILL_ME_IN
  }
})
.then(() => // success)
.catch((e) => // failure);

-----------------------------------------------

POST http://localhost:8000/api/trade/accept

axios({
  method: 'post',
  url: '/api/trade/accept',
  data: {
    id: FILL_ME_IN
  }
})
.then(() => // success)
.catch((e) => // failure)

-----------------------------------------------

POST http://localhost:8000/api/trade/reject

axios({
  method: 'post',
  url: '/api/trade/reject',
  data: {
    id: FILL_ME_IN
  }
})
.then(() => // sucess)
.catch((e) => // failure)

-----------------------------------------------

GET http://localhost:8000/api/users

axios({
  method: 'get',
  url: '/api/users'
})
.then((result) => result.data);
.catch((e) => e);

-----------------------------------------------

GET http://localhost:8000/api/users/:id

axios({
  method: 'get',
  url: '/api/users/1'
})
.then((result) => result.data)
.catch((e) => e);


-----------------------------------------------


POST http://localhost:8000/api/users

axios({
  method: 'post',
  url: '/api/users',
  data: {
    name: FILL_ME_IN,
    username: FILL_ME_IN,
    password: FILL_ME_IN,
    email: FILL_ME_IN
  }
})
.then(() => //success)
.catch((e) => // failure)


