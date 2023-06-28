/* eslint-disable linebreak-style */
const {sendRequest} = require('../helpers/api.helper');
const testData = require('../config/post-data.json');
const putData = require('../config/put-data.json');

describe('API Test Suite', () => {
  it('GET post/1', async () => {
    const response = await sendRequest('posts/1');
    expect(response.data.userId).to.equal(1);
    expect(response.status).to.equal(200);
  });
  it('GET all users', async () => {
    const response = await sendRequest('users');
    expect(response.status).to.equal(200);
    expect(Object.keys(response.data).length).to.equal(10);
  });
  it('GET all albums where userId = 1', async () => {
    const response = await sendRequest('albums?userId=1');
    expect(response.status).to.equal(200);
    expect(Object.keys(response.data).length).to.equal(10);
  });
  it('GET post/0', async () => {
    const response = await sendRequest('posts/0');
    expect(response.status).to.equal(404);
  });
  it('POST posts', async () => {
    const response = await sendRequest('posts', testData, 'post');
    expect(response.status).to.equal(201);
  });
  it('POST an empty todo', async () => {
    const invalidData = {};
    const response = await sendRequest('users/1/todos', invalidData, 'post');
    expect(response.status).to.equal(201);
    expect(response.data).to.not.have.own.property('title');
    expect(response.data).to.not.have.own.property('completed');
  });
  it('Update a post', async () => {
    const response = await sendRequest('posts/1', putData, 'put');
    expect(response.status).to.equal(200);
    expect(response.data).to.have.own.property('id');
    expect(response.data).to.have.own.property('title');
    expect(response.data).to.have.own.property('body');
    expect(response.data).to.have.own.property('userId');
  });
  it('Check it is impossible to update a photo', async () => {
    const invalidData = {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    };
    const response = await sendRequest('albums/1/photos', invalidData, 'put');
    expect(response.status).to.equal(404);
  });
  it('DELETE an album', async () => {
    const response = await sendRequest('albums/1', 'delete');
    expect(response.status).to.equal(200);
  });
  it('Check it is impossible to DELETE comments', async () => {
    const response = await sendRequest('/posts/2/comments', 'delete');
    expect(response.status).to.equal(404);
  });
});
