const router = require('express').Router();

const Art = require('./art-model.js')

router.get('/', async (req, res) => {
    try {
        const art = await Art.getArt()
        res.json(art)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get list of art posts'})
    }
})

router.post('/', async (req, res) => {
    const body = req.body

    try {
        const art = await Art.add(body)
        const newArt = {id: art[0], ...body}
        res.status(201).json(newArt)
    } catch (error) {
        res.status(500).json({ message: 'Failed to add user post' })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const deleted = await Art.remove(id)
        const editedArt = await Art.getArt()
        if (deleted) {
            console.log(editedArt)
            res.json(editedArt)
        } else {
            res.status(404).json({ message: 'Could not find the art post with the given ID' })
        }
    } catch(error) {
        res.status(500).json({ message: 'Failed to delete art post' })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const changes = req.body

    try {
        const artId = await Art.findById(id)

        if (artId) {
            const updatedArt = await Art.update(changes, id)
            res.status(200).json(changes)
        } else {
            res.status(404).json({ message: 'Could not find art post with given ID' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update art post'})
    }
})

module.exports = router