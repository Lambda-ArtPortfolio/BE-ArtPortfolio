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

router.post('/', async (req, res) => {
    const body = req.body

    try {
        const art = await Art.add(body)
        res.status(201).json(art)
    } catch (error) {
        res.status(500).json({ message: 'Failed to add user art' })
    }
})

module.exports = router