import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { heightPercentage} from "../ResponsiveSize";
import Button1 from "../component/Button1";
const Join2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.join}>
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line2.png")}
      />
      <View style={[styles.inputboxPhonenumber, styles.buttonPosition]}>
        <View
          style={[
            styles.inputboxPhonenumberChild,
            styles.buttonBakcgroundPosition,
          ]}
        />
        <Text style={[styles.text, styles.textTypo1]}>
          ‘-’ 뺴고 입력해주세요.
        </Text>
      </View>
      <Text style={styles.headerPhonenumber}>휴대전화번호</Text>
      <View style={[styles.checkboxset, styles.checkboxsetPosition]}>
        <View style={styles.checkbox1}>
          <Text style={[styles.text1, styles.textTypo1]}>
            본인확인 서비스 이용약관
          </Text>
          <Image
            style={styles.checkbox1Child}
            resizeMode="cover"
            source={require("../assets/vector-441.png")}
          />
          <Image
            style={[styles.icCheckUnactive4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ic-check-unactive-4.png")}
          />
        </View>
        <View style={styles.checkbox1}>
          <Text style={[styles.text1, styles.textTypo1]}>
            고유식별정보처리 동의
          </Text>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/5.png")}
          />
          <Image
            style={[styles.icCheckUnactive4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ic-check-unactive-4.png")}
          />
        </View>
        <View style={styles.checkbox1}>
          <Text style={[styles.text1, styles.textTypo1]}>통신사 이용약관</Text>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/5.png")}
          />
          <Image
            style={[styles.icCheckUnactive4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ic-check-unactive-4.png")}
          />
        </View>
        <View style={styles.checkbox1}>
          <Text style={[styles.text1, styles.textTypo1]}>
            개인정보 수집/ 이용/ 취급 위탁 동의
          </Text>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/5.png")}
          />
          <Image
            style={[styles.icCheckUnactive4Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ic-check-unactive-4.png")}
          />
        </View>
      </View>
      <View style={[styles.checkboxAll, styles.checkboxsetPosition]}>
        <Text style={[styles.text5, styles.textTypo]}>전체 동의하기</Text>
        <Image
          style={[styles.icCheckUnactive4Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ic-check-unactive-4.png")}
        />
      </View>
      <Image
        style={styles.imgLogotextblackIcon}
        resizeMode="cover"
        source={require("../assets/img-logotextblack.png")}
      />
      <View style={styles.button}>
        <Button1 text = {"다음"} route={"Join3"}></Button1>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  buttonPosition: {
    left: heightPercentage(24),
    right: heightPercentage(24),
    position: "absolute",
  },
  buttonBakcgroundPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    color: Color.mediumGrey,
    fontFamily: FontFamily.Pretendard_Medium,
    
    letterSpacing: -0.6,
    fontSize: FontSize.font2_size,
    position: "absolute",
  },
  checkboxsetPosition: {
    left: heightPercentage(21),
    right: heightPercentage(22),
    position: "absolute",
  },
  iconLayout: {
    width: heightPercentage(44),
    top: heightPercentage(0),
    height: heightPercentage(44),
    position: "absolute",
  },
  textTypo: {
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Bold,
    position: "absolute",
  },
  lineIcon: {
    top: heightPercentage(126),
    left: heightPercentage(29),
    width: heightPercentage(35),
    height: heightPercentage(1),
    position: "absolute",
  },
  inputboxPhonenumberChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.extraLightGrey,
    left: heightPercentage(0),
    right: heightPercentage(0),
  },
  text: {
    top: "30.91%",
    left: "6.12%",
  },
  inputboxPhonenumber: {
    top: heightPercentage(185),
    height: heightPercentage(55),
  },
  headerPhonenumber: {
    top: heightPercentage(145),
    fontSize: FontSize.font1_size,
    color: Color.navy,
    
    left: heightPercentage(28),
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Bold,
    letterSpacing: -0.6,
    position: "absolute",
  },
  text1: {
    top: "50%",
    marginTop: heightPercentage(-12),
    left: heightPercentage(48),
  },
  checkbox1Child: {
    top: heightPercentage(14),
    right: heightPercentage(17),
    width: heightPercentage(11),
    height: heightPercentage(16),
    position: "absolute",
  },
  icCheckUnactive4Icon: {
    left: heightPercentage(0),
  },
  checkbox1: {
    alignSelf: "stretch",
    height: heightPercentage(44),
  },
  icon: {
    right: heightPercentage(0),
    overflow: "hidden",
  },
  checkboxset: {
    top: heightPercentage(454),
  },
  text5: {
    top: "50%",
    marginTop: heightPercentage(-14),
    left: heightPercentage(44),
    width: heightPercentage(137),
    color: Color.navy,
  },
  checkboxAll: {
    top: heightPercentage(398),
    height: heightPercentage(44),
  },
  imgLogotextblackIcon: {
    top: heightPercentage(80),
    width: heightPercentage(126),
    height: heightPercentage(22),
    left: heightPercentage(28),
    position: "absolute",
  },
  buttonBakcground: {
    right: "0%",
    left: "0%",
    borderRadius: Border.br_base,
    backgroundColor: Color.navy,
    width: "100%",
  },
  buttonText: {
    marginTop: heightPercentage(-5.5),
    marginLeft: heightPercentage(-14.5),
    top: "50%",
    left: "50%",
    color: Color.white,
  },
  join: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: heightPercentage(812),
    overflow: "hidden",
    width: "100%",
  },
});

export default Join2;
