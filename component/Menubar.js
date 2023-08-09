import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {FontFamily, FontSize, Border, Color} from '../GlobalStyles';
import {heightPercentage} from '../ResponsiveSize';
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolateColor,
} from 'react-native-reanimated';
const Menubar = () => {
    const navigation = useNavigation();
  const [status, setStatus] = useState(1);

  const Opacity1 = useSharedValue(1);
  const Opacity2 = useSharedValue(0);
  const Opacity3 = useSharedValue(0);
  const Opacity4 = useSharedValue(0);

  const Color1 = useSharedValue(1);
  const Color2 = useSharedValue(0);
  const Color3 = useSharedValue(0);
  const Color4 = useSharedValue(0);

  const handleOpacity = (index) => {
    if (index == 1) {
      Opacity1.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
      Color1.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
      navigation.navigate("CommunicationMain")
    } else {
      Opacity1.value = withTiming(0, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
      Color1.value = withTiming(0, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
    }

    if (index == 2) {
      Opacity2.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
      Color2.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
      navigation.navigate("ReportSeasonView")
    } else {
      Opacity2.value = withTiming(0, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
      Color2.value = withTiming(0, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
    }

    if (index == 3) {
      Opacity3.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
      Color3.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
      navigation.navigate("ReportSeasonView")
    } else {
      Opacity3.value = withTiming(0, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
      Color3.value = withTiming(0, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
    }

    if (index == 4) {
      Opacity4.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
      Color4.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
    } else {
      Opacity4.value = withTiming(0, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
      Color4.value = withTiming(0, {
        duration: 500,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
      });
    }
  };

  const textcolor1 = useAnimatedStyle(() => {
    return {
      color: interpolateColor(Color1.value, [0, 1], [Color.mediumGrey, Color.navy])
    };
  });

  const textcolor2 = useAnimatedStyle(() => {
    return {
      color: interpolateColor(Color2.value, [0, 1], [Color.mediumGrey, Color.navy])
    };
  });

  const textcolor3 = useAnimatedStyle(() => {
    return {
      color: interpolateColor(Color3.value, [0, 1], [Color.mediumGrey, Color.navy])
    };
  });

  const textcolor4 = useAnimatedStyle(() => {
    return {
      color: interpolateColor(Color4.value, [0, 1], [Color.mediumGrey, Color.navy])
    };
  });


  const fillbutton1 = useAnimatedStyle(() => {
    return {
      opacity: Opacity1.value,
    };
  });

  const fillbutton2 = useAnimatedStyle(() => {
    return {
      opacity: Opacity2.value,
    };
  });

  const fillbutton3 = useAnimatedStyle(() => {
    return {
      opacity: Opacity3.value,
    };
  });

  const fillbutton4 = useAnimatedStyle(() => {
    return {
      opacity: Opacity4.value,
    };
  });

  const handleStatus = index => {
    setStatus(index);
    handleOpacity(index);
  };

  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <View style={styles.homebuttonParent}>
        <TouchableOpacity
          style={styles.homebuttonLayout}
          onPress={() => handleStatus(1)}>
          <Animated.Text style={[styles.text, styles.textTypo,textcolor1]}>홈</Animated.Text>
          <Image
            style={styles.icHomelineIcon}
            resizeMode="cover"
            source={require('../assets/ic_homeline.png')}
          />
          <Animated.Image
            style={[styles.icHomelineIcon, fillbutton1]}
            resizeMode="cover"
            source={require('../assets/ic_homefill.png')}></Animated.Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.reportbutton, styles.homebuttonLayout]}
          onPress={() => handleStatus(2)}>
          <Animated.Text style={[styles.text1, styles.textTypo,textcolor2]}>리포트</Animated.Text>
          <Image
            style={styles.icHomelineIcon}
            resizeMode="cover"
            source={require('../assets/ic_reportline.png')}
          />
          <Animated.Image
            style={[styles.icHomelineIcon, fillbutton2]}
            resizeMode="cover"
            source={require('../assets/ic_reportfill.png')}></Animated.Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.reportbutton, styles.homebuttonLayout]}
          onPress={() => handleStatus(3)}>
          <Animated.Text style={[styles.text1, styles.textTypo,textcolor3]}>컨텐츠</Animated.Text>
          <Image
            style={styles.icHomelineIcon}
            resizeMode="cover"
            source={require('../assets/ic_contentsline.png')}
          />
          <Animated.Image style={[styles.icHomelineIcon, fillbutton3]}
           resizeMode="cover"
           source={require('../assets/ic_contentfill.png')}>
          </Animated.Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.reportbutton, styles.homebuttonLayout]}
          onPress={() => handleStatus(4)}>
          <Animated.Text style={[styles.text1, styles.textTypo,textcolor4]}>프로필</Animated.Text>
          <Animated.Image
            style={styles.icHomelineIcon}
            resizeMode="cover"
            source={require('../assets/ic_profileline.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.font,
    fontWeight: '500',
    lineHeight: heightPercentage(18),
    letterSpacing: -0.2,
    fontSize: FontSize.font_size,
    marginTop: heightPercentage(17),
    top: '50%',
    position: 'absolute',
  },
  homebuttonLayout: {
    height: heightPercentage(50),
    flex: 1,
    alignItems: 'center',
  },
  frameChild: {
    height: '100%',
    width: '100%',
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1),
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    position: 'absolute',
  },
  text: {
    color: Color.navy,
  },
  icHomelineIcon: {
    marginTop: heightPercentage(-25),
    width: heightPercentage(44),
    height: heightPercentage(44),
    top: '50%',
    position: 'absolute',
  },
  text1: {
    marginLeft: heightPercentage(-15),
    color: Color.mediumGrey,
  },
  reportbutton: {
    marginLeft: heightPercentage(36),
  },
  homebuttonParent: {
    top: heightPercentage(8),
    right: heightPercentage(33),
    left: heightPercentage(33),
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
  rectangleParent: {
    width: heightPercentage(400),
    height: heightPercentage(74),
    position: 'fixed',
    bottom: heightPercentage(15),
    left: '50%',
    marginLeft: heightPercentage(-200),
  },
});

export default Menubar;
