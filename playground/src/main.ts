import './style.css'

const motionDiv = document.querySelector<HTMLPreElement>('#motion')!
const orientationDiv = document.querySelector<HTMLPreElement>('#orientation')!
const btn = document.querySelector<HTMLButtonElement>('#btn')!

let motionInfo = {}
let orientationInfo = {}

window.addEventListener('devicemotion', handleMotion, true)
window.addEventListener('deviceorientation', handleOrientation, true)

function handleMotion(event: DeviceMotionEvent) {
  motionInfo = {
    acceleration: {
      x: event.acceleration?.x,
      y: event.acceleration?.y,
      z: event.acceleration?.z,
    },
    accelerationIncludingGravity: {
      x: event.accelerationIncludingGravity?.x,
      y: event.accelerationIncludingGravity?.y,
      z: event.accelerationIncludingGravity?.z,
    },
    rotationRate: {
      alpha: event.rotationRate?.alpha,
      beta: event.rotationRate?.beta,
      gamma: event.rotationRate?.gamma,
    },
    interval: event.interval,
    timeStamp: event.timeStamp,
  }
}

function handleOrientation(event: DeviceOrientationEvent) {
  orientationInfo = {
    absolute: event.absolute,
    alpha: event.alpha,
    beta: event.beta,
    gamma: event.gamma,
    timeStamp: event.timeStamp,
  }
}

async function requestPermissions() {
  if (typeof DeviceMotionEvent === 'undefined' || typeof DeviceOrientationEvent === 'undefined') {
    alert('Not supported 🥺')
    return
  }

  // @ts-expect-error okay
  if (DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
    // @ts-expect-error okay
    const permission = await DeviceMotionEvent.requestPermission()
    if (permission === 'denied')
      alert('please grant 🥺')
  }

  // @ts-expect-error okay
  if (DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
    // @ts-expect-error okay
    const permission = await DeviceOrientationEvent.requestPermission()
    if (permission === 'denied')
      alert('please grant 🥺')
  }
}

function update() {
  motionDiv.textContent = JSON.stringify(motionInfo || {}, null, 2)
  orientationDiv.textContent = JSON.stringify(orientationInfo || {}, null, 2)
  requestAnimationFrame(update)
}

btn.addEventListener('click', () => {
  requestPermissions()
})

update()
