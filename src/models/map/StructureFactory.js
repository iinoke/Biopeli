import Structure from './Structure'

/**
 * Description goes here
 */
export default class StructureFactory {
  /**
   * Description goes here
   *
   * @param {object} param
   *
   * @param {ModelTile} param.tile
   * @param {StructureType} param.structureTypes
   * @param {GameTimer} param.gameTimer
   */
  constructor ({ tile, structureTypes, gameTimer, player }) {
    this.tile = tile
    this.structureName = 'joku nimi'
    this.structureSize = 10
    this.structureTypes = structureTypes
    this.gameTimer = gameTimer
    this.player = player

    this.build = {
      dairyFarm: () => {
        this.buildBuilding(structureTypes.dairyFarm)
      },
      berryFarm: () => {
        this.buildBuilding(structureTypes.berryFarm)
      },
      farm: () => {
        this.buildBuilding(structureTypes.farm)
      }
    }
  }
  
  /**
   * Builds an structure on the tile defined in the constructor
   *
   * @param {StructureType} structureType
   */
  buildBuilding (structureType) {
    this.tile.structure = new Structure({
      tile: this.tile,
      name: this.structureName,
      size: this.structureSize,
      structureType: structureType,
      foundingYear: this.gameTimer.currentTime.year
    })
    this.player.addStructure(this.tile.structure)
  }
}
