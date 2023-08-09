import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';

function ProgressBar({backbarStyle,barStyle,totalStep,nowStep}) {
  const loaderValue = useRef(new Animated.Value(0)).current;

  const load = (count) => {
    Animated.timing(loaderValue, {
      toValue: (count / totalStep) * 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const width = loaderValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  const styles = StyleSheet.create({
    backbar: {
        position: "absolute",
      width: backbarStyle.width,
      height: backbarStyle.height,
      top: backbarStyle.top,
      left:  backbarStyle.left,
      backgroundColor: backbarStyle.backgroundColor,
    },
    bar: {
      backgroundColor: barStyle.backgroundColor,
              width,
              height: barStyle.height,
    }
  });

  useEffect(() => {
    load(nowStep);
  }, [nowStep]);

  return (
    <View>
      <View style={styles.backbar}>
        <Animated.View
          style={styles.bar}
        />
      </View>
    </View>
  );
}

export default ProgressBar;
