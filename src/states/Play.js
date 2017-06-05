/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Map from '../models/Map'
import Menu from '../models/Menu'
import MapView from '../sprites/MapView'

export default class extends Phaser.State {
  init () { }
  preload () { }

  create () {
    const bannerText = 'Biopeli 2.0'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    // ever rolling mushroom
    this.mushroom = new Mushroom({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.game.add.existing(this.mushroom)

    // game menu
    this.menu = new Menu({
      game: this,
      menuViewWidth: 256
    })

    // map grid
    this.map = new Map({
      game: this,
      gridSizeX: Math.ceil(this.game.width * 4 / 128),
      gridSizeY: Math.ceil(this.game.height * 4 / 128),
      tileWidth: 128,
      tileHeight: 128
    })

    // fill map grid with sample data
    this.map.createMapHalfForestHalfWater()

    // map view
    this.mapView = new MapView({
      game: this,
      map: this.map,
      viewWidthPx: this.game.width - 256,
      viewHeightPx: this.game.height
    })

    // cursors for map movement demo
    this.cursors = this.game.input.keyboard.createCursorKeys()
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
      this.game.debug.cameraInfo(this.game.camera, 500, 32)
    }
  }

  update () {
    this.map.update()

    // camera speed
    var s = 16
    if (this.cursors.up.isDown) {
      this.game.camera.y -= s
    } else if (this.cursors.down.isDown) {
      this.game.camera.y += s
    }

    if (this.cursors.left.isDown) {
      this.game.camera.x -= s
    } else if (this.cursors.right.isDown) {
      this.game.camera.x += s
    }

    this.mapView.drawWithOffset(this.game.camera.x, this.game.camera.y)

    this.menu.update()
  }
}
