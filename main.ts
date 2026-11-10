let button = 0
/**
 * Helper functions
 * 
 * These are line tracking functions, for bonus point delete these and write your own.
 * 
 * If you decide to use these feel free to modify and changes them i.e. removing the variable and hardcode the speed.
 */
function pauseUntilButtonB () {
    button = 0
    pauseUntil(() => button == 2)
    button = 0
}
function pauseUntilButtonA () {
    button = 0
    pauseUntil(() => button == 1)
    button = 0
}
function TurnToLineLeft (leftSpeed: number, rightSpeed: number) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, leftSpeed)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, rightSpeed)
    basic.pause(500)
    pauseUntil(() => maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0)
    maqueen.motorStop(maqueen.Motors.All)
}
function TrackLineUntilMission (forwardSpeed: number, turnSpeed: number, reverseTurnSpeed: number) {
    while (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 || maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, reverseTurnSpeed)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, turnSpeed)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, turnSpeed)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, reverseTurnSpeed)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, forwardSpeed)
        }
    }
    maqueen.motorStop(maqueen.Motors.All)
}
input.onButtonPressed(Button.A, function () {
    button = 1
})
function pauseUntilButtonAB () {
    button = 0
    pauseUntil(() => button == 3)
    button = 0
}
input.onButtonPressed(Button.AB, function () {
    button = 3
})
/**
 * Button helper
 * 
 * These functions are a workaround to be able to use buttons from the iPad app. If you decide to write your own functions for bonus points, these can still be used.
 */
input.onButtonPressed(Button.B, function () {
    button = 2
})
function TurnToLineRight (leftSpeed: number, rightSpeed: number) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, leftSpeed)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, rightSpeed)
    basic.pause(500)
    pauseUntil(() => maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0)
    maqueen.motorStop(maqueen.Motors.All)
}
