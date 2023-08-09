import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import { heightPercentage} from "../ResponsiveSize";
import Button1 from "../component/Button1";
const Join3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.join}>
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line2.png")}
      />
      <View style={[styles.inputfieldPinnumber, styles.buttonPosition]}>
        <View
          style={[
            styles.inputfieldPinnumberChild,
            styles.buttonBakcgroundPosition,
          ]}
        />
        <Text style={styles.text}>인증번호 4자리를 입력해 주세요.</Text>
      </View>
      <Text style={[styles.headerPinnumber, styles.buttonTextTypo]}>
        인증번호
      </Text>
      <Text style={[styles.subtext, styles.timerTypo]}>
        인증번호를 받지 못하셨나요?
      </Text>
      <Text style={[styles.buttonResend, styles.timerTypo]}>재전송하기</Text>
      <Text style={[styles.timer, styles.timerTypo]}>04:30</Text>
      <Image
        style={styles.imgLogotextblackIcon}
        resizeMode="cover"
        source={require("../assets/img-logotextblack.png")}
      />
      <View style={styles.button}>
        <Button1 text = {"다음"} route={"JoinClearView"}></Button1>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    left: heightPercentage(24),
    right: heightPercentage(24),
    position: "absolute",
  },
  buttonBakcgroundPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  buttonTextTypo: {
    
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Bold,
    position: "absolute",
  },
  timerTypo: {
    lineHeight: heightPercentage(18),
    letterSpacing: -0.2,
    fontSize: FontSize.font3_size,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Medium,
    
    position: "absolute",
  },
  lineIcon: {
    top: heightPercentage(126),
    left: heightPercentage(29),
    width: heightPercentage(35),
    height: heightPercentage(1),
    position: "absolute",
  },
  inputfieldPinnumberChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.extraLightGrey,
  },
  text: {
    top: heightPercentage(17),
    left: heightPercentage(20),
    fontSize: FontSize.font2_size,
    lineHeight: heightPercentage(22),
    color: Color.mediumGrey,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Medium,
    
    letterSpacing: -0.6,
    position: "absolute",
  },
  inputfieldPinnumber: {
    top: heightPercentage(185),
    height: heightPercentage(55),
  },
  headerPinnumber: {
    top: heightPercentage(145),
    fontSize: FontSize.font1_size,
    lineHeight: heightPercentage(30),
    color: Color.navy,
    left: heightPercentage(28),
    letterSpacing: -0.6,
    
  },
  subtext: {
    color: Color.grey,
    top: heightPercentage(252),
    letterSpacing: -0.2,
    fontSize: FontSize.font3_size,
    left: heightPercentage(28),
  },
  buttonResend: {
    left: heightPercentage(173),
    color: Color.subBlue,
    top: heightPercentage(252),
    letterSpacing: -0.2,
    fontSize: FontSize.font3_size,
  },
  timer: {
    top: heightPercentage(204),
    right: heightPercentage(44),
    color: Color.pointY,
  },
  imgLogotextblackIcon: {
    top: heightPercentage(80),
    width: heightPercentage(126),
    height: heightPercentage(22),
    left: heightPercentage(28),
    position: "absolute",
  },
  buttonBakcground: {
    borderRadius: Border.br_base,
    backgroundColor: Color.navy,
  },
  buttonText: {
    marginTop: heightPercentage(-5.5),
    marginLeft: heightPercentage(-14.5),
    top: "50%",
    left: "50%",
    fontSize: FontSize.font_size,
    lineHeight: heightPercentage(26),
    color: Color.white,
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
  join: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: heightPercentage(812),
    overflow: "hidden",
    width: "100%",
  },
});

export default Join3;
