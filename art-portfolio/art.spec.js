const request = require('supertest')
const server = require('../server')
const db = require('../database/dbConfig.js')

describe('GET /art', () => {
    it('returns 200 OK', () => {
        return request(server)
            .get('/art')
            .then(res => {
                expect(res.status).toBe(200)
            })
    });

    it('returns object', () => {
        return request(server)
            .get('/art')
            .then(res => {
                expect(typeof res.body).toBe('object')
            })
    });
})

describe('POST /art', () => {
    beforeEach( async() => {
        await db('art-data').truncate()
    })
    it('returns 201 CREATED', () => {
        return request(server)
            .post('/art')
            .send({
                "image": "https://images.unsplash.com/photo-1560291782-3938195af695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
	            "description": "clock tower in the snowy mountains"
            })
            .then(res => {
                expect(res.status).toBe(201)
            })
    });
    it('returns object', () => {
        return request(server)
            .post('/art')
            .send({
                "image": "https://images.unsplash.com/photo-1560291782-3938195af695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
	            "description": "clock tower in the snowy mountains"
            })
            .then(res => {
                expect(typeof res.body).toBe('object')
            })
    });
})

describe('DELETE /art/:id', () => {
    // beforeEach( async() => {
    //     await db('art-data').truncate()
    // })
    it('returns 200 OK', () => {
        return request(server)
            .delete('/art/1')
            .then(res => {
                expect(res.status).toBe(200)
            })
    });
    it('returns object', () => {
        return request(server)
            .delete('/art/1')
            .then(res => {
                expect(typeof res.body).toBe('object')
            })
    });
})

describe('PUT /art', () => {
    // beforeEach( async() => {
    //     await db('art-data').truncate()
    // })
    it('returns 200 OK', () => {
        return request(server)
            .put('/art/1')
            .send({
                "image": "https://images.unsplash.com/photo-1566791468858-cfcb7e78cf5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            })
            .then(res => {
                expect(res.status).toBe(200)
            })
    });
    it('returns object', () => {
        return request(server)
            .put('/art/1')
            .send({
                "image": "https://images.unsplash.com/photo-1566791468858-cfcb7e78cf5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            })
            .then(res => {
                expect(typeof res.body).toBe('object')
            })
    });
})