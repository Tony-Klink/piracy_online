import Phaser from 'phaser'

export default class Mushroom extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.cursors = game.input.keyboard.createCursorKeys()
  }

  update () {
    this.body.bounce.x = 0.4
    this.body.bounce.y = 0.4
    this.body.gravity.x = 0
    this.body.gravity.y = 0
    this.body.collideWorldBounds = true

    if (this.cursors.left.isDown) {
      //  Move to the left
      this.body.velocity.x = -150
    } else if (this.cursors.right.isDown) {
      //  Move to the right
      this.body.velocity.x = 150
    } else if (this.cursors.up.isDown) {
      //  Move to the right
      this.body.velocity.y = -150
    } else if (this.cursors.down.isDown) {
      //  Move to the right
      this.body.velocity.y = 150
    } else {
      //  Stand still
      this.animations.stop()

      this.frame = 4
    }
  }
}
