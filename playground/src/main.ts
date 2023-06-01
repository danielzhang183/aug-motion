import './style.css'
import { Motion } from '../../src'

const motion = new Motion()
const motionInfo = document.querySelector<HTMLDivElement>('#motion')!
const orientationInfo = document.querySelector<HTMLDivElement>('#orientation')!

motionInfo.textContent = JSON.stringify(motion?.motionInfo || {}, null, 2)
orientationInfo.textContent = JSON.stringify(motion?.orientationInfo || {}, null, 2)
