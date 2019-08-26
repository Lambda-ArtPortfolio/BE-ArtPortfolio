const db = require('../database/dbConfig')

module.exports = {
    getArt,
    add,
    
}

function getArt() {
    return db('art-data')
}

function add(newArt) {
    return db('art-data').insert(newArt)
}