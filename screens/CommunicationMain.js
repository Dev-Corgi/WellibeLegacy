import * as React from "react";
import { Image, StyleSheet, View, Text,TouchableOpacity,ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { heightPercentage } from "../ResponsiveSize";
import Menubar from "../component/Menubar";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
  } from 'react-native-reanimated';
const CommunicationMain = () => {
    const translateY1 = useSharedValue(0);
    
    const AnimatedStyle1 = useAnimatedStyle(() => {
      return {
        transform: [
          { translateY: translateY1.value },
        ],
      };
    });

    const translateY2 = useSharedValue(0);
    
    const AnimatedStyle2 = useAnimatedStyle(() => {
      return {
        transform: [
          { translateY: translateY2.value },
        ],
      };
    });

  const handlePress = () => {
    translateY1.value = withTiming(translateY1.value - heightPercentage(1851), {
      duration: 1500,
      easing: Easing.bezier(0.645, 0.045, 0.355, 1.000)
    });

    translateY2.value = withTiming(translateY1.value + heightPercentage(500), {
        duration: 1500,
        easing: Easing.bezier(0.645, 0.045, 0.355, 1.000)
      });
  };
  

    const navigation = useNavigation();
  return (
    <View style = {styles.view}>
    <Animated.View style={[styles.communicationmain,AnimatedStyle1]}>
      <View style = {styles.mainorigin}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.main}>
      <Image
    style={styles.backgroundIcon}
    resizeMode="cover"
    source={require("../assets/background.png")}
  />
        <View style={styles.index}>
          <Image
            style={styles.indexLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-34.png")}
          />
          <Image
            style={[styles.indexItem, styles.indexLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-35.png")}
          />
          <Image
            style={[styles.indexItem, styles.indexLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-35.png")}
          />
          <Image
            style={[styles.indexItem, styles.indexLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-35.png")}
          />
        </View>
        <View style={[styles.background, styles.backgroundBg]} />
        <View style={styles.packageset2}>
          <Image
            style={[styles.packageset2Child, styles.arrowIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector-44.png")}
          />
          <Text style={[styles.text, styles.textTypo5]}>오늘의 한줄</Text>
          <View style={[styles.package, styles.packageLayout1]}>
            <View style={[styles.packageChild, styles.packageShadowBox]} />
            <Text style={[styles.text1, styles.textLayout1]}>
              밝은 미소는 눈부신 하루를 만든다.
            </Text>
            <Text style={[styles.text2, styles.textTypo3]}>#봄처럼</Text>
            <Text style={[styles.text3, styles.textTypo3]}>#화사한</Text>
            <Text style={[styles.text4, styles.textTypo3]}>#미소</Text>
          </View>
          <View style={[styles.package1, styles.packageLayout1]}>
            <View style={[styles.packageItem, styles.packageShadowBox]} />
            <Text style={[styles.text5, styles.textLayout1]}>
              각양각형 얼굴형 이야기
            </Text>
            <Text style={[styles.text6, styles.textTypo3]}>#얼굴형</Text>
          </View>
        </View>
        <View style={styles.packageset}>
          <Text style={[styles.text7, styles.textTypo5]}>
            면접 대비 필수 트레이닝
          </Text>
          <View style={[styles.packageset3, styles.packagesetFlexBox]}>
            <View style={styles.package3Layout}>
              <View style={styles.wrapper}>
                <Text style={[styles.text8, styles.textLayout1]}>
                  잡았다! 볼살!
                </Text>
              </View>
              <Text style={[styles.text9, styles.nameTypo]}>표정 근육</Text>
              <Text style={[styles.text10, styles.textPosition]}>입</Text>
              <Text style={[styles.text11, styles.nameTypo]}>
                <Text style={styles.text12}>3</Text>
                <Text style={styles.text13}>분 소요</Text>
              </Text>
              <Image
                style={[styles.frameChild, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/line.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/line.png")}
              />
              <Image
                style={[styles.vectorIcon, styles.iconPosition3]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
            <View style={styles.groupContainer}>
              <View style={styles.container}>
                <Text style={[styles.text8, styles.textLayout1]}>
                  입꼬리 승천까지 2분
                </Text>
              </View>
              <Text style={[styles.text15, styles.textTypo1]}>표정 근육</Text>
              <Text style={[styles.text16, styles.textTypo1]}>입</Text>
              <Text style={[styles.text17, styles.textTypo1]}>
                <Text style={styles.text12}>3</Text>
                <Text style={styles.text13}>분 소요</Text>
              </Text>
              <Image
                style={[styles.frameInner, styles.framePosition]}
                resizeMode="cover"
                source={require("../assets/vector-279.png")}
              />
              <Image
                style={[styles.frameChild1, styles.framePosition]}
                resizeMode="cover"
                source={require("../assets/vector-279.png")}
              />
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../assets/vector3.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.arrowIcon, styles.arrowIconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow3.png")}
          />
        </View>
        <View style={styles.packageset1}>
          <Text style={[styles.text20, styles.textTypo]}>추천 트레이닝</Text>
          <View style={[styles.packageset21, styles.packagesetFlexBox]}>
            <View style={styles.package3Layout}>
              <View style={styles.wrapper}>
                <Text style={[styles.text8, styles.textLayout1]}>
                  잡았다! 볼살!
                </Text>
              </View>
              <Text style={[styles.text9, styles.nameTypo]}>표정 근육</Text>
              <Text style={[styles.text10, styles.textPosition]}>입</Text>
              <Text style={[styles.text11, styles.nameTypo]}>
                <Text style={styles.text12}>3</Text>
                <Text style={styles.text13}>분 소요</Text>
              </Text>
              <Image
                style={[styles.frameChild, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/line.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/line.png")}
              />
              <Image
                style={[styles.maskGroupIcon, styles.iconPosition2]}
                resizeMode="cover"
                source={require("../assets/mask-group2.png")}
              />
              <Image
                style={[styles.vectorIcon, styles.iconPosition3]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
            <View style={styles.groupContainer}>
              <View style={styles.container}>
                <Text style={[styles.text8, styles.textLayout1]}>
                  입꼬리 승천까지 2분
                </Text>
              </View>
              <Text style={[styles.text15, styles.textTypo1]}>표정 근육</Text>
              <Text style={[styles.text16, styles.textTypo1]}>입</Text>
              <Text style={[styles.text17, styles.textTypo1]}>
                <Text style={styles.text12}>3</Text>
                <Text style={styles.text13}>분 소요</Text>
              </Text>
              <Image
                style={[styles.frameInner, styles.framePosition]}
                resizeMode="cover"
                source={require("../assets/vector-279.png")}
              />
              <Image
                style={[styles.frameChild1, styles.framePosition]}
                resizeMode="cover"
                source={require("../assets/vector-279.png")}
              />
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../assets/vector3.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.arrowIcon, styles.arrowIconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow3.png")}
          />
        </View>
        <View style={styles.packageset4}>
          <View style={[styles.packageset5, styles.packagesetFlexBox]}>
            <View style={styles.package3Layout}>
              <Image
                style={[styles.maskGroupIcon1, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/mask-group.png")}
              />
              <View style={[styles.wrapper1, styles.wrapperPosition]}>
                <Text style={[styles.text8, styles.textLayout1]}>
                  면접에서도 당당한 미소
                </Text>
              </View>
              <Text style={[styles.text9, styles.nameTypo]}>표정 근육</Text>
              <Text style={[styles.text10, styles.textPosition]}>입</Text>
              <Text style={[styles.text11, styles.nameTypo]}>
                <Text style={styles.text12}>3</Text>
                <Text style={styles.text13}>분 소요</Text>
              </Text>
              <Image
                style={[styles.frameChild, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/vector-270.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/vector-270.png")}
              />
              <Image
                style={[styles.vectorIcon4, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
              <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <Text style={[styles.ai, styles.aiTypo]}>AI</Text>
              </View>
            </View>
            <View style={[styles.package3, styles.package3Layout]}>
              <View style={[styles.wrapper2, styles.wrapperPosition]}>
                <Text style={[styles.text8, styles.textLayout1]}>
                  자기 전 안면 마사지
                </Text>
              </View>
              <Text style={[styles.text9, styles.nameTypo]}>표정 근육</Text>
              <Text style={[styles.text10, styles.textPosition]}>입</Text>
              <Text style={[styles.text11, styles.nameTypo]}>
                <Text style={styles.text12}>3</Text>
                <Text style={styles.text13}>분 소요</Text>
              </Text>
              <Image
                style={[styles.frameChild, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/vector-270.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/vector-270.png")}
              />
              <Image
                style={[styles.maskGroupIcon2, styles.iconPosition3]}
                resizeMode="cover"
                source={require("../assets/mask-group1.png")}
              />
              <Image
                style={[styles.vectorIcon5, styles.iconPosition2]}
                resizeMode="cover"
                source={require("../assets/vector1.png")}
              />
            </View>
          </View>
          <Text style={[styles.text7, styles.textTypo5]}>
            최근 했던 트레이닝
          </Text>
          <Image
            style={[styles.arrowIcon, styles.arrowIconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow1.png")}
          />
        </View>
        <View style={[styles.facepartmenu, styles.packagesetFlexBox]}>
          <View style={styles.face}>
            <Text style={[styles.name, styles.nameTypo]}>윤곽</Text>
            <Image
              style={styles.picIcon}
              resizeMode="cover"
              source={require("../assets/pic.png")}
            />
          </View>
          <View style={[styles.lip, styles.lipSpaceBlock]}>
            <Text style={[styles.name1, styles.name1Position]}>입술</Text>
            <Image
              style={styles.picIcon1}
              resizeMode="cover"
              source={require("../assets/pic1.png")}
            />
          </View>
          <View style={[styles.cheak, styles.lipSpaceBlock]}>
            <Text style={[styles.name2, styles.nameTypo]}>볼</Text>
            <Image
              style={styles.picIcon1}
              resizeMode="cover"
              source={require("../assets/pic2.png")}
            />
          </View>
          <View style={[styles.cheak, styles.lipSpaceBlock]}>
            <Text style={[styles.name2, styles.nameTypo]}>턱</Text>
            <Image
              style={[styles.picIcon3, styles.picIconPosition]}
              resizeMode="cover"
              source={require("../assets/pic3.png")}
            />
          </View>
          <View style={[styles.eye, styles.lipSpaceBlock]}>
            <Text style={[styles.name4, styles.nameTypo]}>눈</Text>
            <Image
              style={[styles.picIcon4, styles.picIconPosition]}
              resizeMode="cover"
              source={require("../assets/pic4.png")}
            />
          </View>
        </View>
        <View style={[styles.event, styles.eventPosition]}>
          <Image
            style={[styles.vectorIcon6, styles.eventPosition]}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.mbti, styles.mbtiPosition]}>
            <Text style={styles.text46}>{`알록달록 나만의
`}</Text>
            <Text style={styles.mbti1}>표정 MBTI</Text>
          </Text>
          <Text
            style={[styles.mbti2, styles.mbtiPosition1]}
          >{`나만의 표정 MBTI를 검사하고
맞춤형 트레이닝을 찾아보자!`}</Text>
        </View>
        <Image
          style={[styles.buttonAlarmIcon, styles.buttonIconLayout]}
          resizeMode="cover"
          source={require("../assets/button-alarm.png")}
        />
        <Image
          style={[styles.buttonBookmarkIcon, styles.buttonIconLayout]}
          resizeMode="cover"
          source={require("../assets/button-bookmark.png")}
        />
        <View style={styles.useprofile}>
          <Text style={[styles.name5, styles.name5Position]}>웰리비</Text>
          <Text style={[styles.status, styles.name5Position]}>
            <Text style={styles.text46}>트레이닝</Text>
            <Text style={styles.text48}>{` `}</Text>
            <Text style={styles.text12}>2일 차</Text>
          </Text>
          <Image
            style={styles.profilepicIcon}
            resizeMode="cover"
            source={require("../assets/profilepic.png")}
          />
        </View>
      </View>
      </ScrollView>
      <Menubar></Menubar>
      </View>
      <View style={[styles.communication, styles.mainPosition]}>
        <Animated.View style={[styles.backgroundIcon1,AnimatedStyle2]}>
        <Image
        style = {styles.animateImage}
          resizeMode="cover"
          source={require("../assets/background1.png")}
        />
        </Animated.View>
        <LinearGradient
          style={[styles.foreground, styles.foregroundBg]}
          locations={[0, 0.6]}
          colors={["rgba(252, 252, 252, 0)", "#fcfcfc"]}
        />
        <TouchableOpacity style={styles.icSlideindicatorIcon}
        onPress={() => handlePress()}>
        <Image
          resizeMode="cover"
          source={require("../assets/ic-slideindicator.png")}
        />
        </TouchableOpacity>
        <View style={styles.inputrectFrame}>
          <View style={[styles.inputrectBackground, styles.packagePosition]} />
          <Text style={[styles.inputrectTextholder, styles.textLayout1]}>
            안녕! 오늘 해야할 트레이닝을 알려줘!
          </Text>
        </View>
        <View style={[styles.messageCoach, styles.messageLayout1]}>
          <View style={[styles.messageBackground, styles.messageShadowBox]} />
          <Text style={[styles.messageText, styles.nameTypo]}>
            화이팅!! 🔥🔥🔥
          </Text>
        </View>
        <View style={[styles.messageMe, styles.messageLayout1]}>
          <View style={[styles.messageBackground1, styles.packageShadowBox]} />
          <Text style={[styles.messagetext, styles.nameTypo]}>
            네! 같이 달려봐요!
          </Text>
        </View>
        <View
          style={[styles.messageCoachTrainingplan, styles.trainingplanLayout]}
        >
          <View
            style={[styles.trainingplanBackground, styles.trainingplanLayout]}
          />
          <View style={[styles.trainingcontent, styles.trainingcontentLayout]}>
            <Text style={[styles.text50, styles.textLayout1]}>
              안륜근 트레이닝
            </Text>
            <View
              style={[
                styles.trainingcontentButton,
                styles.trainingcontentLayout,
              ]}
            >
              <View
                style={[
                  styles.trainingcontentButtonChild,
                  styles.trainingcontentPosition,
                ]}
              />
              <Text style={[styles.text51, styles.aiTypo]}>시작하기</Text>
            </View>
            <Image
              style={[styles.icEyeIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/ic-eye.png")}
            />
          </View>
          <View style={[styles.trainingcontent1, styles.trainingcontentLayout]}>
            <Text style={[styles.text50, styles.textLayout1]}>
              상승비익거근 트레이닝
            </Text>
            <View
              style={[
                styles.trainingcontentButton,
                styles.trainingcontentLayout,
              ]}
            >
              <View
                style={[
                  styles.trainingcontentButtonChild,
                  styles.trainingcontentPosition,
                ]}
              />
              <Text style={[styles.text51, styles.aiTypo]}>시작하기</Text>
            </View>
            <Image
              style={[styles.icTuskIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/ic-tusk-1.png")}
            />
          </View>
          <View style={[styles.trainingcontent2, styles.trainingcontentLayout]}>
            <Text style={[styles.text50, styles.textLayout1]}>
              구륜근 트레이닝
            </Text>
            <Image
              style={[styles.icTuskIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/ic-lips-1.png")}
            />
            <View
              style={[
                styles.trainingcontentButton,
                styles.trainingcontentLayout,
              ]}
            >
              <View
                style={[
                  styles.trainingcontentButtonInner,
                  styles.trainingcontentPosition,
                ]}
              />
              <Image
                style={[styles.icCheckWhite1Icon, styles.trainingcontentLayout]}
                resizeMode="cover"
                source={require("../assets/ic-check-white-1.png")}
              />
            </View>
          </View>
          <View style={[styles.trainingplanHeader, styles.backgroundBg]}>
            <Text style={[styles.textDate, styles.textTypo]}>DAY 1</Text>
          </View>
        </View>
        <View style={[styles.messageCoach1, styles.messageLayout]}>
          <View style={[styles.messageBackground2, styles.messageLayout]} />
          <Text style={[styles.messageText, styles.nameTypo]}>
            저와 함께 시즌 트레이닝을 시작해볼까요?
          </Text>
        </View>
        <Image
          style={[styles.icReloadIcon, styles.mbtiPosition]}
          resizeMode="cover"
          source={require("../assets/ic-reload.png")}
        />
      </View>
      <LinearGradient
        style={[styles.midsection, styles.foregroundBg]}
        locations={[0, 1]}
        colors={["#fafafa", "#fdeacd"]}
        useAngle={true}
        angle={180}
      />
    </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainorigin:{
        top: heightPercentage(1851),
        width: "100%",
        height: heightPercentage(812),
        position: "absolute",
        overflow: "hidden",
    },
    view:{
        position: "absolute",
        width: "100%",
        height: heightPercentage(812),
    },
  indexLayout: {
    height: heightPercentage(6),
    width: heightPercentage(6),
  },
  backgroundBg: {
    backgroundColor: Color.extraLightGrey,
    position: "absolute",
  },
  arrowIconLayout: {
    width: heightPercentage(11),
    height: heightPercentage(16),
    right: heightPercentage(24),
    position: "absolute",
  },
  textTypo5: {
    fontFamily: FontFamily.font,
    textAlign: "left",
  },
  packageLayout1: {
    height: heightPercentage(247),
    width: heightPercentage(288),
    top: heightPercentage(46),
    position: "absolute",
  },
  packageShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1),
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
  },
  textLayout1: {
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
  },
  textTypo3: {
    letterSpacing: -0.2,
    fontSize: FontSize.font2_size,
    color: Color.navy,
    textAlign: "left",
    fontFamily: FontFamily.font,
    position: "absolute",
  },
  packagesetFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  nameTypo: {
    lineHeight: heightPercentage(22),
    fontSize: FontSize.font2_size,
    fontFamily: FontFamily.Pretendard_Medium,
    position: "absolute",
  },
  textPosition: {
    left: "36.36%",
    color: Color.grey,
  },
  frameLayout: {
    width: heightPercentage(1),
    top: heightPercentage(193),
    height: heightPercentage(14),
    position: "absolute",
  },
  iconPosition3: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  textTypo1: {
    top: "93.92%",
    
    lineHeight: heightPercentage(22),
    fontSize: FontSize.font_size,
    textAlign: "left",
    fontFamily: FontFamily.font,
    letterSpacing: -0.6,
    position: "absolute",
  },
  framePosition: {
    top: heightPercentage(192),
    height: heightPercentage(14),
    width: heightPercentage(1),
    position: "absolute",
  },
  textTypo: {
    top: heightPercentage(10),
    color: Color.navy,
    textAlign: "left",
    fontFamily: FontFamily.font,
    
    position: "absolute",
  },
  iconPosition2: {
    bottom: "25.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  iconPosition1: {
    bottom: "25.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  wrapperPosition: {
    bottom: "12.81%",
    top: "81.86%",
    left: "1.14%",
    height: "5.33%",
    position: "absolute",
  },
  groupChildLayout: {
    height: heightPercentage(31),
    width: heightPercentage(31),
    position: "absolute",
  },
  aiTypo: {
    lineHeight: heightPercentage(18),
    
    letterSpacing: -0.2,
    fontSize: FontSize.font2_size,
    textAlign: "left",
    fontFamily: FontFamily.font,
    position: "absolute",
  },
  package3Layout: {
    height: heightPercentage(207),
    width: heightPercentage(176),
  },
  lipSpaceBlock: {
    marginLeft: heightPercentage(36),
    flex: 1,
  },
  name1Position: {
    top: heightPercentage(38),
    lineHeight: heightPercentage(22),
    fontSize: FontSize.font_size,
  },
  picIconPosition: {
    width: heightPercentage(33),
    marginLeft: heightPercentage(-16.5),
    top: heightPercentage(0),
    left: "50%",
    position: "absolute",
  },
  eventPosition: {
    height: heightPercentage(187),
    marginLeft: heightPercentage(-163.5),
    width: heightPercentage(327),
    left: "50%",
    position: "absolute",
  },
  mbtiPosition: {
    top: heightPercentage(24),
    position: "absolute",
  },
  mbtiPosition1: {
    marginLeft: heightPercentage(-139.5),
    textAlign: "left",
    letterSpacing: -0.6,
    left: "50%",
  },
  buttonIconLayout: {
    height: heightPercentage(41),
    width: heightPercentage(41),
    top: heightPercentage(57),
    position: "absolute",
  },
  name5Position: {
    left: heightPercentage(70),
    textAlign: "left",
    fontFamily: FontFamily.font,
    letterSpacing: -0.6,
    position: "absolute",
  },
  foregroundBg: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  packagePosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  messageLayout1: {
    height: heightPercentage(35),
    position: "absolute",
  },
  messageShadowBox: {
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1),
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    top: heightPercentage(0),
    left: heightPercentage(0),
  },
  trainingplanLayout: {
    width: heightPercentage(327),
    height: heightPercentage(206),
    position: "absolute",
  },
  trainingcontentLayout: {
    height: heightPercentage(27),
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
    height: heightPercentage(258),
    width: "100%",
  },
  indexItem: {
    marginLeft: heightPercentage(16),
  },
  index: {
    marginLeft: heightPercentage(-35.5),
    top: heightPercentage(336),
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  background: {
    top: heightPercentage(1349),
    left: heightPercentage(-2),
    height: heightPercentage(351),
    width: heightPercentage(375),
  },
  packageset2Child: {
    top: heightPercentage(-1),
    height: heightPercentage(16),
  },
  text: {
    left: heightPercentage(3),
    color: Color.black,
    textAlign: "left",
    
    lineHeight: heightPercentage(30),
    fontSize: FontSize.font3_size,
    letterSpacing: -0.6,
    top: heightPercentage(0),
    position: "absolute",
  },
  packageChild: {
    backgroundColor: Color.white,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1),
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    borderRadius: Border.br_base,
    left: "0%",
    top: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  text1: {
    height: "6.67%",
    top: "82.31%",
    color: Color.navy,
    left: "9.38%",
    width: "74.31%",
    fontSize: FontSize.font1_size,
    textAlign: "left",
    fontFamily: FontFamily.font,
    
    position: "absolute",
  },
  text2: {
    top: "72.49%",
    height: "4.71%",
    letterSpacing: -0.2,
    fontSize: FontSize.font2_size,
    width: "13.54%",
    left: "9.38%",
  },
  text3: {
    left: "27.08%",
    top: "72.49%",
    height: "4.71%",
    letterSpacing: -0.2,
    fontSize: FontSize.font2_size,
    width: "13.54%",
  },
  text4: {
    width: "10.07%",
    left: "44.79%",
    top: "72.49%",
    height: "4.71%",
    letterSpacing: -0.2,
    fontSize: FontSize.font2_size,
  },
  package: {
    left: heightPercentage(0),
  },
  packageItem: {
    backgroundColor: Color.white,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1),
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    borderRadius: Border.br_base,
    left: "0%",
    top: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  text5: {
    top: heightPercentage(203),
    left: "8.33%",
    color: Color.navy,
    width: "74.31%",
    fontSize: FontSize.font1_size,
    textAlign: "left",
    fontFamily: FontFamily.font,
    
    position: "absolute",
    height: heightPercentage(16),
  },
  text6: {
    top: heightPercentage(179),
    width: heightPercentage(39),
    height: heightPercentage(12),
    left: heightPercentage(24),
  },
  package1: {
    left: heightPercentage(307),
  },
  packageset2: {
    top: heightPercentage(1379),
    right: heightPercentage(2),
    left: heightPercentage(17),
    height: heightPercentage(293),
    position: "absolute",
  },
  text7: {
    top: heightPercentage(15),
    color: Color.navy,
    textAlign: "left",
    
    lineHeight: heightPercentage(30),
    fontSize: FontSize.font3_size,
    letterSpacing: -0.6,
    left: heightPercentage(0),
    position: "absolute",
  },
  text8: {
    color: Color.navy,
    left: "0%",
    top: "0%",
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.font,
    
  },
  wrapper: {
    width: "47.16%",
    top: "82.32%",
    right: "51.7%",
    bottom: "12.35%",
    left: "1.14%",
    height: "5.33%",
    position: "absolute",
  },
  text9: {
    color: Color.grey,
    
    top: "93.95%",
    fontSize: FontSize.font_size,
    textAlign: "left",
    letterSpacing: -0.6,
    left: "1.14%",
  },
  text10: {
    
    lineHeight: heightPercentage(22),
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.font,
    position: "absolute",
    top: "93.95%",
    textAlign: "left",
    letterSpacing: -0.6,
  },
  text12: {
    color: Color.subBlue,
  },
  text13: {
    color: Color.grey,
  },
  text11: {
    left: "50.57%",
    
    top: "93.95%",
    fontSize: FontSize.font_size,
    textAlign: "left",
    letterSpacing: -0.6,
  },
  frameChild: {
    height: heightPercentage(14),
    left: heightPercentage(83),
  },
  frameItem: {
    left: heightPercentage(58),
    height: heightPercentage(14),
  },
  vectorIcon: {
    height: "75.06%",
    bottom: "24.94%",
    borderRadius: 13,
  },
  container: {
    height: "5.35%",
    width: "72.73%",
    top: "82.24%",
    right: "26.14%",
    bottom: "12.41%",
    left: "1.14%",
    position: "absolute",
  },
  text15: {
    color: Color.grey,
    left: "1.14%",
  },
  text16: {
    left: "36.36%",
    color: Color.grey,
  },
  text17: {
    left: "50.57%",
  },
  frameInner: {
    left: heightPercentage(83),
  },
  frameChild1: {
    left: heightPercentage(58),
  },
  vectorIcon1: {
    height: heightPercentage(153),
    borderRadius: 13,
    width: heightPercentage(176),
    top: heightPercentage(0),
    left: heightPercentage(0),
    position: "absolute",
  },
  groupContainer: {
    height: heightPercentage(206),
    width: heightPercentage(176),
    marginLeft: heightPercentage(16),
  },
  packageset3: {
    top: heightPercentage(54),
    left: heightPercentage(0),
    right: heightPercentage(0),
  },
  arrowIcon: {
    top: heightPercentage(14),
    height: heightPercentage(16),
  },
  packageset: {
    top: heightPercentage(1044),
    height: heightPercentage(261),
    left: heightPercentage(24),
    right: heightPercentage(0),
    position: "absolute",
  },
  text20: {
    lineHeight: heightPercentage(30),
    fontSize: FontSize.font3_size,
    letterSpacing: -0.6,
    left: heightPercentage(0),
  },
  maskGroupIcon: {
    top: "0.48%",
    height: "74.09%",
  },
  packageset21: {
    top: heightPercentage(49),
    left: heightPercentage(0),
    right: heightPercentage(0),
  },
  packageset1: {
    top: heightPercentage(757),
    height: heightPercentage(256),
    left: heightPercentage(24),
    right: heightPercentage(0),
    position: "absolute",
  },
  maskGroupIcon1: {
    top: "0.02%",
    height: "74.09%",
  },
  wrapper1: {
    width: "82.95%",
    right: "15.91%",
  },
  vectorIcon4: {
    height: "74.11%",
    borderRadius: 13,
    top: "0%",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_base_5,
    borderTopRightRadius: Border.br_10xs,
    borderBottomRightRadius: Border.br_base_5,
    borderBottomLeftRadius: Border.br_base_5,
    backgroundColor: Color.navy,
    top: heightPercentage(0),
    left: heightPercentage(0),
  },
  ai: {
    left: heightPercentage(11),
    color: Color.white,
    top: heightPercentage(11),
  },
  rectangleParent: {
    left: heightPercentage(133),
    top: heightPercentage(12),
  },
  wrapper2: {
    width: "69.32%",
    right: "29.55%",
  },
  maskGroupIcon2: {
    bottom: "25.91%",
    height: "74.09%",
  },
  vectorIcon5: {
    height: "74.58%",
    borderRadius: 13,
    top: "0%",
  },
  package3: {
    marginLeft: heightPercentage(16),
  },
  packageset5: {
    top: heightPercentage(55),
    left: heightPercentage(0),
    right: heightPercentage(0),
  },
  packageset4: {
    top: heightPercentage(459),
    height: heightPercentage(262),
    left: heightPercentage(24),
    right: heightPercentage(0),
    position: "absolute",
  },
  name: {
    marginLeft: heightPercentage(-12.5),
    top: heightPercentage(36),
    color: Color.navy,
    textAlign: "left",
    
    letterSpacing: -0.6,
    left: "50%",
  },
  picIcon: {
    marginLeft: heightPercentage(-15.5),
    height: heightPercentage(30),
    width: heightPercentage(31),
    top: heightPercentage(0),
    left: "50%",
    position: "absolute",
  },
  face: {
    height: heightPercentage(58),
    flex: 1,
  },
  name1: {
    marginLeft: heightPercentage(-11.5),
    color: Color.navy,
    textAlign: "left",
    fontFamily: FontFamily.font,
    
    letterSpacing: -0.6,
    left: "50%",
    position: "absolute",
  },
  picIcon1: {
    width: heightPercentage(34),
    height: heightPercentage(34),
    marginLeft: heightPercentage(-16.5),
    top: heightPercentage(0),
    left: "50%",
    position: "absolute",
  },
  lip: {
    height: heightPercentage(60),
  },
  name2: {
    marginLeft: heightPercentage(-5.5),
    top: heightPercentage(37),
    color: Color.navy,
    textAlign: "left",
    
    letterSpacing: -0.6,
    left: "50%",
  },
  cheak: {
    height: heightPercentage(59),
  },
  picIcon3: {
    height: heightPercentage(34),
  },
  name4: {
    marginLeft: heightPercentage(-6.5),
    top: heightPercentage(31),
    color: Color.navy,
    textAlign: "left",
    
    letterSpacing: -0.6,
    left: "50%",
  },
  picIcon4: {
    height: heightPercentage(19),
  },
  eye: {
    height: heightPercentage(53),
  },
  facepartmenu: {
    marginLeft: heightPercentage(-152.5),
    top: heightPercentage(364),
    width: heightPercentage(309),
    left: "50%",
  },
  vectorIcon6: {
    top: heightPercentage(0),
  },
  text46: {
    color: Color.navy,
  },
  mbti1: {
    color: Color.pointY,
  },
  mbti: {
    lineHeight: heightPercentage(28),
    
    fontFamily: FontFamily.pretendard,
    marginLeft: heightPercentage(-139.5),
    textAlign: "left",
    letterSpacing: -0.6,
    left: "50%",
    fontSize: FontSize.font3_size,
    top: heightPercentage(24),
  },
  mbti2: {
    top: heightPercentage(131),
    
    lineHeight: heightPercentage(22),
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.font,
    position: "absolute",
    color: Color.navy,
  },
  event: {
    top: heightPercentage(131),
  },
  buttonAlarmIcon: {
    right: heightPercentage(84),
  },
  buttonBookmarkIcon: {
    right: heightPercentage(24),
  },
  name5: {
    top: heightPercentage(13),
    color: Color.navy,
    
    lineHeight: heightPercentage(30),
    fontSize: FontSize.font3_size,
  },
  text48: {
    color: Color.subRed,
  },
  status: {
    top: heightPercentage(38),
    lineHeight: heightPercentage(22),
    fontSize: FontSize.font_size,
    
  },
  profilepicIcon: {
    width: heightPercentage(60),
    height: heightPercentage(60),
    top: heightPercentage(0),
    left: heightPercentage(0),
    position: "absolute",
  },
  useprofile: {
    top: heightPercentage(47),
    width: heightPercentage(154),
    height: heightPercentage(60),
    left: heightPercentage(24),
    position: "absolute",
  },
  main: {
    backgroundColor: Color.gray_200,
    width: "100%",
    height: heightPercentage(1915),
    flex: 1,
  },
  backgroundIcon1: {
    height: heightPercentage(700),
    width: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  animateImage:{
     width:"100%",
     height:"100%"
  },
  foreground: {
    height: heightPercentage(237),
    top: heightPercentage(580),
    width: "100%",
    position: "absolute"
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
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_base,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    width: "100%",
  },
  inputrectTextholder: {
    left: heightPercentage(22),
    color: Color.darkgray,
    top: heightPercentage(11),
    
    textAlign: "left",
    fontFamily: FontFamily.font,
    position: "absolute",
  },
  inputrectFrame: {
    height: heightPercentage(48),
    top: heightPercentage(700),
    left: heightPercentage(24),
    right: heightPercentage(24),
    position: "absolute",
  },
  messageBackground: {
    height: heightPercentage(35),
    position: "absolute",
    width: heightPercentage(117),
  },
  messageText: {
    left: heightPercentage(16),
    top: "50%",
    marginTop: heightPercentage(-11),
    
    color: Color.navy,
    textAlign: "left",
    letterSpacing: -0.6,
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
    borderBottomRightRadius: Border.br_11xs,
    borderBottomLeftRadius: Border.br_xs,
    backgroundColor: Color.pointY,
    left: "0%",
    top: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  messagetext: {
    right: heightPercentage(16),
    top: "50%",
    marginTop: heightPercentage(-11),
    
    color: Color.navy,
    textAlign: "left",
    letterSpacing: -0.6,
  },
  messageMe: {
    top: heightPercentage(590),
    width: heightPercentage(126),
    right: heightPercentage(24),
  },
  trainingplanBackground: {
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1),
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    backgroundColor: Color.white,
    top: heightPercentage(0),
    left: heightPercentage(0),
  },
  text50: {
    left: heightPercentage(42),
    color: Color.navy,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Bold,
    
    top: heightPercentage(0),
    position: "absolute",
  },
  trainingcontentButtonChild: {
    backgroundColor: Color.goldenrod_100,
  },
  text51: {
    marginTop: heightPercentage(-4.5),
    marginLeft: heightPercentage(-21),
    top: "50%",
    color: Color.orange,
    left: "50%",
  },
  trainingcontentButton: {
    width: heightPercentage(78),
    top: heightPercentage(0),
    right: heightPercentage(0),
  },
  icEyeIcon: {
    top: heightPercentage(5),
    height: heightPercentage(14),
  },
  trainingcontent: {
    top: heightPercentage(155),
    left: heightPercentage(18),
    right: heightPercentage(22),
    height: heightPercentage(27),
  },
  icTuskIcon: {
    height: heightPercentage(26),
    top: heightPercentage(0),
  },
  trainingcontent1: {
    top: heightPercentage(110),
    left: heightPercentage(18),
    right: heightPercentage(22),
    height: heightPercentage(27),
  },
  trainingcontentButtonInner: {
    backgroundColor: Color.pointY,
  },
  icCheckWhite1Icon: {
    left: heightPercentage(25),
    width: heightPercentage(27),
    top: heightPercentage(0),
  },
  trainingcontent2: {
    top: heightPercentage(65),
    left: heightPercentage(18),
    right: heightPercentage(22),
    height: heightPercentage(27),
  },
  textDate: {
    left: heightPercentage(24),
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font1_size,
  },
  trainingplanHeader: {
    height: heightPercentage(45),
    top: heightPercentage(0),
    overflow: "hidden",
    left: heightPercentage(0),
    right: heightPercentage(0),
  },
  messageCoachTrainingplan: {
    top: heightPercentage(368),
    left: heightPercentage(24),
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  messageBackground2: {
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1),
    },
    shadowColor: "rgba(0, 0, 0, 0.02)",
    top: heightPercentage(0),
    left: heightPercentage(0),
  },
  messageCoach1: {
    top: heightPercentage(317),
    opacity: 0.5,
    left: heightPercentage(24),
  },
  icReloadIcon: {
    right: heightPercentage(20),
    width: heightPercentage(44),
    height: heightPercentage(44),
  },
  communication: {
    height: heightPercentage(812),
    top: heightPercentage(0),
    overflow: "hidden",
  },
  midsection: {
    top: heightPercentage(812),
    height: heightPercentage(1039),
    overflow: "hidden",
    left: heightPercentage(0),
    right: heightPercentage(0),
  },
  communicationmain: {
    height: heightPercentage(3766),
    width: "100%",
    flex: 1,
  },
});

export default CommunicationMain;
