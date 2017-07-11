/**
 * Generates a random name for a building and it's owner
 */
export default class StructureNameGenerator {
  /**
  * @param {Object[]} param.frontAdjectives - list of adjectives
  * @param {Object[]} param.names - list of names
  * @param {Object[]} param.endAdjectives - list of adjectives
  * @param {Object[]} param.hyperboles - list of hyperbole words
  */
  constructor ({ frontAdjectives, names, endAdjectives, hyperboles }) {
    this.frontAdjectives = frontAdjectives
    this.names = names
    this.endAdjectives = endAdjectives
    this.hyperboles = hyperboles
  }

  /**
  * @returns {String} Name of the owner of the building
  */
  createOwnerName () {
    var front = this.getRandom(this.frontAdjectives.length)
    var name = this.getRandom(this.names.length)
    return this.frontAdjectives[front] + ' ' + this.names[name]
  }

  /**
  * Creates name for the structure
  * @param {StructureType} param.structureType - the type of the structure
  * @returns {String} - name for building
  */
  createBuildingName (structureType) {
    var end = this.getRandom(this.endAdjectives.length)
    var type = this.findType(structureType)
    var hyper = this.getRandom(this.hyperboles.length)
    if (Math.random() < 0.25) {
      var tmp = this.endAdjectives[end].toLowerCase()
      return this.hyperboles[hyper] + '-' + tmp + ' ' + type
    }
    return this.endAdjectives[end] + ' ' + type
  }

  /**
  * Helper to find the type of the structure
  * @param {StructureType} structureType - type to be examined
  * @returns {String} - the typeof the structure
  */
  findType (structureType) {
    var type = ''
    if (structureType === 'wheat farm') {
      type = 'viljatila'
    }
    if (structureType === 'dairy farm') {
      type = 'navetta'
    }
    if (structureType === 'berry farm') {
      type = 'marjatila'
    }
    return type
  }

  /**
  * Generates a random int smaller than max
  * @param {int} max
  * @returns {int}
  */
  getRandom (max) {
    return Math.floor(Math.random() * max)
  }
}
