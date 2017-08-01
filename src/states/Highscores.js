import Phaser from 'phaser'
import MenuBuilder from '../controllers/menucontrol/MenuBuilder'
import utils from '../utils'

export class Highscores extends Phaser.State {
	create () {
    this.menu = new MenuBuilder(this, 'start', this.camera.height / 4)
    this.menu.createTitle('Tulokset')
    var scores = utils.highscores.getScores()
    scores.forEach((val, i) => {
      fmt += i + ': ' + val.name + ' - ' + val.score + '\n'
    })
    this.menu.createDescription(fmt)
    this.menu.createButton('Uusi peli', () => {this.state.start('Start')})
  }
}