module.exports = {
    createGame: (req, res) => {
        console.log('req.body', req.body)
        const {gamePin} = req.body
        req.session.user = {gamePin: gamePin}
        res.status(200).send(req.session.user)
        console.log(req.session.user)
    },

    createUser: (req, res) => {
        console.log('req.body at create user',req.body)
        const {username} = req.body
        console.log('req.session.user at create user', req.session.user)
        req.session.user = {...req.session.user, user1: username}
        console.log('req.session.user at create user', req.session.user)
        req.session.user = {}
    }
}