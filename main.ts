input.onButtonPressed(Button.A, function () {
    music.playMelody("F E F G F E F F ", 120)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `)
})
loops.everyInterval(60000, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        `)
})
basic.forever(function () {
	
})
