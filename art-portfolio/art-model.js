const db = require('../database/dbConfig')

module.exports = {
    getArt,
    add,
    update,
    remove,
    findById,
    
}

function getArt() {
    return db('art-data')
}

function add(newArt) {
    return db('art-data').insert(newArt)
}

function update(changes, id) {
    return db('art-data').where({ id }).update(changes)
}

function remove(id) {
    return db('art-data').where({ id }).del()
}

function findById(id) {
    return db('art-data').where({ id })
}