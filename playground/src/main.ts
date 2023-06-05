import './style.css'

const motionDiv = document.querySelector<HTMLDivElement>('#motion')!
const orientationDiv = document.querySelector<HTMLDivElement>('#orientation')!
const btn = document.querySelector<HTMLButtonElement>('#btn')!

let motionInfo = {}
let orientationInfo = {}

window.addEventListener('deviceorientation', handleOrientation, true)
window.addEventListener('devicemotion', handleMotion, true)
function handleMotion(event: DeviceMotionEvent) {
  motionInfo = {
    acceleration: event.acceleration,
    accelerationIncludingGravity: event.acceleration,
    rotationRate: event.rotationRate,
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
