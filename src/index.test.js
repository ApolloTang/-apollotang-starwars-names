var starWars = require('./index')

describe('starwars-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(starWars.all)
        .toSatisfyAll( starWarsNames => typeof starWarsNames === 'string')
    })

    it('should contain `Luke Skywalker`', () => {
      expect(starWars.all).toContain('Luke Skywalker')
    })
  })

  describe('random', () => {
    it('should return a random item form the starWars.all', ()=>{
      expect(starWars.all).toContain(starWars.random())
    })
  })
})
