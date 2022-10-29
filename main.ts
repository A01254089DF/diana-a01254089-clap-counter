input.onSound(DetectedSound.Loud, function () {
    Claps += 1
    basic.showNumber(Claps)
})
let Claps = 0
Claps = 0
input.setSoundThreshold(SoundThreshold.Loud, 224)
