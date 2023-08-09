import React,{useState} from 'react';
import {StyleSheet, View, Text, Image,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Border, Color, FontSize, FontFamily} from '../GlobalStyles';
import {heightPercentage} from '../ResponsiveSize';
import CorgiSwitch from './CorgiSwitch';
import Menubar from '../component/Menubar';
const ReportSeasonView = () => {
  const [switchValue, setswitchValue] = useState(1);
  return (
    <View style = {styles.mainview}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    {switchValue == 1 ?(
    <View style={styles.view}>
      <View style={[styles.child, styles.childLayout]} />
      <View style={[styles.item, styles.itemShadowBox]} />
      <View style={[styles.progressset, styles.progresssetFlexBox]}>
        <View style={styles.progressLayout}>
          <View style={[styles.progressChild, styles.backgroundBorder]} />
          <Text style={[styles.title, styles.titleClr]}>출석률</Text>
          <Text
            style={[
              styles.discription,
              styles.contentTypo,
            ]}>{`많이 바쁘시군요...
조금 더 신경써주세요!`}</Text>
          <Text style={[styles.percent, styles.percentTypo]}>32%</Text>
          <Image
            style={[styles.guageIcon, styles.guageIconPosition]}
            resizeMode="cover"
            source={require('../assets/guage.png')}
          />
        </View>
        <View style={[styles.progress1, styles.progressLayout]}>
          <View style={[styles.background, styles.backgroundBorder]} />
          <Text style={[styles.description, styles.contentTypo]}>{`훌륭해요!
점점 예뻐지시는걸요?`}</Text>
          <Text style={[styles.title1, styles.titleClr]}>달성률</Text>
          <Text style={[styles.percent1, styles.percentTypo]}>81%</Text>
          <Image
            style={[styles.guageIcon1, styles.guageIconPosition]}
            resizeMode="cover"
            source={require('../assets/guage1.png')}
          />
        </View>
      </View>
      <Text style={[styles.text, styles.percentTypo]}>2023. 5. 18 ~ 6. 21</Text>
      <Image
        style={styles.downarrowIcon}
        resizeMode="cover"
        source={require('../assets/downarrow.png')}
      />

      <LinearGradient
        style={styles.inner}
        locations={[0, 0, 1]}
        colors={['#f1f1f1', 'rgba(241, 241, 241, 0.5)', '#fafafa']}
        useAngle={true}
        angle={180}
      />
      <View style={[styles.button, styles.buttonLayout1]}>
        <View style={[styles.buttonBakckground, styles.backgroundPosition]} />
        <Image
          style={[styles.buttonLineIcon, styles.buttonLayout1]}
          resizeMode="cover"
          source={require('../assets/button-line.png')}
        />
        <Text style={[styles.text3, styles.textTypo]}>
          이번 시즌 진단 내역보기
        </Text>
        <Image style = {styles.buttonmark}
        source={require("../assets/Button_Mark.png")}></Image>
      </View>

      <View style={[styles.background1, styles.background1Position]} />
      <Image
        style={styles.icCalender1Icon}
        resizeMode="cover"
        source={require('../assets/ic-calender-1.png')}
      />
      <View style={[styles.reportsection, styles.background1Position]}>
        <Text style={[styles.title3, styles.percentTypo]}>시즌 활동 기록</Text>
        <View style={styles.reportParent}>
        <View style={styles.reportLayout}>
            <View style={[styles.background3, styles.backgroundPosition]} />
            <Text style={[styles.content, styles.contentPosition]}>
              오늘은 얼굴 근육이 약간 땡겼던 것 같다. 그래도 점점 웃는게
              자연스럽고 거울 앞에 섰을 때의 내 모습이 점차 마음에 든다..!
            </Text>
            <View style={[styles.heartpregress, styles.heartpregressLayout]}>
              <Text style={[styles.percenttext, styles.contentTypo]}>50%</Text>
              <Image
                style={[styles.icHeartprogressIcon, styles.heartpregressLayout]}
                resizeMode="cover"
                source={require('../assets/ic-heartprogress.png')}
              />
            </View>
            <View style={styles.info}>
              <Text style={[styles.date, styles.dateTypo]}>2023 .04. 01</Text>
              <Image
                style={[styles.lineIcon1, styles.lineIconPosition]}
                resizeMode="cover"
                source={require('../assets/line.png')}
              />
              <Text style={[styles.category, styles.title4Position]}>
                시즌 트레이닝
              </Text>
              <Text style={[styles.title4, styles.title4Position]}>
                오늘의 연습!!
              </Text>
            </View>
            <View style={styles.reportpic}>
              <Image
                style={[
                  styles.reportbackgroundIcon1,
                  styles.reportbackgroundIconPosition,
                ]}
                resizeMode="cover"
                source={require('../assets/reportbackground.png')}
              />
              <LinearGradient
                style={[styles.reportforeground, styles.contentPosition]}
                locations={[0, 0.49, 1]}
                colors={[
                  'rgba(252, 252, 252, 0)',
                  'rgba(252, 252, 252, 0.52)',
                  '#fcfcfc',
                ]}
                useAngle={true}
                angle={180}
              />
            </View>
          </View>
          <View style={[styles.report, styles.reportLayout]}>
            <View style={[styles.background2, styles.backgroundPosition]} />
            <Text style={[styles.content, styles.contentPosition]}>
              오늘은 얼굴 근육이 약간 땡겼던 것 같다. 그래도 점점 웃는게
              자연스럽고 거울 앞에 섰을 때의 내 모습이 점차 마음에 든다..!
            </Text>
            <View style={[styles.heartpregress, styles.heartpregressLayout]}>
              <Text style={[styles.percenttext, styles.contentTypo]}>50%</Text>
              <Image
                style={[styles.icHeartprogressIcon, styles.heartpregressLayout]}
                resizeMode="cover"
                source={require('../assets/ic-heartprogress.png')}
              />
            </View>
            <View style={styles.info}>
              <Text style={[styles.date, styles.dateTypo]}>2023 .04. 01</Text>
              <Image
                style={[styles.lineIcon, styles.lineIconPosition]}
                resizeMode="cover"
                source={require('../assets/line.png')}
              />
              <Text style={[styles.category, styles.title4Position]}>
                시즌 트레이닝
              </Text>
              <Text style={[styles.title4, styles.title4Position]}>
                오늘의 연습!!
              </Text>
            </View>
            <View style={styles.reportpic}>
              <Image
                style={[
                  styles.reportbackgroundIcon,
                  styles.reportbackgroundIconPosition,
                ]}
                resizeMode="cover"
                source={require('../assets/reportbackground.png')}
              />
              <LinearGradient
                style={[styles.reportforeground, styles.contentPosition]}
                locations={[0, 0.49, 1]}
                colors={[
                  'rgba(252, 252, 252, 0)',
                  'rgba(252, 252, 252, 0.52)',
                  '#fcfcfc',
                ]}
                useAngle={true}
                angle={180}
              />
            </View>
          </View>
        </View>
        <Image
          style={styles.arrowIcon}
          resizeMode="cover"
          source={require('../assets/arrow2.png')}
        />
      </View>
    </View>
  ):(    <View style={styles.d_view}>
    <View style={styles.d_child} />
    <View style={[styles.d_item, styles.d_itemPosition]} />
    <View style={styles.d_calender}>
      <View style={styles.d_calenderChild} />
      <View style={[styles.d_calset, styles.d_calsetFlexBox]}>
        <Text style={[styles.d_text, styles.d_textFlexBox]}>일</Text>
        <Text style={[styles.d_text1, styles.d_textSpaceBlock]}>월</Text>
        <Text style={[styles.d_text1, styles.d_textSpaceBlock]}>화</Text>
        <Text style={[styles.d_text1, styles.d_textSpaceBlock]}>수</Text>
        <Text style={[styles.d_text1, styles.d_textSpaceBlock]}>목</Text>
        <Text style={[styles.d_text1, styles.d_textSpaceBlock]}>금</Text>
        <Text style={[styles.d_text6, styles.d_textSpaceBlock]}>토</Text>
      </View>
      <View style={[styles.d_frameParent, styles.d_calsetPosition]}>
        <View style={styles.d_dateFlexBox}>
          <Text style={[styles.d_dateUnactive, styles.d_textFlexBox]}>29</Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            01
          </Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            02
          </Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            03
          </Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            04
          </Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            05
          </Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            06
          </Text>
        </View>
        <View style={[styles.d_dateUnactiveGroup, styles.d_dateFlexBox]}>
          <Text style={[styles.d_dateUnactive, styles.d_textFlexBox]}>07</Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            08
          </Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            09
          </Text>
          <View style={styles.d_textSpaceBlock}>
            <Image
              style={[styles.d_calendermarking5Icon, styles.d_iconLayout]}
              resizeMode="cover"
              source={require("../assets/calendermarking-5.png")}
            />
          </View>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            11
          </Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            12
          </Text>
          <View style={styles.d_textSpaceBlock}>
            <Image
              style={[styles.d_calendermarking5Icon, styles.d_iconLayout]}
              resizeMode="cover"
              source={require("../assets/calendermarking-4.png")}
            />
          </View>
        </View>
        <View style={[styles.d_dateUnactiveGroup, styles.d_dateFlexBox]}>
          <Text style={[styles.d_dateUnactive, styles.d_textFlexBox]}>14</Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            15
          </Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            16
          </Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            17
          </Text>
          <View style={styles.d_textSpaceBlock}>
            <Image
              style={[styles.d_calendermarking5Icon, styles.d_iconLayout]}
              resizeMode="cover"
              source={require("../assets/calendermarking-3.png")}
            />
          </View>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            19
          </Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            20
          </Text>
        </View>
        <View style={[styles.d_dateUnactiveGroup, styles.d_dateFlexBox]}>
          <Text style={[styles.d_dateUnactive, styles.d_textFlexBox]}>21</Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            22
          </Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            23
          </Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            24
          </Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            25
          </Text>
          <View style={styles.d_textSpaceBlock}>
            <Image
              style={[styles.d_calendermarking5Icon, styles.d_iconLayout]}
              resizeMode="cover"
              source={require("../assets/calendermarking-2.png")}
            />
          </View>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            27
          </Text>
        </View>
        <View style={[styles.d_dateUnactiveGroup, styles.d_dateFlexBox]}>
          <Text style={[styles.d_dateUnactive, styles.d_textFlexBox]}>28</Text>
          <Text style={[styles.d_dateUnactive1, styles.d_textSpaceBlock]}>
            29
          </Text>
          <View style={styles.d_textSpaceBlock}>
            <Image
              style={[styles.d_calendermarking1Icon, styles.d_iconLayout]}
              resizeMode="cover"
              source={require("../assets/calendermarking-1.png")}
            />
          </View>
          <Text style={[styles.d_dateCurrent, styles.d_textSpaceBlock]}>01</Text>
          <Text style={[styles.d_dateNone, styles.d_textSpaceBlock]}>01</Text>
          <Text style={[styles.d_dateNone, styles.d_textSpaceBlock]}>01</Text>
          <Text style={[styles.d_dateNone, styles.d_textSpaceBlock]}>01</Text>
        </View>
      </View>
      <Image
        style={styles.d_arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow.png")}
      />
      <Text style={[styles.d_month, styles.d_aiTypo]}>2023. 6</Text>
    </View>
    <Image
      style={styles.d_icCalendercolorIcon}
      resizeMode="cover"
      source={require("../assets/ic-calendercolor.png")}
    />
    <Text style={[styles.d_textCalender, styles.d_textTypo1]}>캘린더</Text>
    <View style={[styles.d_packageset, styles.d_packagesetPosition]}>
      <View style={[styles.d_packageset1, styles.d_packagesetPosition]}>
        <View style={styles.d_packageLayout1}>
          <Image
            style={[styles.d_maskGroupIcon, styles.d_maskGroupLayout]}
            resizeMode="cover"
            source={require("../assets/mask-group.png")}
          />
          <View style={[styles.d_wrapper, styles.d_wrapperPosition]}>
            <Text style={[styles.d_text11, styles.d_text11Position]}>
              면접에서도 당당한 미소
            </Text>
          </View>
          <Text style={[styles.d_text12, styles.d_textTypo]}>표정 근육</Text>
          <Text style={[styles.d_text13, styles.d_textTypo]}>입</Text>
          <Text style={[styles.d_text14, styles.d_textTypo]}>
            <Text style={styles.d_text15}>3</Text>
            <Text style={styles.d_text16}>분 소요</Text>
          </Text>
          <Image
            style={[styles.d_packageChild, styles.d_packageLayout]}
            resizeMode="cover"
            source={require("../assets/vector-270.png")}
          />
          <Image
            style={[styles.d_packageItem, styles.d_packageLayout]}
            resizeMode="cover"
            source={require("../assets/vector-270.png")}
          />
          <Image
            style={[styles.d_vectorIcon, styles.d_vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={[styles.d_rectangleParent, styles.d_groupChildLayout]}>
            <View style={[styles.d_groupChild, styles.d_groupChildLayout]} />
            <Text style={[styles.d_ai, styles.d_aiTypo]}>AI</Text>
          </View>
        </View>
        <View style={[styles.d_package1, styles.d_packageLayout1]}>
          <View style={[styles.d_container, styles.d_wrapperPosition]}>
            <Text style={[styles.d_text11, styles.d_text11Position]}>
              자기 전 안면 마사지
            </Text>
          </View>
          <Text style={[styles.d_text12, styles.d_textTypo]}>표정 근육</Text>
          <Text style={[styles.d_text13, styles.d_textTypo]}>입</Text>
          <Text style={[styles.d_text14, styles.d_textTypo]}>
            <Text style={styles.d_text15}>3</Text>
            <Text style={styles.d_text16}>분 소요</Text>
          </Text>
          <Image
            style={[styles.d_packageChild, styles.d_packageLayout]}
            resizeMode="cover"
            source={require("../assets/vector-270.png")}
          />
          <Image
            style={[styles.d_packageItem, styles.d_packageLayout]}
            resizeMode="cover"
            source={require("../assets/vector-270.png")}
          />
          <Image
            style={[styles.d_maskGroupIcon1, styles.d_text11Position]}
            resizeMode="cover"
            source={require("../assets/mask-group1.png")}
          />
          <Image
            style={[styles.d_vectorIcon1, styles.d_vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
      </View>
      <Text style={[styles.d_text23, styles.d_textTypo1]}>진행한 컨텐츠</Text>
      <Image
        style={[styles.d_arrowIcon1, styles.d_frameGroupPosition]}
        resizeMode="cover"
        source={require("../assets/arrow1.png")}
      />
    </View>
  </View>)}
  <Text style={[styles.title2, styles.titleClr]}>리포트</Text>
  <CorgiSwitch
        switchframestyle={{
          top: heightPercentage(98),
          height: heightPercentage(45),
          width: heightPercentage(327),
          left: '50%',
          marginLeft: heightPercentage(-163.5),
          backgroundColor: Color.whitesmoke_100,
          borderRadius: Border.br_base,
          position: 'absolute',
          overflow: 'hidden',
        }}
        switchstyle={{
          position: 'absolute',
          left: 0,
          top: 0,
          margin: heightPercentage(2),
          width: heightPercentage(163.5),
          height: heightPercentage(41),
          borderRadius: Border.br_base,
          backgroundColor: Color.white,
        }}
        text1style={{
          text: '시즌 트레이닝',
          position: 'absolute',
          letterSpacing: -0.5,
          fontFamily: FontFamily.Pretendard_Bold,
          fontSize: FontSize.font_size,
          color: Color.navy,
          textAlign: 'center',
        }}
        text2style={{
          text: '데일리 트레이닝',
          position: 'absolute',
          letterSpacing: -0.5,
          fontFamily: FontFamily.Pretendard_Bold,
          fontSize: FontSize.font_size,
          color: Color.mediumGrey,
          textAlign: 'center',
        }}
        output={setswitchValue}
      />
    </ScrollView>
    <Menubar></Menubar>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonmark:{
   position: "absolute",
   width: heightPercentage(24),
   height: heightPercentage(24),
   top: "50%",
   left: heightPercentage(16),
   marginTop: heightPercentage(-12)
  },
  childLayout: {
    width: heightPercentage(235),
    marginLeft: heightPercentage(-117.5),
  },
  itemShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.02)',
  },
  progresssetFlexBox: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    position: 'absolute',
  },
  backgroundBorder: {
    borderWidth: heightPercentage(1),
    borderColor: '#f3f3f3',
    borderStyle: 'solid',
    left: '-0.64%',
    right: '-0.64%',
    width: '101.28%',
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
    position: 'absolute',
  },
  titleClr: {
    color: Color.navy,
  },
  contentTypo: {
    letterSpacing: -0.2,
    fontSize: FontSize.font3_size,
    fontFamily: FontFamily.Pretendard_Medium,
  },
  percentTypo: {
    letterSpacing: -0.6,
    fontSize: FontSize.font1_size,
    textAlign: 'left',
    color: Color.navy,
    fontFamily: FontFamily.Pretendard_Bold,

    position: 'absolute',
  },
  guageIconPosition: {
    width: heightPercentage(113),
    left: '50%',
    position: 'absolute',
  },
  progressLayout: {
    height: heightPercentage(192),
    flex: 1,
  },
  switchPosition: {
    right: heightPercentage(24),
    left: heightPercentage(24),
  },
  textframe1Position: {
    left: '0.61%',
    right: '49.85%',
    width: '49.54%',
    position: 'absolute',
    overflow: 'hidden',
  },
  textTypo: {
    letterSpacing: -0.5,

    fontFamily: FontFamily.Pretendard_Medium,
    fontSize: FontSize.font_size,
    left: '50%',
    position: 'absolute',
  },
  buttonLayout1: {
    height: heightPercentage(57),
    position: 'absolute',
  },
  backgroundPosition: {
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1.1137440204620361),
    },
    position: 'absolute',
    width: '100%',
  },
  buttonLayout: {
    width: heightPercentage(5),
    borderRadius: Border.br_9xs,
    height: heightPercentage(22),
    backgroundColor: Color.white,
    position: 'absolute',
  },
  background1Position: {
    right: heightPercentage(0),
    left: heightPercentage(0),
    position: 'absolute',
  },
  reportLayout: {
    height: heightPercentage(361),
    width: heightPercentage(235),
  },
  contentPosition: {
    height: heightPercentage(56),
    left: '50%',
    position: 'absolute',
  },
  heartpregressLayout: {
    width: heightPercentage(33),
    position: 'absolute',
  },
  dateTypo: {
    top: heightPercentage(23),

    lineHeight: heightPercentage(18),
    letterSpacing: -0.2,
    fontSize: FontSize.font3_size,
  },
  lineIconPosition: {
    height: heightPercentage(14),
    top: heightPercentage(20),
    left: '50%',
    position: 'absolute',
  },
  title4Position: {
    marginLeft: heightPercentage(-71),
    textAlign: 'left',
    fontFamily: FontFamily.Pretendard_Regular,
    left: '50%',
    position: 'absolute',
  },
  reportbackgroundIconPosition: {
    borderTopRightRadius: Border.br_base,
    borderTopLeftRadius: Border.br_base,
    height: heightPercentage(226),
    top: heightPercentage(0),
    width: heightPercentage(235),
    left: '50%',
    position: 'absolute',
  },
  child: {
    height: '37.18%',
    top: '55.41%',
    bottom: '7.42%',
    borderRadius: 18,
    display: 'none',
    shadowOpacity: 1,
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1.1137440204620361),
    },
    backgroundColor: Color.white,
    left: '50%',
    position: 'absolute',
    elevation: 11.14,
    shadowRadius: 11.14,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
  },
  item: {
    marginLeft: heightPercentage(124.55),
    top: heightPercentage(162),
    borderRadius: 13,
    width: heightPercentage(40),
    height: heightPercentage(40),
    shadowOpacity: 1,
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1.1137440204620361),
    },
    backgroundColor: Color.white,
    left: '50%',
    position: 'absolute',
  },
  progressChild: {
    top: heightPercentage(-1),
    height: heightPercentage(194),
  },
  title: {
    top: heightPercentage(29),
    textAlign: 'center',
    fontFamily: FontFamily.Pretendard_Bold,
    position: 'absolute',
    fontSize: FontSize.font_size,

    marginLeft: heightPercentage(-21),
    left: '50%',
  },
  discription: {
    top: '71.88%',
    textAlign: 'center',
    lineHeight: heightPercentage(18),

    letterSpacing: -0.2,
    fontSize: FontSize.font3_size,
    left: '50%',
    position: 'absolute',
    marginLeft: heightPercentage(-50),
    color: Color.navy,
  },
  percent: {
    marginLeft: heightPercentage(-20),
    top: '52.08%',
    left: '50%',
  },
  guageIcon: {
    marginLeft: heightPercentage(-62.02),
    top: heightPercentage(55),
    height: heightPercentage(109),
  },
  background: {
    height: '101.04%',
    top: '-0.52%',
    bottom: '-0.52%',
  },
  description: {
    top: heightPercentage(138),
    textAlign: 'center',
    lineHeight: heightPercentage(18),

    letterSpacing: -0.2,
    fontSize: FontSize.font3_size,
    left: '50%',
    position: 'absolute',
    marginLeft: heightPercentage(-50),
    color: Color.navy,
  },
  title1: {
    top: heightPercentage(29),
    textAlign: 'center',
    fontFamily: FontFamily.Pretendard_Bold,
    position: 'absolute',
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,

    marginLeft: heightPercentage(-21),
    left: '50%',
  },
  percent1: {
    marginLeft: heightPercentage(-19.05),
    top: heightPercentage(100),
    left: '50%',
  },
  guageIcon1: {
    marginLeft: heightPercentage(-62.08),
    top: heightPercentage(52),
    height: heightPercentage(112),
  },
  progress1: {
    marginRight: heightPercentage(15),
  },
  progressset: {
    top: heightPercentage(242),
    left: heightPercentage(24),
    right: heightPercentage(24),
  },
  text: {
    top: heightPercentage(168),
    left: heightPercentage(24),
  },
  downarrowIcon: {
    top: heightPercentage(177),
    left: heightPercentage(197),
    width: heightPercentage(16),
    height: heightPercentage(11),
    position: 'absolute',
  },
  textframe: {
    right: '0.61%',
    left: '49.85%',
    top: heightPercentage(0),
    width: '49.54%',
    height: heightPercentage(45),
    position: 'absolute',
    overflow: 'hidden',
  },
  textframe1: {
    top: heightPercentage(0),
    height: heightPercentage(45),
  },
  inner: {
    marginLeft: heightPercentage(-187.5),
    top: heightPercentage(217),
    width: heightPercentage(375),
    height: heightPercentage(13),
    backgroundColor: 'transparent',
    left: '50%',
    position: 'absolute',
  },
  buttonBakckground: {
    backgroundColor: Color.subBlue,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.02)',
  },
  buttonLineIcon: {
    left: heightPercentage(53),
    width: heightPercentage(2),
    top: heightPercentage(0),
  },
  text3: {
    marginLeft: heightPercentage(-45.5),
    marginTop: heightPercentage(-11),
    top: '50%',
    color: Color.white,
    textAlign: 'center',
  },
  buttonMarkChild: {
    left: heightPercentage(25),
    top: heightPercentage(17),
  },
  buttonMarkItem: {
    top: heightPercentage(25),
    left: heightPercentage(38),
    transform: [
      {
        rotate: '90deg',
      },
    ],
  },
  buttonMark: {
    width: heightPercentage(22),
    height: heightPercentage(22),
    backgroundColor: 'transparent',
  },
  button: {
    top: heightPercentage(454),
    left: heightPercentage(24),
    right: heightPercentage(24),
  },
  background1: {
    top: heightPercentage(535),
    backgroundColor: Color.extraLightGrey,
    height: heightPercentage(3),
    left: heightPercentage(0),
  },
  title2: {
    top: heightPercentage(50),
    fontSize: FontSize.font4_size,
    textAlign: 'left',
    fontFamily: FontFamily.Pretendard_Bold,
    position: 'absolute',
    left: heightPercentage(24),
  },
  icCalender1Icon: {
    top: heightPercentage(172),
    right: heightPercentage(33),
    width: heightPercentage(19),
    height: heightPercentage(20),
    position: 'absolute',
  },
  title3: {
    top: heightPercentage(0),
    left: heightPercentage(24),
  },
  background2: {
    elevation: 11.14,
    shadowRadius: 11.14,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    backgroundColor: Color.white,
  },
  content: {
    marginLeft: heightPercentage(-97.5),
    top: heightPercentage(285),
    lineHeight: heightPercentage(20),
    width: heightPercentage(195),

    letterSpacing: -0.2,
    fontSize: FontSize.font3_size,
    fontFamily: FontFamily.Pretendard_Regular,
    height: heightPercentage(56),
    textAlign: 'left',
    color: Color.navy,
  },
  percenttext: {
    marginLeft: heightPercentage(-11.5),
    top: heightPercentage(34),
    color: Color.subRed,
    lineHeight: heightPercentage(18),

    letterSpacing: -0.2,
    fontSize: FontSize.font3_size,
    left: '50%',
    position: 'absolute',
    textAlign: 'left',
  },
  icHeartprogressIcon: {
    height: heightPercentage(33),
    left: heightPercentage(0),
    top: heightPercentage(0),
  },
  heartpregress: {
    top: heightPercentage(219),
    right: heightPercentage(13),
    height: heightPercentage(42),
  },
  date: {
    marginLeft: heightPercentage(5),
    color: Color.grey,
    textAlign: 'left',
    fontFamily: FontFamily.Pretendard_Regular,
    position: 'absolute',
    left: '50%',
  },
  lineIcon: {
    marginLeft: heightPercentage(-1),
    width: heightPercentage(0),
  },
  category: {
    color: Color.subBlue,
    top: heightPercentage(23),

    lineHeight: heightPercentage(18),
    letterSpacing: -0.2,
    fontSize: FontSize.font3_size,
  },
  title4: {
    top: heightPercentage(0),
    color: Color.navy,

    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
  },
  info: {
    top: heightPercentage(230),
    left: heightPercentage(20),
    width: heightPercentage(142),
    height: heightPercentage(34),
    position: 'absolute',
  },
  reportbackgroundIcon: {
    marginLeft: heightPercentage(71.5),
  },
  reportforeground: {
    top: heightPercentage(170),
    backgroundColor: 'transparent',
    width: heightPercentage(235),
    marginLeft: heightPercentage(-117.5),
  },
  reportpic: {
    height: heightPercentage(226),
    left: '0%',
    right: '0%',
    top: heightPercentage(0),
    position: 'absolute',
    width: '100%',
  },
  report: {
    opacity: 0.5,
    marginRight: heightPercentage(210)
  },
  background3: {
    elevation: 11.14,
    shadowRadius: 11.14,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    backgroundColor: Color.white,
  },
  lineIcon1: {
    marginLeft: heightPercentage(-1.5),
    width: heightPercentage(1),
  },
  reportbackgroundIcon1: {
    marginLeft: heightPercentage(-117.5),
    borderTopRightRadius: Border.br_base,
    borderTopLeftRadius: Border.br_base,
  },
  reportParent: {
    alignItems: 'right',
    flexDirection: 'row-reverse',
    position: 'absolute',
    top: heightPercentage(40),
    right: heightPercentage(110),
  },
  arrowIcon: {
    right: heightPercentage(23),
    width: heightPercentage(11),
    height: heightPercentage(15),
    top: heightPercentage(0),
    position: 'absolute',
  },
  reportsection: {
    top: heightPercentage(566),
    height: heightPercentage(401),
    left: heightPercentage(0),
    overflow: 'hidden',
  },
  view: {
    backgroundColor: Color.gray_200,
    height: heightPercentage(1176),
    overflow: 'hidden',
    width: '100%',
    flex: 1,
  },
  mainview:{
    overflow: "hidden",
    width: "100%",
    height: heightPercentage(812),
    position: "absolute"
  },
  d_itemPosition: {
    left: "0%",
    position: "absolute",
  },
  d_calsetFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  d_textFlexBox: {
    height: heightPercentage(30),
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.Pretendard_Medium,
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    alignItems: "center",
    flex: 1,
  },
  d_textSpaceBlock: {
    marginLeft: heightPercentage(14),
    height: heightPercentage(30),
    flex: 1,
  },
  d_calsetPosition: {
    left: heightPercentage(18),
    right: heightPercentage(17),
    position: "absolute",
  },
  d_dateFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  d_iconLayout: {
    width: heightPercentage(30),
    height: heightPercentage(30),
    position: "absolute",
  },
  d_aiTypo: {
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Bold,
  },
  d_textTypo1: {
    letterSpacing: -0.6,
    fontSize: FontSize.font1_size,
    textAlign: "left",
    
    color: Color.navy,
    fontFamily: FontFamily.Pretendard_Bold,
    position: "absolute",
  },
  d_frameGroupPosition: {
    right: heightPercentage(24),
    position: "absolute",
  },
  d_packagesetPosition: {
    right: heightPercentage(0),
    position: "absolute",
  },
  d_maskGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "74.09%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
  },
  d_wrapperPosition: {
    bottom: "12.81%",
    top: "81.86%",
    height: "5.33%",
    left: "1.14%",
    position: "absolute",
  },
  d_text11Position: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  d_textTypo: {
    lineHeight: heightPercentage(22),
    fontSize: FontSize.font2_size,
    top: "93.95%",
    letterSpacing: -0.6,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Medium,
    
    position: "absolute",
  },
  d_packageLayout: {
    height: heightPercentage(14),
    width: heightPercentage(1),
    top: heightPercentage(199),
    position: "absolute",
  },
  d_vectorIconLayout: {
    borderRadius: 13,
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  d_groupChildLayout: {
    height: heightPercentage(31),
    width: heightPercentage(31),
    position: "absolute",
  },
  d_packageLayout1: {
    height: heightPercentage(207),
    width: heightPercentage(176),
  },
  d_child: {
    height: "37.18%",
    marginLeft: heightPercentage(-117.5),
    top: "55.41%",
    bottom: "7.42%",
    borderRadius: 18,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1.1137440204620361),
    },
    shadowRadius: 11.14,
    elevation: 11.14,
    shadowOpacity: 1,
    width: heightPercentage(235),
    display: "none",
    backgroundColor: Color.white,
    left: "50%",
    position: "absolute",
  },
  d_item: {
    height: "0.28%",
    top: "49.54%",
    bottom: "50.18%",
    backgroundColor: Color.extraLightGrey,
    right: "0%",
    left: "0%",
    width: "100%",
  },
  d_calenderChild: {
    height: "100.67%",
    width: "100.6%",
    top: "-0.33%",
    right: "-0.3%",
    bottom: "-0.33%",
    left: "-0.3%",
    borderStyle: "solid",
    borderColor: "#f3f3f3",
    borderWidth: heightPercentage(1),
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
    position: "absolute",
  },
  d_text: {
    color: Color.subRed,
    
    letterSpacing: -0.5,
  },
  d_text1: {
    color: Color.navy,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.Pretendard_Regular,
    marginLeft: heightPercentage(14),
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    alignItems: "center",
    
    letterSpacing: -0.5,
  },
  d_text6: {
    color: Color.subBlue,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.Pretendard_Regular,
    marginLeft: heightPercentage(14),
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    alignItems: "center",
    
    letterSpacing: -0.5,
  },
  d_calset: {
    top: heightPercentage(60),
    alignItems: "center",
    left: heightPercentage(18),
    right: heightPercentage(17),
    position: "absolute",
  },
  d_dateUnactive: {
    color: Color.mediumGrey,
    
  },
  d_dateUnactive1: {
    color: Color.mediumGrey,
    
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.Pretendard_Bold,
    marginLeft: heightPercentage(14),
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    alignItems: "center",
  },
  d_calendermarking5Icon: {
    marginTop: heightPercentage(-15.12),
    marginLeft: heightPercentage(-15.14),
    top: "50%",
    width: heightPercentage(30),
    left: "50%",
  },
  d_dateUnactiveGroup: {
    marginTop: heightPercentage(5),
  },
  d_calendermarking1Icon: {
    left: heightPercentage(0),
    top: heightPercentage(0),
  },
  d_dateCurrent: {
    
    color: Color.navy,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.Pretendard_Regular,
    marginLeft: heightPercentage(14),
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    alignItems: "center",
  },
  d_dateNone: {
    color: Color.white,
    
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.Pretendard_Regular,
    marginLeft: heightPercentage(14),
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    alignItems: "center",
  },
  d_frameParent: {
    top: heightPercentage(96),
    alignItems: "center",
  },
  d_arrowIcon: {
    top: heightPercentage(25),
    right: heightPercentage(29),
    width: heightPercentage(9),
    height: heightPercentage(13),
    opacity: 0.35,
    position: "absolute",
  },
  d_month: {
    top: heightPercentage(16),
    fontSize: FontSize.font4_size,
    textAlign: "left",
    left: heightPercentage(24),
    
    color: Color.navy,
    position: "absolute",
  },
  d_calender: {
    top: heightPercentage(217),
    right: heightPercentage(22),
    left: heightPercentage(22),
    height: heightPercentage(299),
    position: "absolute",
  },
  d_icCalendercolorIcon: {
    top: heightPercentage(171),
    left: heightPercentage(82),
    width: heightPercentage(16),
    height: heightPercentage(22),
    position: "absolute",
  },
  d_textCalender: {
    top: heightPercentage(168),
    left: heightPercentage(24),
  },
  d_maskGroupIcon: {
    top: "0.02%",
    bottom: "25.89%",
    left: "0%",
    position: "absolute",
  },
  d_text11: {
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Bold,
    
    color: Color.navy,
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    top: "0%",
  },
  d_wrapper: {
    width: "82.95%",
    right: "15.91%",
    left: "1.14%",
  },
  d_text12: {
    color: Color.grey,
    left: "1.14%",
  },
  d_text13: {
    left: "36.36%",
    color: Color.grey,
  },
  d_text15: {
    color: Color.subBlue,
  },
  d_text16: {
    color: Color.grey,
  },
  d_text14: {
    left: "50.57%",
  },
  d_packageChild: {
    left: heightPercentage(83),
  },
  d_packageItem: {
    left: heightPercentage(58),
  },
  d_vectorIcon: {
    height: "74.11%",
    bottom: "25.89%",
  },
  d_groupChild: {
    borderTopLeftRadius: Border.br_base_5,
    borderTopRightRadius: Border.br_10xs,
    borderBottomRightRadius: Border.br_base_5,
    borderBottomLeftRadius: Border.br_base_5,
    backgroundColor: Color.navy,
    left: heightPercentage(0),
    top: heightPercentage(0),
  },
  d_ai: {
    top: heightPercentage(6),
    left: heightPercentage(11),
    fontSize: FontSize.font3_size,
    letterSpacing: -0.2,
    color: Color.white,
    
    position: "absolute",
  },
  d_rectangleParent: {
    top: heightPercentage(12),
    left: heightPercentage(133),
  },
  d_container: {
    width: "69.32%",
    right: "29.55%",
    left: "1.14%",
  },
  d_maskGroupIcon1: {
    bottom: "25.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "74.09%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
  },
  d_vectorIcon1: {
    height: "74.58%",
    bottom: "25.42%",
  },
  d_package1: {
    marginLeft: heightPercentage(16),
  },
  d_packageset1: {
    top: heightPercentage(55),
    left: heightPercentage(0),
    alignItems: "center",
    flexDirection: "row",
  },
  d_text23: {
    top: heightPercentage(15),
    left: heightPercentage(0),
  },
  d_arrowIcon1: {
    top: heightPercentage(14),
    width: heightPercentage(11),
    height: heightPercentage(16),
  },
  d_packageset: {
    top: heightPercentage(556),
    height: heightPercentage(262),
    left: heightPercentage(24),
  },
  d_view: {
    backgroundColor: Color.gray_200,
    height: heightPercentage(1090),
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  d_mainview:{
    overflow: "hidden",
    width: "100%",
    height: heightPercentage(812),
    position: "absolute"
  }
});

export default ReportSeasonView;
