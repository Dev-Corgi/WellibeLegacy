import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";
import { heightPercentage} from "../ResponsiveSize";
const PhotoBeginView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splash}>
      <Text style={styles.maintext}>{`이제 더욱
자세하게 살펴볼게요`}</Text>
      <Text style={styles.subtext}>{`몸에 힘을 풀고 정면을 응시한 후
증명사진을 찍듯 사진을 찍어주세요`}</Text>
      <View style={[styles.button, styles.buttonPosition]}>
        <TouchableOpacity
          style={[styles.buttonChild, styles.textboxPosition]}
          onPress={() => navigation.navigate("TakePhotoView")}
        />
        <Text style={[styles.text, styles.textTypo]}>진단 시작하기</Text>
        <Image
          style={[styles.icMagnifier1Icon, styles.icMagnifier1IconPosition]}
          resizeMode="cover"
          source={require("../assets/ic-magnifier-1.png")}
        />
      </View>
      <Image
        style={styles.icMagnifierColor1Icon}
        resizeMode="cover"
        source={require("../assets/ic-magnifier-color-1.png")}
      />
      <View style={[styles.textframe, styles.buttonPosition]}>
        <TouchableOpacity
          style={[styles.textbox, styles.textboxPosition]}
          onPress={() => navigation.navigate("Screen15")}
        />
        <View style={styles.textset}>
          <View style={[styles.textgroup3, styles.textgroupFlexBox]}>
            <Text style={[styles.ask1, styles.textTypo]}>
              카메라 접근을 허용해 주세요
            </Text>
            <Image
              style={styles.icCheckActive1Icon}
              resizeMode="cover"
              source={require("../assets/ic-check-active-1.png")}
            />
          </View>
          <View style={[styles.textgroup2, styles.textgroupFlexBox]}>
            <Text style={[styles.ask1, styles.textTypo]}>
              안경을 쓰셨으면 안경을 벗어주세요
            </Text>
            <Image
              style={styles.icCheckActive1Icon}
              resizeMode="cover"
              source={require("../assets/ic-check-active-1.png")}
            />
          </View>
          <View style={[styles.textgroup2, styles.textgroupFlexBox]}>
            <Text style={[styles.ask1, styles.textTypo]}>
              제시된 가이드에 얼굴을 맞춰주세요
            </Text>
            <Image
              style={styles.icCheckActive1Icon}
              resizeMode="cover"
              source={require("../assets/ic-check-active-1.png")}
            />
          </View>
        </View>
      </View>
      <View
        style={[styles.icMagnifierFrame, styles.icMagnifier1IconPosition]}
      />
      <Image
        style={styles.imgThumbIcon}
        resizeMode="cover"
        source={require("../assets/img-thumb.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    right: heightPercentage(24),
    left: heightPercentage(24),
    position: "absolute",
  },
  textboxPosition: {
    borderRadius: Border.br_base,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    fontSize: FontSize.font_size,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Bold,
    
    position: "absolute",
  },
  icMagnifier1IconPosition: {
    height: heightPercentage(31),
    width: heightPercentage(31),
    marginLeft: heightPercentage(-68.5),
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textgroupFlexBox: {
    alignSelf: "stretch",
    height: heightPercentage(44),
  },
  maintext: {
    top: heightPercentage(60),
    fontSize: FontSize.font4_size,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Bold,
    
    left: heightPercentage(24),
    color: Color.navy,
    position: "absolute",
  },
  subtext: {
    top: heightPercentage(131),
    letterSpacing: -0.5,
    
    color: Color.grey,
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Medium,
    left: heightPercentage(24),
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.navy,
  },
  text: {
    marginTop: heightPercentage(-11),
    marginLeft: heightPercentage(-37.5),
    color: Color.white,
    width: heightPercentage(87),
    left: "50%",
    top: "50%",
  },
  icMagnifier1Icon: {
    marginTop: heightPercentage(-14.5),
  },
  button: {
    top: heightPercentage(719),
    height: heightPercentage(57),
  },
  icMagnifierColor1Icon: {
    top: heightPercentage(97),
    left: heightPercentage(221),
    width: heightPercentage(26),
    height: heightPercentage(26),
    position: "absolute",
  },
  textbox: {
    backgroundColor: Color.extraLightGrey,
  },
  ask1: {
    top: "50%",
    left: heightPercentage(53),
    color: Color.navy,
    marginTop:heightPercentage(-11)
  },
  icCheckActive1Icon: {
    top: heightPercentage(0),
    left: heightPercentage(0),
    width: heightPercentage(44),
    height: heightPercentage(44),
    position: "absolute",
  },
  textgroup3: {
    height: heightPercentage(44),
  },
  textgroup2: {
    marginTop: heightPercentage(4),
    height: heightPercentage(44),
  },
  textset: {
    marginTop: heightPercentage(-70),
    right: heightPercentage(0),
    left: heightPercentage(14),
    height: heightPercentage(140),
    alignItems: "center",
    top: "50%",
    position: "absolute",
  },
  textframe: {
    top: heightPercentage(496),
    height: heightPercentage(174),
  },
  icMagnifierFrame: {
    marginTop: heightPercentage(327),
  },
  imgThumbIcon: {
    marginLeft: heightPercentage(-151.5),
    top: heightPercentage(250),
    width: heightPercentage(303),
    height: heightPercentage(176),
    left: "50%",
    position: "absolute",
  },
  splash: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: heightPercentage(812),
    overflow: "hidden",
    width: "100%",
  },
});

export default PhotoBeginView;
