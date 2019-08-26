const db = require('../database/dbConfig')

module.exports = {
    getArt,

}

function getArt() {
    return db('art-data')
}