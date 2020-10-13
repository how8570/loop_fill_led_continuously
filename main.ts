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
        if (isMovingRight) {
            for (let x = 0; x <= 4; x++) {
                led.plot(x, y)
                basic.pause(100)
            }
            isMovingRight = 0
        } else {
            for (let x = 0; x <= 4; x++) {
                led.plot(4 - x, y)
                basic.pause(100)
            }
            isMovingRight = 1
        }
    }
    basic.clearScreen()
})
