const router = require('express').Router();

const Art = require('./art-model.js')

router.get('/', async (req, res) => {
    try {
        const art = await Art.getArt()
        res.json(art)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get list of art pictures'})
    }
})



module.exports = router