let isMovingRight = 0
/**
 * # isMovingRight 為 1 (True) 時
 * 
 * 表示向右點燈
 * 
 * # isMovingRight 為 0 (False) 時
 * 
 * 表示向左點燈 (非右)
 */
basic.forever(function () {
    isMovingRight += 1
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            if (isMovingRight) {
                led.plot(x, y)
            } else {
                led.plot(4 - x, y)
            }
            basic.pause(100)
        }
        isMovingRight = isMovingRight * -1 + 1
    }
    basic.clearScreen()
})
