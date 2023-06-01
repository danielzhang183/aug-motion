export interface MotionData {
  acceleration: DeviceMotionEvent['acceleration']
  accelerationIncludingGravity: DeviceMotionEvent['acceleration']
  rotationRate: DeviceMotionEvent['rotationRate']
  interval: DeviceMotionEvent['interval']
  timeStamp: DeviceMotionEvent['timeStamp']
}

export type OrientationData = Pick<
  DeviceOrientationEvent,
  'absolute' | 'alpha' | 'beta' | 'gamma' | 'timeStamp'
>
