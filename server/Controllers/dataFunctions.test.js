const dataFuncs = require('./dataFunctions')

describe('newPlayer function', () => {
    it('should not have empty data passed in', () => {
        var mockData = {username: "francisca" , avatar: {url: "https//www.someurl.com"}} 

        expect(mockData).toMatchObject({
            username: expect.any(String),
            avatar: expect.any(Object)
        })
        
    })
    it('should create a new object using mock data', () => {
        var mockData = {username: "francisca" , avatar: {url: "https//www.someurl.com"}}
        expect(dataFuncs.newPlayer(mockData).toMatchObject({
            username: "francisca",
            hand: [],
            avatar: "https//www.someurl.com",
            judge: false,
            score: 0,
            chosen_card: {}
        }))
    })
})