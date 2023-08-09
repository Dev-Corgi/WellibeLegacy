import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { heightPercentage} from "../ResponsiveSize";
import Button2 from "../component/Button2";
const JoinClearView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signInClear}>
      <Text style={[styles.maintext, styles.textTypo]}>
        가입이 완료되었습니다
      </Text>
      <View style={styles.button}>
        <Button2 text = {"시작하기"} route={"CheckStatusScene"}></Button2>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.navy,
    fontFamily: FontFamily.Pretendard_Bold,
    
    left: "50%",
    position: "absolute",
  },
  maintext: {
    marginLeft: heightPercentage(-86),
    top: heightPercentage(393),
    fontSize: FontSize.font1_size,
    letterSpacing: -0.6,
    lineHeight: heightPercentage(30),
  },
  buttonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_base,
    backgroundColor: Color.pointY,
    position: "absolute",
    width: "100%",
  },
  text: {
    marginTop: heightPercentage(-5.5),
    marginLeft: heightPercentage(-28.5),
    top: "50%",
    fontSize: FontSize.font_size,
    lineHeight: heightPercentage(26),
  },
  button: {
    borderRadius: Border.br_base,
    overflow: "hidden",
    top: heightPercentage(719),
    height: heightPercentage(58),
    width: heightPercentage(360),
    left: "50%",
    marginLeft: heightPercentage(-180), 
    position: "absolute",
  },
  signInClear: {
    backgroundColor: Color.white,
    flex: 1,
    height: heightPercentage(812),
    overflow: "hidden",
    width: "100%",
  },
});

export default JoinClearView;
