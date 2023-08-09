import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { heightPercentage} from "../ResponsiveSize";
const MainHomeView = () => {
  return (
    <View style={styles.view}>
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
      <View style={styles.background} />
      <View style={styles.packageset2}>
        <Image
          style={[styles.packageset2Child, styles.arrowIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-44.png")}
        />
        <Text style={[styles.text, styles.textTypo4]}>오늘의 한줄</Text>
        <View style={[styles.package, styles.packageLayout]}>
          <View style={styles.packageShadowBox} />
          <Text style={[styles.text1, styles.textTypo3]}>
            밝은 미소는 눈부신 하루를 만든다.
          </Text>
          <Text style={[styles.text2, styles.textTypo2]}>#봄처럼</Text>
          <Text style={[styles.text3, styles.textTypo2]}>#화사한</Text>
          <Text style={[styles.text4, styles.textTypo2]}>#미소</Text>
        </View>
        <View style={[styles.package1, styles.packageLayout]}>
          <View style={styles.packageShadowBox} />
          <Text style={[styles.text5, styles.textTypo3]}>
            각양각형 얼굴형 이야기
          </Text>
          <Text style={[styles.text6, styles.packagesetPosition]}>#얼굴형</Text>
        </View>
      </View>
      <View style={[styles.packageset, styles.packagesetPosition]}>
        <Text style={[styles.text7, styles.textTypo4]}>
          면접 대비 필수 트레이닝
        </Text>
        <View style={[styles.packageset3, styles.packagesetFlexBox]}>
          <View style={styles.package3Layout}>
            <View style={styles.wrapper}>
              <Text style={[styles.text8, styles.textTypo3]}>
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
              style={[styles.vectorIcon, styles.iconPosition2]}
              resizeMode="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
          <View style={styles.groupContainer}>
            <View style={styles.container}>
              <Text style={[styles.text8, styles.textTypo3]}>
                입꼬리 승천까지 2분
              </Text>
            </View>
            <Text style={[styles.text15, styles.textTypo]}>표정 근육</Text>
            <Text style={[styles.text16, styles.textTypo]}>입</Text>
            <Text style={[styles.text17, styles.textTypo]}>
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
      <View style={[styles.packageset1, styles.packagesetPosition]}>
        <Text style={[styles.text20, styles.textTypo4]}>추천 트레이닝</Text>
        <View style={[styles.packageset21, styles.packagesetFlexBox]}>
          <View style={styles.package3Layout}>
            <View style={styles.wrapper}>
              <Text style={[styles.text8, styles.textTypo3]}>
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
              style={[styles.maskGroupIcon, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/mask-group2.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.iconPosition2]}
              resizeMode="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
          <View style={styles.groupContainer}>
            <View style={styles.container}>
              <Text style={[styles.text8, styles.textTypo3]}>
                입꼬리 승천까지 2분
              </Text>
            </View>
            <Text style={[styles.text15, styles.textTypo]}>표정 근육</Text>
            <Text style={[styles.text16, styles.textTypo]}>입</Text>
            <Text style={[styles.text17, styles.textTypo]}>
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
      <View style={[styles.packageset4, styles.packagesetPosition]}>
        <View style={[styles.packageset5, styles.packagesetFlexBox]}>
          <View style={styles.package3Layout}>
            <Image
              style={[styles.maskGroupIcon1, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/mask-group.png")}
            />
            <View style={[styles.wrapper1, styles.wrapperPosition]}>
              <Text style={[styles.text8, styles.textTypo3]}>
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
              style={[styles.vectorIcon4, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <Text style={[styles.ai, styles.textTypo2]}>AI</Text>
            </View>
          </View>
          <View style={[styles.package3, styles.package3Layout]}>
            <View style={[styles.wrapper2, styles.wrapperPosition]}>
              <Text style={[styles.text8, styles.textTypo3]}>
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
              style={[styles.maskGroupIcon2, styles.iconPosition2]}
              resizeMode="cover"
              source={require("../assets/mask-group1.png")}
            />
            <Image
              style={[styles.vectorIcon5, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
        </View>
        <Text style={[styles.text7, styles.textTypo4]}>최근 했던 트레이닝</Text>
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
          style={[styles.mbti2, styles.mbtiPosition]}
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
      <View style={[styles.useprofile, styles.packagesetPosition]}>
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
  );
};

const styles = StyleSheet.create({
  indexLayout: {
    height: heightPercentage(6),
    width: heightPercentage(6),
  },
  arrowIconLayout: {
    width: heightPercentage(11),
    height: heightPercentage(16),
    right: heightPercentage(24),
    position: "absolute",
  },
  textTypo4: {
    textAlign: "left",
    letterSpacing: -0.6,
    
    position: "absolute",
  },
  packageLayout: {
    height: heightPercentage(247),
    width: heightPercentage(288),
    top: heightPercentage(46),
    position: "absolute",
  },
  textTypo3: {
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    color: Color.navy,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Regular,
    
    position: "absolute",
  },
  textTypo2: {
    letterSpacing: -0.2,
    fontSize: FontSize.font3_size,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Regular,
  },
  packagesetPosition: {
    left: heightPercentage(24),
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
    fontFamily: FontFamily.Pretendard_Regular,
  },
  textPosition: {
    left: "36.36%",
    color: Color.grey,
  },
  frameLayout: {
    height: heightPercentage(14),
    width: heightPercentage(1),
    top: heightPercentage(193),
    position: "absolute",
  },
  iconPosition2: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  textTypo: {
    top: "93.92%",
    
    lineHeight: heightPercentage(22),
    fontSize: FontSize.font2_size,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Regular,
    letterSpacing: -0.6,
    position: "absolute",
  },
  framePosition: {
    top: heightPercentage(192),
    height: heightPercentage(14),
    width: heightPercentage(1),
    position: "absolute",
  },
  iconPosition1: {
    bottom: "25.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  iconPosition: {
    bottom: "25.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
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
    fontSize: FontSize.font2_size,
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
    width: heightPercentage(327),
    marginLeft: heightPercentage(-163.5),
    left: "50%",
    position: "absolute",
  },
  mbtiPosition: {
    marginLeft: heightPercentage(-139.5),
    textAlign: "left",
    letterSpacing: -0.6,
    left: "50%",
    position: "absolute",
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
    fontFamily: FontFamily.Pretendard_Regular,
    letterSpacing: -0.6,
    position: "absolute",
  },
  backgroundIcon: {
    height: heightPercentage(258),
    width: heightPercentage(375),
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
    backgroundColor: Color.extraLightGrey,
    height: heightPercentage(351),
    position: "absolute",
    width: heightPercentage(375),
  },
  packageset2Child: {
    top: heightPercentage(-1),
    height: heightPercentage(16),
  },
  text: {
    left: heightPercentage(3),
    color: Color.black,
    fontFamily: FontFamily.Pretendard_Regular,
    textAlign: "left",
    letterSpacing: -0.6,
    lineHeight: heightPercentage(30),
    fontSize: FontSize.font1_size,
    top: heightPercentage(0),
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
    backgroundColor: Color.white,
    borderRadius: Border.br_base,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  text1: {
    height: "6.67%",
    top: "82.31%",
    color: Color.navy,
    left: "9.38%",
    width: "74.31%",
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
  },
  text2: {
    top: "72.49%",
    height: "4.71%",
    fontSize: FontSize.font3_size,
    color: Color.navy,
    position: "absolute",
    width: "13.54%",
    left: "9.38%",
  },
  text3: {
    left: "27.08%",
    top: "72.49%",
    height: "4.71%",
    fontSize: FontSize.font3_size,
    color: Color.navy,
    position: "absolute",
    width: "13.54%",
  },
  text4: {
    width: "10.07%",
    left: "44.79%",
    top: "72.49%",
    height: "4.71%",
    fontSize: FontSize.font3_size,
    color: Color.navy,
    position: "absolute",
  },
  package: {
    left: heightPercentage(0),
  },
  text5: {
    top: heightPercentage(203),
    left: "8.33%",
    color: Color.navy,
    width: "74.31%",
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    height: heightPercentage(16),
  },
  text6: {
    top: heightPercentage(179),
    width: heightPercentage(39),
    height: heightPercentage(12),
    letterSpacing: -0.2,
    fontSize: FontSize.font3_size,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Regular,
    color: Color.navy,
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
    left: heightPercentage(0),
    fontFamily: FontFamily.Pretendard_Regular,
    textAlign: "left",
    letterSpacing: -0.6,
    lineHeight: heightPercentage(30),
    fontSize: FontSize.font1_size,
  },
  text8: {
    color: Color.navy,
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    left: "0%",
    top: "0%",
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
    fontSize: FontSize.font2_size,
    textAlign: "left",
    letterSpacing: -0.6,
    position: "absolute",
    left: "1.14%",
  },
  text10: {
    
    lineHeight: heightPercentage(22),
    fontSize: FontSize.font2_size,
    fontFamily: FontFamily.Pretendard_Regular,
    top: "93.95%",
    textAlign: "left",
    letterSpacing: -0.6,
    position: "absolute",
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
    fontSize: FontSize.font2_size,
    textAlign: "left",
    letterSpacing: -0.6,
    position: "absolute",
  },
  frameChild: {
    left: heightPercentage(83),
  },
  frameItem: {
    left: heightPercentage(58),
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
    left: heightPercentage(0),
    top: heightPercentage(0),
    position: "absolute",
  },
  groupContainer: {
    height: heightPercentage(206),
    width: heightPercentage(176),
    marginLeft: heightPercentage(16),
  },
  packageset3: {
    top: heightPercentage(54),
    right: heightPercentage(0),
    left: heightPercentage(0),
  },
  arrowIcon: {
    top: heightPercentage(14),
    height: heightPercentage(16),
  },
  packageset: {
    top: heightPercentage(1044),
    height: heightPercentage(261),
    right: heightPercentage(0),
  },
  text20: {
    top: heightPercentage(10),
    color: Color.navy,
    left: heightPercentage(0),
    fontFamily: FontFamily.Pretendard_Regular,
    textAlign: "left",
    letterSpacing: -0.6,
    lineHeight: heightPercentage(30),
    fontSize: FontSize.font1_size,
  },
  maskGroupIcon: {
    top: "0.48%",
    height: "74.09%",
  },
  packageset21: {
    top: heightPercentage(49),
    right: heightPercentage(0),
    left: heightPercentage(0),
  },
  packageset1: {
    top: heightPercentage(757),
    height: heightPercentage(256),
    right: heightPercentage(0),
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
    left: heightPercentage(0),
    top: heightPercentage(0),
  },
  ai: {
    top: heightPercentage(11),
    left: heightPercentage(11),
    lineHeight: heightPercentage(18),
    color: Color.white,
    
    position: "absolute",
  },
  rectangleParent: {
    top: heightPercentage(12),
    left: heightPercentage(133),
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
    right: heightPercentage(0),
    left: heightPercentage(0),
  },
  packageset4: {
    top: heightPercentage(459),
    height: heightPercentage(262),
    right: heightPercentage(0),
  },
  name: {
    marginLeft: heightPercentage(-12.5),
    top: heightPercentage(36),
    color: Color.navy,
    textAlign: "left",
    letterSpacing: -0.6,
    
    position: "absolute",
    fontSize: FontSize.font2_size,
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
    letterSpacing: -0.6,
    
    position: "absolute",
    fontFamily: FontFamily.Pretendard_Regular,
    left: "50%",
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
    
    position: "absolute",
    fontSize: FontSize.font2_size,
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
    
    position: "absolute",
    fontSize: FontSize.font2_size,
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
    top: heightPercentage(24),
    lineHeight: heightPercentage(28),
    
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.font1_size,
    marginLeft: heightPercentage(-139.5),
  },
  mbti2: {
    top: heightPercentage(131),
    
    lineHeight: heightPercentage(22),
    fontSize: FontSize.font2_size,
    fontFamily: FontFamily.Pretendard_Regular,
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
    height: heightPercentage(41),
    width: heightPercentage(41),
    top: heightPercentage(57),
  },
  name5: {
    top: heightPercentage(13),
    color: Color.navy,
    
    left: heightPercentage(70),
    lineHeight: heightPercentage(30),
    fontSize: FontSize.font1_size,
  },
  text48: {
    color: Color.subRed,
  },
  status: {
    top: heightPercentage(38),
    lineHeight: heightPercentage(22),
    fontSize: FontSize.font2_size,
    
  },
  profilepicIcon: {
    width: heightPercentage(60),
    height: heightPercentage(60),
    left: heightPercentage(0),
    top: heightPercentage(0),
    position: "absolute",
  },
  useprofile: {
    top: heightPercentage(47),
    width: heightPercentage(154),
    height: heightPercentage(60),
  },
  view: {
    backgroundColor: Color.gray_200,
    height: heightPercentage(1915),
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default MainHomeView;
