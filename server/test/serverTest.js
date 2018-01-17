const expect = require('chai').expect;
const axios = require('axios');

describe('API test', () => {
  const baseURL = 'http://localhost:8000/api';

  xdescribe('/api/users', () => {
    it('should get all the data when GET /api/users is received', (done) => {
      axios({
        method: 'get',
        url: `${baseURL}/users`,
      })
        .then((result) => {
          done();
        })
        .catch((e) => {
          throw e;
        });
    });

    it('should get one user when GET /api/users/:id is received', (done) => {
      axios({
        method: 'get',
        url: `${baseURL}/users/1`,
      })
        .then((result) => {
          done();
        })
        .catch((e) => {
          throw e;
        });
    });

    it('should add one user when POST /api/users is received', (done) => {
      const userData = {
        name: 'batman',
        username: 'batman123',
        password: 'whereisshe?',
        email: 'emailbatman@batmat.co',
      };

      axios({
        method: 'post',
        url: `${baseURL}/users`,
        data: userData,
      })
        .then((result) => {
          done();
        })
        .catch((err) => {
          throw err;
        });
    });
  });

  xdescribe('/api/trade', () => {
    it('should get all the trade for a user when GET /api/trade/:userId is received', (done) => {
      axios({
        method: 'get',
        url: `${baseURL}/trade/1`,
      })
        .then((result) => {
          done();
        })
        .catch((err) => {
          throw err;
        });
    });
  
    it('should get all the trades between two users when GET /api/trade/:username1/profile/:username2 is received', (done) => {
      axios({
        method: 'get',
        url: `${baseURL}/trade/wanchoi211/profile/hmarx`,
      })
        .then((result) => {
          done();
        })
        .catch((err) => {
          throw err;
        })
    });
  
    it('should create a trade column when POST /api/trade/initiate is received', (done) => {
      const tradeData = {
        username1: '',
        username2: '',
        food1: '',
        food2: '',
      }
  
      axios({
        method: 'post',
        url: `${baseURL}/trade/initiate`,
        data: tradeData,
      })
        .then((result) => {
          done();
        })
        .catch((err) => {
          throw err;
        });
    });
  
    it('should change the status to 1 when POST /api/trade/accept is received', (done) => {
      const acceptData = {
        id: '',
      }
  
      axios({
        method: 'post',
        url: `${baseURL}/trade/accept`,
        data: acceptData,
      })
        .then((result) => {
          done();
        })
        .catch((err) => {
          throw err;
        });
    });
  
    it('should change the status to 0 when POST /api/trade/accept is received', (done) => {
      const rejectData = {
        id: '',
      }
  
      axios({
        method: 'post',
        url: `${baseURL}/trade/reject`,
        data: rejectData,
      })
        .then((result) => {
          done();
        })
        .catch((err) => {
          throw err;
        });
    });
  });

  describe('api/food', () => {
    it('should receive all the foods when GET /api/food is received', (done) => {
      axios({
        method: 'get',
        url: `${baseURL}/food`,
      })
        .then((result) => {
          done();
        })
        .catch((err) => {
          throw err;
        });
    });

    it('should receive a food when GET /api/food/:id is received', (done) => {
      axios({
        method: 'get',
        url: `${baseURL}/food/1`,
      })
        .then((result) => {
          done();
        })
        .catch((err) => {
          throw err;
        });
    });

    it('should create a new food row when POST /api/food is received', (done) => {
      const foodData = {

      }
      axios({
        method: 'post',
        url: `${baseURL}/food`
      })
    });
  });
});
