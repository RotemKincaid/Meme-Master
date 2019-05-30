const massive = require("massive")
require("dotenv").config()

let dbPromise

module.exports = {
    initDb(){
        return dbPromise = dbPromise || massive(process.env.CONNECTION_STRING)
    }
}

