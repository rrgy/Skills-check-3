module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_houses().then(houses => res.status(200).send(houses))
            .catch(err => { res.status(500).send('oops') })
    },
    postHouse: (req, res) => {
        const { name, address, city, usState, zip } = req.body
        const db = req.app.get('db')
        db.post_house(name, address, city, usState, zip)
            .then(info => res.status(200).send(info))
            .catch(err => { res.sendStatus(500), console.log(err) })
    },
    deleteHouse: (req, res) => {
        const { id } = req.params
        const db = req.app.get('db')
        db.delete_house(id).then(() => res.sendStatus(200))
    }
}