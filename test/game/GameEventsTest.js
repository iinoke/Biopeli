const assert = require("assert")
const sinon = require("sinon")
import GameEvents from '../../src/game/GameEvents'
import config from '../../src/config'

describe('GameEvents tests', () => {
  var gameState, gEvents, startSpy
  var gameLength = config.gameLength

  beforeEach(() => {
    startSpy = sinon.spy()
    
    gameState = {
      player: {
        points: 574
      },
      city: {
        population: 563282
      },
      state: {
        state: {
          start: startSpy
        }
      }
    }

    gEvents = new GameEvents({ gameState: gameState})
  })

  it('Constructor works', () => {
    assert.equal(gameState, gEvents.gameState)
  })

  it('Game over checker works', () => {
    var finishSpy = sinon.spy()
    gEvents.finishGame = finishSpy

    gEvents.isGameOver(gameLength)
    assert.equal(1, finishSpy.callCount)

    gEvents.isGameOver(gameLength - 1)
    assert.equal(1, finishSpy.callCount)

    gEvents.isGameOver(gameLength + 1)
    assert.equal(2, finishSpy.callCount)
  })

  it('Game is finished correctly', () => {
    gEvents.finishGame()
    assert(startSpy.calledWith('GameOver', true, false, gameState.player.points, gameState.city.population))
  })
})