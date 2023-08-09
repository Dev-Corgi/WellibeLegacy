import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import {heightPercentage} from '../ResponsiveSize';

const Alart = ({text}) => {
  return (
    <View style={styles.icRedalertParent}>
      <Image
        style={styles.icRedalertIcon}
        resizeMode="cover"
        source={require("../assets/ic-redalert.png")}
      />
      <Text style={styles.alartText}>{text}</Text>
      <Image
        style={styles.icInfoIcon}
        resizeMode="cover"
        source={require("../assets/ic-info.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icRedalertIcon: {
    width: heightPercentage(18),
    height: heightPercentage(16),
  },
  alartText: {
    fontSize: FontSize.font_size,
    lineHeight: heightPercentage(26),
    fontFamily: FontFamily.font,
    color: Color.navy,
    textAlign: "center",
    marginLeft: heightPercentage(8),
    fontFamily : FontFamily.Pretendard_Bold
  },
  icInfoIcon: {
    width: heightPercentage(12),
    height: heightPercentage(12),
    marginLeft: heightPercentage(8),
  },
  icRedalertParent: {
    marginRight: heightPercentage(12),
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
    height: heightPercentage(44),
    flexDirection: "row",
    paddingHorizontal: heightPercentage(16),
    alignItems: "center",
  },
});

export default Alart;