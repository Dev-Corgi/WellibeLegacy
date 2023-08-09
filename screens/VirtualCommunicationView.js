import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { heightPercentage} from "../ResponsiveSize";
const VirtualCommunicationView = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background1.png")}
      />
      <LinearGradient
        style={[styles.foreground, styles.foregroundPosition]}
        locations={[0, 1]}
        colors={["#fcfcfc", "rgba(252, 252, 252, 0)"]}
        useAngle={true}
        angle={180}
      />
      <Image
        style={styles.icSlideindicatorIcon}
        resizeMode="cover"
        source={require("../assets/ic-slideindicator.png")}
      />
      <View style={[styles.inputrectFrame, styles.foregroundPosition]}>
        <View style={[styles.inputrectBackground, styles.backgroundPosition]} />
        <Text style={[styles.inputrectTextholder, styles.text1Typo]}>
          안녕! 오늘 해야할 트레이닝을 알려줘!
        </Text>
      </View>
      <View style={[styles.messageCoach, styles.messageLayout1]}>
        <View style={[styles.messageBackground, styles.messageShadowBox]} />
        <Text style={[styles.messageText, styles.messageTextTypo]}>
          화이팅!! 🔥🔥🔥
        </Text>
      </View>
      <View style={[styles.messageMe, styles.messageLayout1]}>
        <View style={[styles.messageBackground1, styles.messageShadowBox]} />
        <Text style={[styles.messagetext, styles.messageTextTypo]}>
          네! 같이 달려봐요!
        </Text>
      </View>
      <View
        style={[styles.messageCoachTrainingplan, styles.trainingplanLayout]}
      >
        <View
          style={[styles.trainingplanBackground, styles.trainingplanLayout]}
        />
        <View style={[styles.trainingcontent, styles.trainingcontentPosition1]}>
          <Text style={[styles.text, styles.textTypo]}>안륜근 트레이닝</Text>
          <View
            style={[
              styles.trainingcontentButton,
              styles.trainingplanHeaderPosition,
            ]}
          >
            <View
              style={[
                styles.trainingcontentButtonChild,
                styles.trainingcontentPosition,
              ]}
            />
            <Text style={[styles.text1, styles.text1Typo]}>시작하기</Text>
          </View>
          <Image
            style={[styles.icEyeIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ic-eye.png")}
          />
        </View>
        <View
          style={[styles.trainingcontent1, styles.trainingcontentPosition1]}
        >
          <Text style={[styles.text, styles.textTypo]}>
            상승비익거근 트레이닝
          </Text>
          <View
            style={[
              styles.trainingcontentButton,
              styles.trainingplanHeaderPosition,
            ]}
          >
            <View
              style={[
                styles.trainingcontentButtonChild,
                styles.trainingcontentPosition,
              ]}
            />
            <Text style={[styles.text1, styles.text1Typo]}>시작하기</Text>
          </View>
          <Image
            style={[styles.icTuskIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ic-tusk-1.png")}
          />
        </View>
        <View
          style={[styles.trainingcontent2, styles.trainingcontentPosition1]}
        >
          <Text style={[styles.text, styles.textTypo]}>구륜근 트레이닝</Text>
          <Image
            style={[styles.icTuskIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ic-lips-1.png")}
          />
          <View
            style={[
              styles.trainingcontentButton,
              styles.trainingplanHeaderPosition,
            ]}
          >
            <View
              style={[
                styles.trainingcontentButtonInner,
                styles.trainingcontentPosition,
              ]}
            />
            <Image
              style={styles.icCheckWhite1Icon}
              resizeMode="cover"
              source={require("../assets/ic-check-white-1.png")}
            />
          </View>
        </View>
        <View
          style={[styles.trainingplanHeader, styles.trainingplanHeaderPosition]}
        >
          <Text style={[styles.textDate, styles.textTypo]}>DAY 1</Text>
        </View>
      </View>
      <View style={[styles.messageCoach1, styles.messageLayout]}>
        <View style={[styles.messageBackground2, styles.messageLayout]} />
        <Text style={[styles.messageText, styles.messageTextTypo]}>
          저와 함께 시즌 트레이닝을 시작해볼까요?
        </Text>
      </View>
      <Image
        style={styles.icReloadIcon}
        resizeMode="cover"
        source={require("../assets/ic-reload.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  foregroundPosition: {
    top: heightPercentage(700),
    position: "absolute",
  },
  backgroundPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Regular,
    
    position: "absolute",
  },
  messageLayout1: {
    height: heightPercentage(35),
    position: "absolute",
  },
  messageShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1),
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
  },
  messageTextTypo: {
    color: Color.navy,
    lineHeight: heightPercentage(22),
    letterSpacing: -0.6,
    fontSize: FontSize.font2_size,
    top: heightPercentage(12),
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Regular,
    
    position: "absolute",
  },
  trainingplanLayout: {
    height: heightPercentage(206),
    width: heightPercentage(327),
    position: "absolute",
  },
  trainingcontentPosition1: {
    left: heightPercentage(18),
    right: heightPercentage(22),
    height: heightPercentage(27),
    position: "absolute",
  },
  textTypo: {
    
    color: Color.navy,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Regular,
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    position: "absolute",
  },
  trainingplanHeaderPosition: {
    right: heightPercentage(0),
    top: heightPercentage(0),
    position: "absolute",
  },
  trainingcontentPosition: {
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconPosition: {
    width: heightPercentage(26),
    left: heightPercentage(0),
    position: "absolute",
  },
  messageLayout: {
    width: heightPercentage(247),
    height: heightPercentage(35),
    position: "absolute",
  },
  backgroundIcon: {
    right: heightPercentage(-164),
    width: "100%",
    height: heightPercentage(700),
    left: heightPercentage(0),
    top: heightPercentage(0),
    position: "absolute",
    overflow: "hidden",
  },
  foreground: {
    marginLeft: heightPercentage(-187.5),
    width: heightPercentage(375),
    height: heightPercentage(125),
    backgroundColor: "transparent",
    left: "50%",
  },
  icSlideindicatorIcon: {
    marginLeft: heightPercentage(-13.5),
    top: heightPercentage(771),
    width: heightPercentage(28),
    height: heightPercentage(20),
    left: "50%",
    position: "absolute",
  },
  inputrectBackground: {
    backgroundColor: "#f2f2f2",
    borderRadius: Border.br_base,
  },
  inputrectTextholder: {
    top: heightPercentage(11),
    left: heightPercentage(22),
    color: "#979797",
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.Pretendard_Regular,
    
  },
  inputrectFrame: {
    height: heightPercentage(48),
    left: heightPercentage(24),
    right: heightPercentage(24),
  },
  messageBackground: {
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_xs,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1),
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    left: heightPercentage(0),
    top: heightPercentage(0),
    height: heightPercentage(35),
    position: "absolute",
    width: heightPercentage(117),
  },
  messageText: {
    left: heightPercentage(16),
  },
  messageCoach: {
    top: heightPercentage(641),
    width: heightPercentage(117),
    height: heightPercentage(35),
    left: heightPercentage(24),
  },
  messageBackground1: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: Border.br_xs,
    backgroundColor: Color.pointY,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  messagetext: {
    right: heightPercentage(16),
  },
  messageMe: {
    top: heightPercentage(590),
    width: heightPercentage(126),
    right: heightPercentage(24),
  },
  trainingplanBackground: {
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    backgroundColor: Color.white,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1),
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    left: heightPercentage(0),
    top: heightPercentage(0),
  },
  text: {
    left: heightPercentage(42),
    top: heightPercentage(0),
  },
  trainingcontentButtonChild: {
    backgroundColor: Color.goldenrod_100,
  },
  text1: {
    marginTop: heightPercentage(-4.5),
    marginLeft: heightPercentage(-21),
    top: "50%",
    fontSize: FontSize.font3_size,
    letterSpacing: -0.2,
    lineHeight: heightPercentage(18),
    color: Color.orange,
    left: "50%",
  },
  trainingcontentButton: {
    width: heightPercentage(78),
    height: heightPercentage(27),
  },
  icEyeIcon: {
    top: heightPercentage(5),
    height: heightPercentage(14),
  },
  trainingcontent: {
    top: heightPercentage(155),
    height: heightPercentage(27),
  },
  icTuskIcon: {
    height: heightPercentage(26),
    top: heightPercentage(0),
  },
  trainingcontent1: {
    top: heightPercentage(110),
    height: heightPercentage(27),
  },
  trainingcontentButtonInner: {
    backgroundColor: Color.pointY,
  },
  icCheckWhite1Icon: {
    left: heightPercentage(25),
    width: heightPercentage(27),
    height: heightPercentage(27),
    top: heightPercentage(0),
    position: "absolute",
  },
  trainingcontent2: {
    top: heightPercentage(65),
    height: heightPercentage(27),
  },
  textDate: {
    top: heightPercentage(10),
    left: heightPercentage(24),
  },
  trainingplanHeader: {
    backgroundColor: Color.extraLightGrey,
    height: heightPercentage(45),
    left: heightPercentage(0),
    overflow: "hidden",
  },
  messageCoachTrainingplan: {
    top: heightPercentage(368),
    borderRadius: Border.br_base,
    left: heightPercentage(24),
    overflow: "hidden",
  },
  messageBackground2: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1),
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_xs,
    left: heightPercentage(0),
    top: heightPercentage(0),
  },
  messageCoach1: {
    top: heightPercentage(317),
    opacity: 0.5,
    left: heightPercentage(24),
  },
  icReloadIcon: {
    top: heightPercentage(24),
    right: heightPercentage(20),
    width: heightPercentage(44),
    height: heightPercentage(44),
    position: "absolute",
  },
  view: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: heightPercentage(812),
    overflow: "hidden",
    width: "100%",
  },
});

export default VirtualCommunicationView;
