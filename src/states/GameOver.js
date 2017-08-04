import Phaser from 'phaser'
import MenuBuilder from '../controllers/menucontrol/MenuBuilder'
import utils from '../utils'

/**
 * Game over screen
 */
export default class GameOver extends Phaser.State {
  /**
   * Here we can add to the parameters any data we want to
   * carry over to the game over screen
   * @param {*} score, final score
   * @param {*} population, final city population
   */
  init (score, population) {
    this.points = score
    this.population = population
  }

  create () {
    this.menu = new MenuBuilder(this, 'gameover', this.camera.height * 5 / 9)
    this.stage.backgroundColor = 0x000000
    this.menu.createScore('Loppupisteesi: ' + this.points.toFixed(0) +
                     '\n' + 'Kaupungin koko: ' + this.population)
    var name = prompt('Kerro nimesi tuloksia varten')
    utils.highscores.submitScore(name, this.score)
    this.menu.createButton('Tulokset', () => { this.state.start('Highscores') })
    this.menu.createButton('Alkuun', () => { this.state.start('Start') })
    this.menu.finishMenu()
  }
}
