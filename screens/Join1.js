import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { heightPercentage} from "../ResponsiveSize";
import Button1 from "../component/Button1";

const Join1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.join}>
      <View style={styles.button}>
        <Button1 text = {"다음"} route={"Join2"}></Button1>
      </View>

      <View style={[styles.checkboxset, styles.checkboxsetPosition]}>
        <View style={styles.checkbox1}>
          <Text style={styles.text}>(필수) 만 14세 이상의 회원입니다.</Text>
          <Image
            style={styles.icCheckUnactive1Icon}
            resizeMode="cover"
            source={require("../assets/ic-check-unactive-4.png")}
          />
        </View>
        <View style={styles.checkbox2}>
          <Text style={styles.text}>(필수) 서비스 이용약관에 동의합니다.</Text>
          <Image
            style={styles.icCheckUnactive1Icon}
            resizeMode="cover"
            source={require("../assets/ic-check-unactive-4.png")}
          />
        </View>
        <View style={styles.checkbox3}>
          <Text style={styles.text}>
            (필수) 개인정보 처리방침에 동의합니다.
          </Text>
          <Image
            style={styles.icCheckUnactive1Icon}
            resizeMode="cover"
            source={require("../assets/ic-check-unactive-4.png")}
          />
        </View>
        <View style={styles.checkbox4}>
          <Text style={styles.text}>
            (선택) 개인정보 제 3자 제공 동의 약관에 동의합니다.
          </Text>
          <Image
            style={styles.icCheckUnactive1Icon}
            resizeMode="cover"
            source={require("../assets/ic-check-unactive-4.png")}
          />
        </View>
        <View style={styles.checkbox5}>
          <Text style={styles.text}>
            (선택) 마케팅 활용 및 수신 동의 약관에 동의합니다.
          </Text>
          <Image
            style={styles.icCheckUnactive1Icon}
            resizeMode="cover"
            source={require("../assets/ic-check-unactive-4.png")}
          />
        </View>
      </View>
      <View style={[styles.checkboxAll, styles.checkboxsetPosition]}>
        <Text style={styles.text5}>전체 동의하기</Text>
        <Image
          style={styles.icCheckUnactive1Icon}
          resizeMode="cover"
          source={require("../assets/ic-check-unactive-4.png")}
        />
      </View>
      <View style={[styles.inputboxBirthSet, styles.inputboxPosition]}>
        <View style={[styles.inputboxDate, styles.inputboxLayout]}>
          <View
            style={[styles.inputboxBackground, styles.buttonBakcgroundPosition]}
          />
          <Text style={[styles.inputboxTextholder, styles.inputboxTypo]}>
            DD
          </Text>
        </View>
        <View style={[styles.inputboxMonth, styles.inputboxLayout]}>
          <View
            style={[styles.inputboxBackground, styles.buttonBakcgroundPosition]}
          />
          <Text style={[styles.inputboxTextholder, styles.inputboxTypo]}>
            MM
          </Text>
        </View>
        <View style={[styles.inputboxYear, styles.inputboxLayout]}>
          <View
            style={[styles.inputboxBackground, styles.buttonBakcgroundPosition]}
          />
          <Text style={[styles.inputboxTextholder, styles.inputboxTypo]}>
            YY
          </Text>
        </View>
      </View>
      <Text style={[styles.headerBirth, styles.headerTypo]}>생년월일</Text>
      <View style={[styles.inputboxNickname, styles.inputboxPosition]}>
        <View
          style={[styles.inputboxBackground, styles.buttonBakcgroundPosition]}
        />
        <Text style={[styles.inputboxTextholder3, styles.inputboxTypo]}>
          닉네임은 3자~10자 이내로 입력해주세요.
        </Text>
      </View>
      <Text style={[styles.headerNickname, styles.headerTypo]}>닉네임</Text>
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line2.png")}
      />
      <Image
        style={styles.imgLogotextblackIcon}
        resizeMode="cover"
        source={require("../assets/img-logotextblack.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBakcgroundPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  checkboxsetPosition: {
    left: heightPercentage(21),
    right: heightPercentage(34),
    position: "absolute",
  },
  inputboxPosition: {
    height: heightPercentage(55),
    left: heightPercentage(24),
    right: heightPercentage(24),
    position: "absolute",
  },
  inputboxLayout: {
    width: "32.11%",
    height: heightPercentage(55),
    top: heightPercentage(0),
    position: "absolute",
  },
  inputboxTypo: {
    left: heightPercentage(20),
    color: Color.mediumGrey,
    
    lineHeight: heightPercentage(22),
    letterSpacing: -0.6,
    fontSize: FontSize.font2_size,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Regular,
    position: "absolute",
  },
  headerTypo: {
    lineHeight: heightPercentage(30),
    fontSize: FontSize.font1_size,
    left: heightPercentage(28),
    color: Color.navy,
    letterSpacing: -0.6,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Bold,
    
    position: "absolute",
  },
  buttonBakcground: {
    borderRadius: Border.br_base,
    backgroundColor: Color.navy,
    left: "0%",
  },
  buttonText: {
    marginTop: heightPercentage(-12),
    marginLeft: heightPercentage(-14.5),
    top: "50%",
    left: "50%",
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.Pretendard_Bold,
    fontSize: FontSize.font_size,
    position: "absolute",
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
  text: {
    top: "50%",
    marginTop: heightPercentage(-12),
    left: heightPercentage(48),
    color: Color.mediumGrey,
    
    lineHeight: heightPercentage(22),
    letterSpacing: -0.6,
    fontSize: FontSize.font2_size,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Regular,
    position: "absolute",
  },
  icCheckUnactive1Icon: {
    left: heightPercentage(0),
    width: heightPercentage(44),
    top: heightPercentage(0),
    height: heightPercentage(44),
    position: "absolute",
  },
  checkbox1: {
    width: heightPercentage(225),
    height: heightPercentage(44),
  },
  checkbox2: {
    width: heightPercentage(243),
    height: heightPercentage(44),
  },
  checkbox3: {
    width: heightPercentage(254),
    height: heightPercentage(44),
  },
  checkbox4: {
    width: heightPercentage(320),
    height: heightPercentage(44),
  },
  checkbox5: {
    width: heightPercentage(312),
    height: heightPercentage(44),
  },
  checkboxset: {
    top: heightPercentage(454),
  },
  text5: {
    top: "50%",
    left: heightPercentage(43),
    width: heightPercentage(137),
    color: Color.navy,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Bold,
    marginTop: heightPercentage(-14),
    
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    position: "absolute",
  },
  checkboxAll: {
    top: heightPercentage(398),
    height: heightPercentage(44),
  },
  inputboxBackground: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.extraLightGrey,
    left: "0%",
  },
  inputboxTextholder: {
    top: heightPercentage(16),
  },
  inputboxDate: {
    left: "67.89%",
    right: "0%",
    width: "32.11%",
  },
  inputboxMonth: {
    right: "33.94%",
    left: "33.94%",
  },
  inputboxYear: {
    right: "67.89%",
    left: "0%",
  },
  inputboxBirthSet: {
    top: heightPercentage(314),
  },
  headerBirth: {
    top: heightPercentage(274),
    width: heightPercentage(68),
  },
  inputboxTextholder3: {
    top: heightPercentage(17),
  },
  inputboxNickname: {
    top: heightPercentage(185),
  },
  headerNickname: {
    top: heightPercentage(145),
    width: heightPercentage(51),
  },
  lineIcon: {
    top: heightPercentage(126),
    left: heightPercentage(29),
    width: heightPercentage(35),
    height: heightPercentage(1),
    position: "absolute",
  },
  imgLogotextblackIcon: {
    top: heightPercentage(80),
    width: heightPercentage(126),
    height: heightPercentage(22),
    left: heightPercentage(28),
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

export default Join1;
