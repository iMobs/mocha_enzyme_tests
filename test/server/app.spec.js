const supertest = require('supertest');

const app = require('../../server/app');

const request = supertest.agent(app);

describe('Server', () => {
  it('should respond', () => request.get('/barbara_streisand').expect(404));
});
