const assert = require("assert")
import StructureType from '../../src/models/map/StructureType'

describe('StructureType tests', () =>{
  it('All structures are created', () =>{
    var structures = StructureType()

    assert.equal(1, Object.keys(structures).length)
  })
})
