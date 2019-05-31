const sinon = require("sinon");

const dataFuncs = require("./dataFunctions");

describe("newPlayer", () => {
    it("should create a new player object with passed in data", () => {
        let mockData = {
            username: "francis",
            avatar: {
                url: "https//www.someurl.com"
            }
        }

        let expected = {
            username: "francis",
            hand: [],
            avatar: "https//www.someurl.com",
            judge: false,
            score: 0,
            chosen_card: {}
        }

        expect(dataFuncs.newPlayer(mockData)).toEqual(expected)
    })
})

describe ("shuffleCards", () => {
    it('should shuffle the cards', () => {
        let cardsFromDbTest = [ { card_id: 1, content: 'testcontent1' }, {card_id: 2, content: 'testcontent2' }, {card_id: 3, content: 'testcontent3' }, {card_id: 4, content: 'testcontent4' }]

        let shuffledCardsTest = [ { card_id: 2, content: 'testcontent2' }, {card_id: 4, content: 'testcontent4' }, {card_id: 1, content: 'testcontent1' }, {card_id: 3, content: 'testcontent3' }]

        
        expect(cardsFromDbTest[0].card_id).not.toEqual(shuffledCardsTest[0].card_id)
        expect(dataFuncs.shuffleCards(cardsFromDbTest).not.toEqual(shuffledCardsTest))
    })
})
