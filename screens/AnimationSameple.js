import React, { useRef } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const AnimatedView = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    // 10px만큼 이동하는 애니메이션 설정
    Animated.timing(animatedValue, {
      toValue: 10,
      duration: 500, // 애니메이션 진행 시간 (ms)
      useNativeDriver: false, // Android에서는 반드시 false로 설정해야 합니다.
    }).start(() => {
      // 애니메이션이 완료된 후에 호출될 콜백
      animatedValue.setValue(0); // 애니메이션을 초기 상태로 되돌립니다.
    });
  };

  // 사각형의 스타일을 애니메이션 값에 따라 설정합니다.
  const animatedStyle = {
    transform: [{ translateX: animatedValue }],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={[styles.square, animatedStyle]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
});

export default AnimatedView;
