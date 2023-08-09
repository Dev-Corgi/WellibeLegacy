import React, {useState} from 'react';
import Alart from '../component/Alart';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {FontFamily, FontSize, Color, Border} from '../GlobalStyles';
import {heightPercentage} from '../ResponsiveSize';
import CorgiSwitch from './CorgiSwitch';
const FaceDiagnosisViewMuscle = () => {
  const navigation = useNavigation();
  const [switchValue, setswitchValue] = useState(1);
  return (
    <View style={styles.view}>
      <View style={styles.background} />
      <Image
        style={styles.imgModelIcon}
        resizeMode="cover"
        source={require('../assets/img-model.png')}
      />
      <LinearGradient
        style={styles.foregroundBottom}
        locations={[0, 0.5, 1]}
        colors={[
          'rgba(7, 16, 39, 0.8)',
          'rgba(7, 16, 39, 0.32)',
          'rgba(7, 16, 39, 0)',
        ]}
        useAngle={true}
        angle={180}
      />
      <LinearGradient
        style={styles.foregroundTop}
        locations={[0, 1]}
        colors={['rgba(39, 39, 39, 0.4)', 'rgba(39, 39, 39, 0)']}
        useAngle={true}
        angle={180}
      />
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.buttonBackground}
          onPress={() => navigation.navigate('TrainingDetail')}
        />
        <Text style={styles.buttonText}>추천 트레이닝 플랜보기</Text>
      </View>

      {switchValue == 1 ? (
        <>
          <View style={styles.alartset}>
            <Alart text={'상승비익거근'}></Alart>
            <Alart text={'윗입술 올림근'}></Alart>
          </View>
          <Image
            style={styles.imgFaceframeIcon}
            resizeMode="cover"
            source={require('../assets/img-faceframe.png')}
          />
          <Text
            style={
              styles.maintext
            }>{`총 3 군데의 근육이 약해져 있어요\n개선을 위한 트레이닝 플랜을 맞춰드릴게요`}</Text>
        </>
      ) : (
        <>
          <View style={[styles.alartset]}>
            <Alart text={'얼굴 길이'}></Alart>
            <Alart text={'눈썹'}></Alart>
            <Alart text={'기울기'}></Alart>
          </View>

          <View style={styles.sizelayer}>
            <Image
              style={styles.sizelineIcon}
              resizeMode="cover"
              source={require('../assets/sizeline.png')}
            />
            <View style={[styles.sizerect, styles.sizerectLayout]}>
              <View style={[styles.sizerectChild, styles.sizerectLayout]} />
              <Text style={[styles.text1, styles.textTypo1]}>13.5</Text>
            </View>
            <Image
              style={styles.unionIcon}
              resizeMode="cover"
              source={require('../assets/union.png')}
            />
            <View style={[styles.sizerect1, styles.sizerectPosition]}>
              <View style={[styles.sizerectChild, styles.sizerectLayout]} />
              <Text style={[styles.text2, styles.textTypo1]}>24.5</Text>
            </View>
            <Image
              style={styles.unionIcon2}
              resizeMode="cover"
              source={require('../assets/union.png')}
            />
            <View style={[styles.sizerect2, styles.sizerectPosition]}>
              <View style={[styles.sizerectChild, styles.sizerectLayout]} />
              <Text style={[styles.text2, styles.textTypo1]}>24.5</Text>
            </View>
            <Image
              style={styles.sizelineIcon2}
              resizeMode="cover"
              source={require('../assets/sizeline.png')}
            />
            <View style={[styles.sizerect3, styles.sizerectLayout]}>
              <View style={[styles.sizerectChild, styles.sizerectLayout]} />
              <Text style={[styles.text1, styles.textTypo1]}>13.5</Text>
            </View>
          </View>
          <Image
            style={styles.pincirclelayerIcon}
            resizeMode="cover"
            source={require('../assets/pincirclelayer.png')}
          />
          <Text style={[styles.maintext2]}>{`개선이 필요한 부분을 위주로
트레이닝 플랜을 추천해 드릴게요`}</Text>
        </>
      )}

      <Image
        style={styles.imgGridframeIcon}
        resizeMode="cover"
        source={require('../assets/img-gridframe.png')}
      />
      <Image
        style={[styles.icTransparencybuttonIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require('../assets/ic-transparencybutton.png')}
      />
      <CorgiSwitch
        switchframestyle={{
          height: heightPercentage(46),
          position: 'absolute',
          marginLeft: heightPercentage(-123.),
          top: heightPercentage(47),
          width: heightPercentage(246),
          left: '50%',
		  backgroundColor: "rgba(7,16,39,0.1)",
		  borderRadius:Border.br_11xl
        }}
        switchstyle={{
		  margin:2,
          position: 'absolute',
          borderRadius: Border.br_11xl,
          backgroundColor: Color.white,
          height: heightPercentage(40),
          top: 0,
		  left:0,
          width: '50%',
        }}
        text1style={{
          text: '표정근육',
          color: Color.navy,
          textAlign: 'center',
          fontFamily: FontFamily.Pretendard_Bold,
          fontSize: FontSize.font_size,
		  marginTop: heightPercentage(11)
        }}
        text2style={{
			text: '표정 비대칭',
			color: Color.gainsboro,
			textAlign: 'center',
			fontFamily: FontFamily.Pretendard_Bold,
			fontSize: FontSize.font_size,
			marginTop: heightPercentage(11)
        }}
        output={setswitchValue}></CorgiSwitch>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    right: heightPercentage(16),
    position: 'absolute',
  },
  switchframeLayout: {
    height: heightPercentage(46),
    position: 'absolute',
  },
  switchPosition: {
    height: heightPercentage(40),
    width: '52.44%',
    marginTop: heightPercentage(-20),
    top: '50%',
    position: 'absolute',
  },
  background: {
    width: '99.73%',
    right: '0.27%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  imgModelIcon: {
    marginLeft: heightPercentage(-260.5),
    top: heightPercentage(105),
    width: heightPercentage(521),
    height: heightPercentage(871),
    left: '50%',
    position: 'absolute',
  },
  foregroundBottom: {
    backgroundColor: 'transparent',
    top: '50%',
    position: 'absolute',
    marginTop: heightPercentage(-406),
    right: heightPercentage(0),
    left: heightPercentage(0),
    height: heightPercentage(158),
  },
  foregroundTop: {
    backgroundColor: 'transparent',
    top: '50%',
    position: 'absolute',
    marginTop: heightPercentage(406),
    right: heightPercentage(-375),
    left: heightPercentage(375),
    height: heightPercentage(111),
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  buttonBackground: {
    backgroundColor: Color.pointY,
    borderRadius: Border.br_base,
    right: '0%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  buttonText: {
    marginTop: heightPercentage(-10),
    marginLeft: heightPercentage(-72.5),
    width: heightPercentage(146),
    height: heightPercentage(40),
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    color: Color.navy,
    fontFamily: FontFamily.Pretendard_Bold,
    fontSize: FontSize.font_size,
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  button: {
    top: heightPercentage(719),
    right: heightPercentage(24),
    height: heightPercentage(57),
    left: heightPercentage(24),
    position: 'absolute',
  },
  alartShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: heightPercentage(0),
      height: heightPercentage(1),
    },
    shadowColor: 'rgba(0, 0, 0, 0.02)',
    borderRadius: Border.br_base,
    right: '0%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    width: '100%',
    backgroundColor: Color.white,
  },
  alartText: {
    height: heightPercentage(20),
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.Pretendard_Bold,
    fontSize: FontSize.font_size,
    marginLeft: heightPercentage(-38),
    width: heightPercentage(83),
    color: Color.navy,
    marginTop: heightPercentage(-10),
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  icInfoIcon: {
    marginTop: heightPercentage(-6),
    width: heightPercentage(12),
    height: heightPercentage(12),
    top: '50%',
  },
  icRedalertIcon: {
    marginTop: heightPercentage(-9),
    left: heightPercentage(15),
    width: heightPercentage(18),
    height: heightPercentage(16),
    top: '50%',
    position: 'absolute',
  },
  alart1: {
    width: heightPercentage(160),
    height: heightPercentage(44),
  },
  alartText1: {
    height: heightPercentage(20),
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.Pretendard_Bold,
    fontSize: FontSize.font_size,
    marginLeft: heightPercentage(-40),
    width: heightPercentage(87),
    color: Color.navy,
    marginTop: heightPercentage(-10),
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  alart2: {
    width: heightPercentage(164),
    marginLeft: heightPercentage(12),
    height: heightPercentage(44),
  },
  alartset: {
    top: heightPercentage(651),
    flexDirection: 'row',
    alignItems: 'center',
    left: heightPercentage(24),
    position: 'absolute',
  },
  imgGridframeIcon: {
    marginTop: heightPercentage(-226),
    marginLeft: heightPercentage(-172.5),
    width: heightPercentage(345),
    height: heightPercentage(419),
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  imgFaceframeIcon: {
    marginTop: heightPercentage(-157),
    marginLeft: heightPercentage(-106.5),
    width: heightPercentage(216),
    height: heightPercentage(310),
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  icTransparencybuttonIcon: {
    top: heightPercentage(16),
    width: heightPercentage(44),
    height: heightPercentage(44),
  },
  maintext: {
    marginLeft: heightPercentage(-127.5),
    top: heightPercentage(109),
    letterSpacing: -0.5,
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.Pretendard_Medium,
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    alignItems: 'center',
    color: Color.navy,
    left: '50%',
    position: 'absolute',
  },
  switchframeBackground: {
    marginTop: heightPercentage(-23),
    borderRadius: Border.br_11xl,
    backgroundColor: Color.navy,
    opacity: 0.1,
    right: '0%',
    height: heightPercentage(46),
    top: '50%',
    left: '0%',
    width: '100%',
  },
  switchBackground: {
    borderRadius: Border.br_xl,
    left: '1.22%',
    right: '46.34%',
    height: heightPercentage(40),
    width: '52.44%',
    marginTop: heightPercentage(-20),
    backgroundColor: Color.white,
  },
  text: {
    marginLeft: heightPercentage(-35.5),
    marginTop: heightPercentage(-10),
    color: Color.gainsboro,
    width: heightPercentage(73),
  },
  switch2Text: {
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  switch2: {
    left: '47.56%',
    height: heightPercentage(40),
    width: '52.44%',
    marginTop: heightPercentage(-20),
    right: '0%',
  },
  switch1Text: {
    marginLeft: heightPercentage(-29.5),
    width: heightPercentage(56),
    color: Color.navy,
    marginTop: heightPercentage(-10),
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  switch1: {
    left: '1.22%',
    right: '46.34%',
    height: heightPercentage(40),
    width: '52.44%',
    marginTop: heightPercentage(-20),
  },
  switchframe: {
    marginLeft: heightPercentage(-123.5),
    top: heightPercentage(47),
    width: heightPercentage(246),
    left: '50%',
  },
  view: {
    flex: 1,
    height: heightPercentage(812),
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.white,
  },
  maintext2: {
    marginLeft: heightPercentage(-99),
    top: heightPercentage(109),
    letterSpacing: -0.5,
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    textAlign: 'center',
    color: Color.navy,
    fontFamily: FontFamily.Pretendard_Medium,
    left: '50%',
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    alignItems: 'center',
  },
  sizelayer: {
    marginLeft: heightPercentage(-173.5),
    top: heightPercentage(186),
    width: heightPercentage(348),
    height: heightPercentage(405),
    left: '50%',
    position: 'absolute',
  },
  sizelineIcon: {
    left: heightPercentage(44),
    top: heightPercentage(30),
    width: heightPercentage(102),
    height: heightPercentage(4),
    position: 'absolute',
  },
  sizelineIcon2: {
    left: heightPercentage(203),
    top: heightPercentage(30),
    width: heightPercentage(102),
    height: heightPercentage(4),
    position: 'absolute',
  },
  sizerect: {
    marginLeft: heightPercentage(-107),
    left: '50%',
  },
  sizerectLayout: {
    height: heightPercentage(22),
    width: heightPercentage(55),
    top: heightPercentage(0),
    position: 'absolute',
  },
  unionIcon: {
    left: heightPercentage(28),
    top: heightPercentage(68),
    width: heightPercentage(4),
    height: heightPercentage(309),
    position: 'absolute',
  },
  unionIcon2: {
    left: heightPercentage(321),
    top: heightPercentage(68),
    width: heightPercentage(4),
    height: heightPercentage(309),
    position: 'absolute',
  },
  sizerect1: {
    marginLeft: heightPercentage(-174),
  },
  sizerect2: {
    marginLeft: heightPercentage(119),
  },
  sizerect3: {
    marginLeft: heightPercentage(50),
    left: '50%',
  },
  sizerectPosition: {
    top: heightPercentage(383),
    height: heightPercentage(22),
    width: heightPercentage(55),
    left: '50%',
    position: 'absolute',
  },
  pincirclelayerIcon: {
    marginLeft: heightPercentage(-128.5),
    top: heightPercentage(240),
    width: heightPercentage(257),
    height: heightPercentage(342),
    left: '50%',
    position: 'absolute',
  },
  sizerectChild: {
    borderRadius: Border.br_2xs,
    left: heightPercentage(0),
    backgroundColor: Color.white,
  },
  text1: {
    marginLeft: heightPercentage(-11.5),
    letterSpacing: -0.2,
    fontSize: FontSize.font3_size,
    top: '50%',
    marginTop: heightPercentage(-8),
    width: 'auto',
    height: 'auto',
  },
  textTypo1: {
    textAlign: 'center',
    color: Color.navy,
    fontFamily: FontFamily.Pretendard_Regular,
    left: '50%',
    position: 'absolute',
  },
  text2: {
    marginLeft: heightPercentage(-12.5),
    lineHeight: heightPercentage(18),
    letterSpacing: -0.2,
    fontSize: FontSize.font3_size,
    top: heightPercentage(7),
  },
});

export default FaceDiagnosisViewMuscle;
