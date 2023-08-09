import {
    useSharedValue,
    Easing
  } from 'react-native-reanimated';

export default class MovingMotion  {
    constructor(delay,duration,easetype,deltaX,deltaY) {
        this.translation = {
            duration: duration,
            easing: Easing.bezier(easetype[0], easetype[1], easetype[2], easetype[3]),
            delay: delay
          }

          const translateX = useSharedValue(0);
          translateX.name = "translateX"
          translateX.tovalue = deltaX;

          const translateY = useSharedValue(0);
          translateY.name = "translateY"
          translateY.tovalue = deltaY;

          this.property = [translateX,translateY]
    }
  }