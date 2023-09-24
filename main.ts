scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument4`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`exit`, function (sprite, location) {
    game.over(true)
})
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . d 7 d 7 d . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . d 2 2 2 d . . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . f f d d d f f . . . . . 
    . . d d f f d d d f f d d . . . 
    . . d d f f d d d f f d d . . . 
    . . d d f f d d d f f d d . . . 
    . . d d . f f f f f . d d . . . 
    . . d d . f f . f f . d d . . . 
    . . d d . f f . f f . d d . . . 
    . . . . . f f . f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`stage`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(30)
