import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image,ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";
import { heightPercentage } from "../ResponsiveSize";
import Button1 from "../component/Button1";
const TrainingDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.view]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style = {styles.scrollcontent}>
        <View style={styles.button}>
        <Button1 text = {"확인"} route={"CommunicationMain"}></Button1>
      </View>
        <View style={styles.dial}>
          <View style={[styles.dialBackground, styles.backgroundBorder]} />
          <View style={styles.hoursetPosition}>
            <Text style={[styles.hour11, styles.textTypo3]}>11</Text>
            <Text style={styles.hourTypo}>12</Text>
            <Text style={[styles.hour13, styles.hourTypo]}>13</Text>
          </View>
          <View style={styles.minuteset}>
            <Text style={[styles.hour11, styles.textTypo3]}>02</Text>
            <Text style={styles.hourTypo}>03</Text>
            <Text style={[styles.hour13, styles.hourTypo]}>04</Text>
          </View>
          <Text style={[styles.text, styles.textTypo3]}>:</Text>
          <LinearGradient
            style={[styles.forgroundBottom, styles.foregroundTopLayout]}
            locations={[0, 1]}
            colors={["#fcfcfc", "rgba(252, 252, 252, 0)"]}
            useAngle={true}
            angle={180}
          />
          <LinearGradient
            style={[styles.foregroundTop, styles.foregroundTopPosition]}
            locations={[0, 1]}
            colors={["#fcfcfc", "rgba(252, 252, 252, 0)"]}
            useAngle={true}
            angle={180}
          />
        </View>
        <View style={styles.switch}>
          <View
            style={[styles.switchBackground, styles.switchBackgroundPosition]}
          />
          <View
            style={styles.switchCircleIcon}
          />
        </View>
        <Text style={[styles.textAlarmsubtitle, styles.textTypo2]}>
          웰리비가 시간에 맞춰 푸시알림을 드릴게요
        </Text>
        <Text
          style={[styles.textAlarmtitle, styles.textTypo1]}
        >{`알림 설정 `}</Text>
        <View style={[styles.sectionline, styles.foregroundPosition]} />
        <View style={[styles.totalworktimeFrame, styles.buttonPosition]}>
          <View
            style={[styles.totalworktimeBackground, styles.backgroundPosition]}
          />
          <Text style={[styles.totalworktimeText, styles.textTypo4]}>
            총 운동시간 8분
          </Text>
        </View>
        <Image
          style={styles.dashlineIcon}
          resizeMode="cover"
          source={require("../assets/dashline.png")}
        />
        <View style={[styles.tainingcontentset, styles.buttonPosition]}>
          <View style={[styles.trainingcontent, styles.trainingcontentFlexBox]}>
            <View style={styles.trainingcontentFrame}>
              <View
                style={[
                  styles.trainingcontentBackground,
                  styles.foregroundTopPosition,
                ]}
              />
              <Text style={[styles.trainingconteneText, styles.textTypo4]}>
                구륜근 트레이닝
              </Text>
            </View>
            <View
              style={[styles.indexcircleFrame, styles.indexcircleFrameLayout]}
            >
              <Image
                style={[styles.indexcircleFrameChild, styles.image10IconLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-169.png")}
              />
              <Text style={styles.textTypo}>1</Text>
            </View>
          </View>
          <View
            style={[styles.trainingcontent1, styles.trainingcontentFlexBox]}
          >
            <View style={styles.trainingcontentFrame}>
              <View
                style={[
                  styles.trainingcontentBackground,
                  styles.foregroundTopPosition,
                ]}
              />
              <Text style={[styles.trainingconteneText, styles.textTypo4]}>
                상승비익거근 트레이닝
              </Text>
            </View>
            <View
              style={[styles.indexcircleFrame, styles.indexcircleFrameLayout]}
            >
              <Image
                style={[styles.indexcircleFrameChild, styles.image10IconLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-169.png")}
              />
              <Text style={styles.textTypo}>2</Text>
            </View>
          </View>
          <View
            style={[styles.trainingcontent1, styles.trainingcontentFlexBox]}
          >
            <View style={styles.trainingcontentFrame}>
              <View
                style={[
                  styles.trainingcontentBackground,
                  styles.foregroundTopPosition,
                ]}
              />
              <Text style={[styles.trainingconteneText, styles.textTypo4]}>
                안륜근 트레이닝
              </Text>
            </View>
            <View
              style={[styles.indexcircleFrame2, styles.indexcircleFrameLayout]}
            >
              <Image
                style={[styles.indexcircleFrameChild, styles.image10IconLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-171.png")}
              />
              <Text style={styles.textTypo}>3</Text>
            </View>
          </View>
        </View>
        <Text
          style={[styles.textPlansubtitle, styles.textTypo2]}
        >{`4주 동안 진행되는 플랜으로
꾸준히 연습해주세요`}</Text>
        <Text style={[styles.textPlantitle, styles.textTypo1]}>
          <Text style={styles.text4}>{`1차 시즌 ( `}</Text>
          <Text style={styles.text5}>{`3.1~4.1 `}</Text>
          <Text style={styles.text4}>{`)
트레이닝 플랜이에요`}</Text>
        </Text>
        <Image
          style={[styles.image10Icon, styles.image10IconLayout]}
          resizeMode="cover"
          source={require("../assets/image-10.png")}
        />
        <LinearGradient
          style={[styles.foreground, styles.foregroundPosition]}
          locations={[0, 0.52, 1]}
          colors={[
            "rgba(245, 245, 245, 0)",
            "rgba(250, 250, 250, 0.5)",
            "#fafafa",
          ]}
          useAngle={true}
          angle={180}
        />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  hoursetPosition: {
    left: heightPercentage(0),
    top: heightPercentage(0),
    position: "absolute",
  },
  buttonPosition: {
    left: heightPercentage(24),
    position: "absolute",
  },
  backgroundPosition: {
    borderRadius: Border.br_base,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textTypo4: {
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Bold,
    fontSize: FontSize.font1_size,
    position: "absolute",
  },
  backgroundBorder: {
    borderWidth: heightPercentage(1),
    borderColor: "#f3f3f3",
    borderStyle: "solid",
    borderRadius: Border.br_base,
  },
  textTypo3: {
    lineHeight: heightPercentage(34),
    fontSize: FontSize.size_21xl,
    color: Color.navy,
    textAlign: "left",
    fontFamily: FontFamily.font,
  },
  hourTypo: {
    marginTop: heightPercentage(36),
    color: Color.navy,
    lineHeight: heightPercentage(34),
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    fontFamily: FontFamily.font,
  },
  foregroundTopLayout: {
    height: heightPercentage(38),
    width: heightPercentage(290),
    backgroundColor: "transparent",
    left: "50%",
  },
  foregroundTopPosition: {
    top: heightPercentage(-1),
    position: "absolute",
  },
  switchBackgroundPosition: {
    left: heightPercentage(0),
    top: heightPercentage(0),
    height: heightPercentage(28),
    width: heightPercentage(56),
    position: "absolute"
  },
  textTypo2: {
    color: Color.grey,
    lineHeight: heightPercentage(22),
    letterSpacing: -0.6,
    fontSize: FontSize.font_size,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Medium,
    left: heightPercentage(24),
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.font1_size,
    letterSpacing: -0.6,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Bold,
    left: heightPercentage(24),
    position: "absolute",
  },
  foregroundPosition: {
    right: heightPercentage(0),
    left: heightPercentage(0),
  },
  trainingcontentFlexBox: {
    alignSelf: "stretch",
    height: heightPercentage(55),
  },
  indexcircleFrameLayout: {
    width: heightPercentage(28),
    height: heightPercentage(28),
    left: heightPercentage(0),
    position: "absolute",
  },
  image10IconLayout: {
    width:"100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    top: "50%",
    left: "50%",
    width: "auto",
    height: "auto",
    marginLeft: heightPercentage(-4.5),
    marginTop : heightPercentage(-10),
    fontSize: FontSize.font_size,
    color: Color.navy,
    textAlign: "center",
    fontFamily: FontFamily.Pretendard_Medium,
    position: "absolute",
  },
  buttonBackground: {
    backgroundColor: Color.navy,
  },
  buttonText: {
    marginLeft: heightPercentage(-14),
    top: heightPercentage(23),
    color: Color.white,
    left: "50%",
  },
  button: {
    top: heightPercentage(1212),
    borderRadius: Border.br_base,
    overflow: "hidden",
    height: heightPercentage(58),
    width: heightPercentage(360),
    left: "50%",
    marginLeft: heightPercentage(-180), 
    position: "absolute",
  },
  dialBackground: {
    height: "129.89%",
    width: "146.88%",
    top: "-14.94%",
    right: "-23.21%",
    bottom: "-14.94%",
    left: "-23.66%",
    position: "absolute",
    backgroundColor: Color.gray_200,
    borderWidth: heightPercentage(1),
    borderColor: "#f3f3f3",
    borderStyle: "solid",
  },
  hour11: {
    opacity: 0.1,
    color: Color.navy,
  },
  hour13: {
    opacity: 0.1,
  },
  minuteset: {
    left: heightPercentage(171),
    top: heightPercentage(0),
    position: "absolute",
  },
  text: {
    marginLeft: heightPercentage(-7),
    top: "40.23%",
    color: Color.navy,
    left: "50%",
    position: "absolute",
  },
  forgroundBottom: {
    marginLeft: heightPercentage(144),
    top: heightPercentage(175),
    transform: [
      {
        rotate: "180deg",
      },
    ],
    backgroundColor: "transparent",
    position: "absolute",
  },
  foregroundTop: {
    marginLeft: heightPercentage(-146),
    backgroundColor: "transparent",
    height: heightPercentage(38),
    width: heightPercentage(290),
    left: "50%",
  },
  dial: {
    marginLeft: heightPercentage(-111.5),
    top: heightPercentage(973),
    width: heightPercentage(224),
    height: heightPercentage(174),
    left: "50%",
    position: "absolute",
  },
  switchBackground: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.goldenrod_200,
    opacity: 0.2
  },
  switchCircleIcon: {
    top: heightPercentage(3),
    left: heightPercentage(31),
    width: heightPercentage(22),
    height: heightPercentage(22),
    borderRadius: heightPercentage(22),
    backgroundColor: Color.goldenrod_200,
    position: "absolute",
  },
  switch: {
    top: heightPercentage(863),
    width: heightPercentage(56),
    height: heightPercentage(28),
    right: heightPercentage(24),
    position: "absolute",
  },
  textAlarmsubtitle: {
    top: heightPercentage(906),
  },
  textAlarmtitle: {
    top: heightPercentage(872),
    color: Color.navy,
  },
  sectionline: {
    height: "0.37%",
    top: "103.33%",
    bottom: "-3.7%",
    backgroundColor: Color.extraLightGrey,
    position: "absolute",
  },
  totalworktimeBackground: {
    backgroundColor: Color.goldenrod_100,
  },
  totalworktimeText: {
    marginTop: heightPercentage(-5.5),
    top: "50%",
    left: heightPercentage(22),
    color: Color.orange,
  },
  totalworktimeFrame: {
    top: heightPercentage(750),
    height: heightPercentage(51),
    right: heightPercentage(24),
    left: heightPercentage(24),
  },
  dashlineIcon: {
    top: heightPercentage(530),
    left: heightPercentage(37),
    width: heightPercentage(3),
    height: heightPercentage(147),
    position: "absolute",
  },
  trainingcontentBackground: {
    width: "100.75%",
    right: "-0.37%",
    left: "-0.37%",
    backgroundColor: Color.white,
    borderWidth: heightPercentage(1),
    borderColor: "#f3f3f3",
    borderStyle: "solid",
    borderRadius: Border.br_base,
    height: heightPercentage(57),
  },
  trainingconteneText: {
    top: heightPercentage(16.23),
    left: heightPercentage(24.24),
    color: Color.navy,
  },
  trainingcontentFrame: {
    width: "85.71%",
    left: "14.29%",
    height: heightPercentage(55),
    right: "0%",
    top: heightPercentage(0),
    position: "absolute",
  },
  indexcircleFrameChild: {
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  text1: {
    left: "37.5%",
  },
  indexcircleFrame: {
    top: heightPercentage(14),
  },
  trainingcontent: {
    height: heightPercentage(55),
  },
  text2: {
    left: "35.71%",
  },
  trainingcontent1: {
    marginTop: heightPercentage(24),
    height: heightPercentage(55),
  },
  indexcircleFrame2: {
    top: heightPercentage(15),
  },
  tainingcontentset: {
    top: heightPercentage(503),
    right: heightPercentage(38),
    alignItems: "center",
  },
  textPlansubtitle: {
    top: heightPercentage(423),
  },
  text4: {
    color: Color.navy,
  },
  text5: {
    color: Color.pointY,
  },
  textPlantitle: {
    top: heightPercentage(359),
  },
  image10Icon: {
    height: heightPercentage(345),
    right: heightPercentage(0),
    left: heightPercentage(0),
    top: heightPercentage(-24),
  },
  foreground: {
    height: heightPercentage(216.27),
    top: heightPercentage(105.13),
    backgroundColor: "transparent",
    position: "absolute",
  },
  scrollrect: {
    width: heightPercentage(375),
    overflow: "hidden",
    height: heightPercentage(812),
  },
  view: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.gray_200,
    height: heightPercentage(812),
  },
  scrollcontent:{
    width: "100%",
    height: heightPercentage(1293),
  }
});

export default TrainingDetail;
