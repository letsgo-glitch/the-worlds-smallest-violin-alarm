basic.forever(function () {
    if (input.lightLevel() <= 100) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        basic.pause(50)
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        for (let index = 0; index < 5; index++) {
            basic.pause(50)
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(587, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Quarter))
            music.playTone(523, music.beat(BeatFraction.Quarter))
            basic.pause(50)
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.playTone(349, music.beat(BeatFraction.Quarter))
        }
        basic.pause(50)
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Whole))
        basic.pause(50)
        music.playTone(440, music.beat(BeatFraction.Half))
        basic.pause(10)
        music.playTone(392, music.beat(BeatFraction.Half))
        basic.pause(10)
        music.playTone(349, music.beat(BeatFraction.Half))
        basic.pause(10)
        music.playTone(440, music.beat(BeatFraction.Half))
        basic.pause(10)
        music.playTone(440, music.beat(BeatFraction.Half))
        basic.pause(10)
        music.playTone(349, music.beat(BeatFraction.Half))
        basic.pause(10)
        music.playTone(349, music.beat(BeatFraction.Half))
        basic.pause(10)
        music.playTone(349, music.beat(BeatFraction.Half))
        basic.pause(10)
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (input.buttonIsPressed(Button.A)) {
        music.stopAllSounds()
    } else if (input.buttonIsPressed(Button.B)) {
        music.stopAllSounds()
    } else {
        music.stopAllSounds()
    }
})
basic.forever(function () {
    if (input.lightLevel() >= 180) {
        music.stopAllSounds()
    } else {
        basic.clearScreen()
    }
})
