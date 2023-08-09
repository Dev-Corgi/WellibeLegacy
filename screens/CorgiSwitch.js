import React,{useState} from "react";
import { Text, StyleSheet,View, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { heightPercentage} from "../ResponsiveSize";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	Easing,
	interpolateColor,
  } from 'react-native-reanimated';
const CorgiSwitch = ({switchframestyle,switchstyle,text1style,text2style,output}) => {
    const translateX = useSharedValue(0);
    const [state, setstate] = useState(1)

    const handlePress = () => {
      setstate((prev) => -1 * prev)
      output((prev) => -1 * prev)
      
	   if(state == 1){
        translateX.value = withTiming(translateX.value - heightPercentage(-switchframestyle.width/2), {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1)
        });

		Color1.value = withTiming(1, {
			duration: 500,
			easing: Easing.bezier(0.42, 0, 0.58, 1),
		  });

		  Color2.value = withTiming(0, {
			duration: 500,
			easing: Easing.bezier(0.42, 0, 0.58, 1),
		  });
		}

		else if(state == -1){
			translateX.value = withTiming(translateX.value - heightPercentage(switchframestyle.width/2), {
				duration: 500,
				easing: Easing.bezier(0.42, 0, 0.58, 1)
			  });
	  
			  Color1.value = withTiming(0, {
				  duration: 500,
				  easing: Easing.bezier(0.42, 0, 0.58, 1),
				});
	  
				Color2.value = withTiming(1, {
				  duration: 500,
				  easing: Easing.bezier(0.42, 0, 0.58, 1),
				});
		}
      };

      const boxAnimatedStyle = useAnimatedStyle(() => {
        return {
          transform: [
            { translateX: translateX.value },
          ],
        };
      });

	  const text1 = text1style.text;
      delete text1style.text;

	  const text2 = text2style.text;
      delete text2style.text;

	  const Color1 = useSharedValue(0);
	  const Color2 = useSharedValue(1);

	  const textcolor1 = useAnimatedStyle(() => {
		return {
		  color: interpolateColor(Color1.value, [0, 1], [text1style.color, text2style.color])
		};
	  });

	  const textcolor2 = useAnimatedStyle(() => {
		return {
		  color: interpolateColor(Color2.value, [0, 1], [text1style.color, text2style.color])
		};
	  });

    return(

<View style={switchframestyle}>
<Animated.View style={[switchstyle,boxAnimatedStyle]} />
<View style={styles.textsection}>
  <TouchableOpacity style={styles.textframe}
  onPress={() => handlePress()}>
	<Animated.Text style={[text1style,textcolor1]}>{text1}</Animated.Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.textframe}
  onPress={() => handlePress()}>
	<Animated.Text style={[text2style,textcolor2]}>{text2}</Animated.Text>
  </TouchableOpacity>
</View>
</View>
)}


const styles = StyleSheet.create({
	textframe: {
	height: "100%",
	  width: "50%",
	  alignItems: "center",
	  justifyContent: 'center'
	},
	textsection: {
	  width : "100%",
	  height : "100%",
	  flexDirection: "row",
	  position: "absolute",
	},
  });

export default CorgiSwitch