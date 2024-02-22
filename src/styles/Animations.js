import {keyframes} from "styled-components"

const eggAnimation = keyframes`
  0% ,  100%{  transform: translate(-50%, -20px) rotate3d(90, 0, 0, 90deg); opacity: 0; }
  10% , 90% {  transform: translate(-50%, -30px) rotate3d(90, 0, 0, 90deg); opacity: 1; }
  25%  {transform:  translate(-50% , -40px) rotate3d(85, 17, 2, 70deg) }
  75% {transform:  translate(-50% , -40px) rotate3d(75, -3, 2, 70deg) }
  50% {transform:  translate(-55% , -50px) rotate3d(75, -8, 3, 50deg) }
`

const panAnimation = keyframes`
  0%{  transform: rotate(-5deg)  }
  100%{  transform: rotate(10deg)  }
`

export {eggAnimation, panAnimation}