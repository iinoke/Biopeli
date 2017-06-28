import IconComponent from './components/IconComponent'
import TextComponent from './components/TextComponent'
import AnimatedBarComponent from './components/AnimatedBarComponent'

export default class TopBarController{
  constructor({menuView, player}){
    this.menuView = menuView
    this.player = player
    console.log(this.player)
  }

  redraw (timeEvent) {
    this.menuView.draw(this.createSections(timeEvent))
  }

  createSections (timeEvent) {
    return [
      [
        new IconComponent({
          asset: 'time',
          assetWidth: 64,
          assetHeight: 64
        }),
        new TextComponent(timeEvent.toString())
      ],
      [
        new IconComponent({
          asset: 'score',
          assetWidth: 64,
          assetHeight: 64
        }),
        new TextComponent(""+this.player.getPoints())
      ],
      [
        new IconComponent({
          asset: 'turnip',
          assetWidth: 64,
          assetHeight: 64
        }),
        new AnimatedBarComponent({
          width: 200,
          height: 64,
          horizontal: true
        })
      ]
    ]
  }
}