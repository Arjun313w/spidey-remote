/**
 */
/**
 */
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(6)
})
radio.setGroup(1)
basic.forever(function () {
	
})
