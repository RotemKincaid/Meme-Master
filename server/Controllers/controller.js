module.exports = {
    createGame: (req, res) => {
        console.log('req.body', req.body)
        const {gamePin} = req.body
        req.session.user = {gamePin: gamePin}
        res.status(200).send(req.session.user)
        console.log(req.session.user)
    }
}