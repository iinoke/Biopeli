export default class Text {
  constructor({game, viewGroup, text, fontSize, x, y}){
    var style = {font: fontSize+"px Arial", fill: "#ffff00", align: "center"}
    var text = game.add.text(x, y, text, style, viewGroup)
  }
}
