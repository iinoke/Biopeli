import StructureFactory from '../../map/StructureFactory'
import ButtonAction from '../ButtonAction'
export default function GrassActions (tile, structureTypes) {
  var sBuilder = new StructureFactory({tile: tile, structureTypes: structureTypes})

  var createGranary = new ButtonAction({
    name : "Build a granary",
    functionToCall: sBuilder.buildGranary,
    context: sBuilder
  })

  var createFarm = new ButtonAction({
    name : "Build a farm",
    functionToCall: sBuilder.buildFarm,
    context: sBuilder
  })

  return [createGranary, createFarm]
}
