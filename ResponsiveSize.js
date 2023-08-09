import {} from "react-native";

import {Dimensions, StatusBar} from 'react-native'; 

const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;
const BOTTOM_NAV_BAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT - STATUS_BAR_HEIGHT;
const REAL_HEIGHT = SCREEN_HEIGHT - BOTTOM_NAV_BAR_HEIGHT - STATUS_BAR_HEIGHT;
const FIGMA_WINDOW_WIDTH = 375;
const FIGMA_WINDOW_HEIGHT = 812;

export function widthPercentage(width) {
  return (width * WINDOW_WIDTH / FIGMA_WINDOW_WIDTH)
}

export function heightPercentage(height) {
   return (height * REAL_HEIGHT / FIGMA_WINDOW_HEIGHT)
}


export function fontPercentage(size)  {
  return (size * REAL_HEIGHT / FIGMA_WINDOW_HEIGHT)
}