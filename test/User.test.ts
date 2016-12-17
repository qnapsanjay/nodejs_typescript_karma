import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import request = require('request');

import app from '../app/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/users', () => {
  let baseUrl = 'http://localhost:3000/api/v1';
  it('responds with JSON object having info and data', (done) => {
      request(baseUrl + '/users', (err, response, body)=>{
          body = JSON.parse(body);
          expect(response.statusCode).to.equal(200);
          expect(response).to.be.json;
          expect(typeof body).to.equal('object');
          done();
      })
      
    // return chai.request(app).get('/api/v1/users')
    //   .then(res => {
    //     expect(res.status).to.equal(200);
    //     expect(res).to.be.json;
    //     expect(res.body).to.be.an('array');
    //     expect(res.body).to.have.length(5);
    //     done();
    //   });
  });

//   it('should include Wolverine', () => {
//     return chai.request(app).get('/api/v1/users')
//       .then(res => {
//         let Wolverine = res.body.find(hero => hero.name === 'Wolverine');
//         expect(Wolverine).to.exist;
//         expect(Wolverine).to.have.all.keys([
//           'id',
//           'name',
//           'aliases',
//           'occupation',
//           'gender',
//           'height',
//           'hair',
//           'eyes',
//           'powers'
//         ]);
//       });
//   });
});

// describe('GET api/v1/users/:id', () => {

//   it('responds with single JSON object', () => {
//     return chai.request(app).get('/api/v1/users/1')
//       .then(res => {
//         expect(res.status).to.equal(200);
//         expect(res).to.be.json;
//         expect(res.body).to.be.an('object');
//       });
//   });

//   it('should return Luke Cage', () => {
//     return chai.request(app).get('/api/v1/users/1')
//       .then(res => {
//         expect(res.body.hero.name).to.equal('Luke Cage');
//       });
//   });

// });