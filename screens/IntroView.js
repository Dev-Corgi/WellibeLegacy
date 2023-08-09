import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";
import { heightPercentage} from "../ResponsiveSize";
const IntroView = () => {
  return (
    <View style={styles.splash}>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoIcon: {
    position: "absolute",
    marginLeft: heightPercentage(-65.5),
    top: heightPercentage(366),
    left: "50%",
    width: heightPercentage(130),
    height: heightPercentage(80),
    overflow: "hidden",
  },
  splash: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: heightPercentage(812),
    overflow: "hidden",
  },
});

export default IntroView;
