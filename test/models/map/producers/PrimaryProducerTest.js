const assert = require("assert")
const sinon = require("sinon")
import PrimaryProducerDecorator from '../../../../src/models/map/structure/producers/PrimaryProducerDecorator'

describe('Primary producer tests', () => {

  var p, turnip, tile
  beforeEach(()=>{
    tile = {flowers: 10}
    turnip = 1
    p = new PrimaryProducerDecorator({
      turnipYield: turnip,
      tile: tile
    })
  })

  it('Constructor test', ()=>{
    assert.equal(turnip, p.turnipYield)
    assert.equal(tile, p.tile)
  })

  it('Pollution is counted in', ()=>{
    p.productionThisWeek = () => 5
    assert.equal(5, p.produce())
    tile.flowers = 0
    assert.equal(0, p.produce())
    tile.flowers = 5
    assert.equal(2.5, p.produce())
  })
})