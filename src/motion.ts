/* eslint-disable no-alert */
import type { MotionData, OrientationData } from './types'

export class Motion {
  motionInfo: MotionData | undefined
  orientationInfo: OrientationData | undefined

  constructor() {
    this.clear()
    window.addEventListener('deviceorientation', this.handleOrientation, true)
    window.addEventListener('devicemotion', this.handleMotion, true)
    // this.requestPermissions().then(() => {
    // })
  }

  handleMotion(event: DeviceMotionEvent) {
    this.motionInfo = {
      acceleration: event.acceleration,
      accelerationIncludingGravity: event.acceleration,
      rotationRate: event.rotationRate,
      interval: event.interval,
      timeStamp: event.timeStamp,
    }
  }

  handleOrientation(event: DeviceOrientationEvent) {
    this.orientationInfo = {
      absolute: event.absolute,
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
      timeStamp: event.timeStamp,
    }
  }

  async requestPermissions() {
    if (typeof DeviceMotionEvent === 'undefined' || typeof DeviceOrientationEvent === 'undefined')
      alert('Not supported 🥺')

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

  clear() {
    this.motionInfo = undefined
    this.orientationInfo = undefined
  }

  remove() {
    this.clear()
    window.removeEventListener('deviceorientation', this.handleOrientation, true)
    window.removeEventListener('devicemotion', this.handleMotion, true)
  }
}
