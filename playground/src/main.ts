import './style.css'
import { Motion } from '../../src'

const motion = new Motion()
const motionDiv = document.querySelector<HTMLDivElement>('#motion')!
const orientationDiv = document.querySelector<HTMLDivElement>('#orientation')!
const btn = document.querySelector<HTMLButtonElement>('#btn')!

motionDiv.textContent = JSON.stringify(motion?.motionInfo || {}, null, 2)
orientationDiv.textContent = JSON.stringify(motion?.orientationInfo || {}, null, 2)

btn.addEventListener('click', async () => {
  await motion.requestPermissions()
})
