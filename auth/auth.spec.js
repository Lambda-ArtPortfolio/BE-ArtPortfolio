const request = require('supertest')
const server = require('../server')
const db = require('../database/dbConfig.js')

describe('POST /register', () => {
   

    it('returns 201 created', () => {
    
        return request(server)
            .post('/auth/register')
            .send({
                name: 'name',
                username: 'user1',
                password: 'password'
            })
            .then(res => {
                expect(res.status).toBe(201)
            })
    });
    it('returns object', () => {
        
        return request(server)
            .post('/auth/register')
            .send({
                username: 'user1',
                password: 'password'
            })
            .then(res => {
                expect(typeof res.body).toBe('object')
            })
    })
})

describe('POST /login', () => {
    it('returns 200', () => {
        return request(server)
            .post('/auth/login')
            .send({
                username: 'user1',
                password: 'password'
            })
            .then(res => {
                expect(res.status).toBe(200)
            })
    });
    it('returns object', () => {
        return request(server)
            .post('/auth/login')
            .send({
                username: 'user1',
                password: 'password'
            })
            .then(res => {
                expect(typeof res.body).toBe('object')
            })
    });
})