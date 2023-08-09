import React from 'react';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const CorgiView = (props) => {
  const [state, setState] = useState({});
  const motiondata = {};

  useEffect(() => {
    if (props.motions != null) {
      if (props.inputcontroller != null) {
        const handleMotion = event => {
          makeMotion();
          setState({});
        };
        props.inputcontroller.eventTarget.addEventListener(props.inputcontroller.eventname, handleMotion);
      } else {
        makeMotion();
        setState({});
      }
    }
  }, []);

  const makeMotion = () => {
    props.motions.forEach(function (motion, index) {
      motion.properties.forEach(function (property, index) {
        motiondata[property.name] = withTiming(
          property.tovalue,
          motion.translation,
        );
      });
    });
  };

  const AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [motiondata],
    };
  });

  return <Animated.View style={[props.styles, AnimatedStyle]} />;
};

export default CorgiView;
