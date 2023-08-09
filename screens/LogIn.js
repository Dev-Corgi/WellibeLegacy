import * as React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Border, FontSize, FontFamily, Color} from '../GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import { heightPercentage } from "../ResponsiveSize";
const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login_view}>
      <Image
        style={styles.login_background}
        resizeMode="cover"
        source={require('../assets/img-loginbackground.png')}
      />
      <View style={styles.login_foregound} />
      <Text style={styles.login_subtext}>{`일상을 바꾸는
작은 습관`}</Text>
      <View style={styles.login_loginbuttonset}>
        <TouchableOpacity
          style={styles.login_loginbuttonlayout}
          onPress={() => {
            navigation.navigate('Join1');
          }}>
          <View
            style={[styles.login_kakaobuttoncolor, styles.login_buttonbackgroundposition]}
          />
          <Text style={[styles.login_kakaoButtonTextColor, styles.login_loginButtonTextTypo]}>
            카카오 로그인
          </Text>
          <Image
            style={styles.login_kakaologo}
            resizeMode="cover"
            source={require('../assets/loginbutton-logo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login_loginbuttonlayout}
          onPress={() => {
            navigation.navigate('Join1');
          }}>
          <View
            style={[styles.login_appleButtonBackground, styles.login_buttonbackgroundposition]}
          />
          <Text style={[styles.login_appleButtonTextColor, styles.login_loginButtonTextTypo]}>
            Apple로 로그인
          </Text>
          <Image
            style={styles.login_applelogo}
            resizeMode="cover"
            source={require('../assets/loginbutton-logo1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login_loginbuttonlayout}
          onPress={() => {
            navigation.navigate('Join1');
          }}>
          <View
            style={[styles.login_googlebuttonBackground, styles.login_buttonbackgroundposition]}
          />
          <Text style={[styles.loginbuttonText2, styles.loginbuttonTypo]}>
            구글로 로그인
          </Text>
          <Image
            style={styles.login_googlelogo}
            resizeMode="cover"
            source={require('../assets/loginbutton-logo2.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login_loginbuttonlayout}
          onPress={() => {
            navigation.navigate('Join1');
          }}>
          <View
            style={[styles.login_googlebuttonBackground, styles.login_buttonbackgroundposition]}
          />
          <Text style={[styles.login_InstaButtonTextColor, styles.loginbuttonTypo]}>
            인스타그램으로 로그인
          </Text>
          <Image
            style={styles.login_instalogo}
            resizeMode="cover"
            source={require('../assets/loginbutton-logo3.png')}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={[styles.imgLogotextwhiteIcon, styles.loginbuttonIconLayout]}
        resizeMode="cover"
        source={require('../assets/img-logotextwhite.png')}
      />
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require('../assets/line1.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginbuttonLayout: {
    height: heightPercentage(57),
    alignSelf: 'stretch',
  },
  login_buttonbackgroundposition: {
    bottom: '0%',
    top: '0%',
    height: '100%',
    borderRadius: Border.br_xs,
    left: '0%',
    right: '0%',
    position: 'absolute',
    width: '100%',
  },
  login_loginButtonTextTypo: {
    fontSize: FontSize.font_size,
    textAlign: 'center',
    fontFamily: FontFamily.Pretendard_Bold,
  },
  loginbuttonIconLayout: {
    height: heightPercentage(22),
    position: 'absolute',
  },
  loginbuttonTypo: {
    color: Color.black,
    fontSize: FontSize.font_size,
    marginTop: heightPercentage(-11),
    textAlign: 'left',
    fontFamily: FontFamily.Pretendard_Bold,
    
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  login_background: {
    marginLeft: heightPercentage(-270.5),
    width: heightPercentage(541),
    left: '50%',
    top: heightPercentage(0),
    position: 'absolute',
    height: '100%',
  },
  login_foregound: {
    backgroundColor: 'rgba(244, 183, 17, 0.6)',
    position: 'absolute',
    height: "100%",
    width: '100%',
  },
  login_subtext: {
    top: heightPercentage(145),
    fontSize: FontSize.font4_size,
    lineHeight: heightPercentage(34),
    textAlign: 'left',
    fontFamily: FontFamily.Pretendard_Bold,
    
    color: Color.white,
    left: heightPercentage(28),
    position: 'absolute',
  },
  login_kakaobuttoncolor: {
    backgroundColor: Color.gold,
  },
  login_kakaoButtonTextColor: {
    color: 'rgba(0, 0, 0, 0.85)',
  },
  login_kakaologo: {
    top: heightPercentage(19),
    width: heightPercentage(21),
    height: heightPercentage(20),
    left: heightPercentage(18),
    position: 'absolute',
  },
  loginbuttonKakao: {
    backgroundColor: Color.gold,
  },
  login_loginbuttonlayout: {
    height: heightPercentage(57),
    alignSelf: 'stretch',
    marginBottom: heightPercentage(12),
    height: heightPercentage(57),
    alignSelf: 'stretch',
    borderRadius: Border.br_xs,
    alignItems: "center",
    justifyContent: "center"
  },

  login_appleButtonBackground: {
    backgroundColor: Color.black,
  },
  login_appleButtonTextColor: {
    color: Color.white,
  },
  login_applelogo: {
    height: heightPercentage(22),
    position: 'absolute',
    left: heightPercentage(20),
    width: heightPercentage(18),
    top: heightPercentage(17),
  },
  loginbuttonApple: {
    height: heightPercentage(57),
    alignSelf: 'stretch',
    marginTop: heightPercentage(12),
    height: heightPercentage(57),
    alignSelf: 'stretch',
  },
  login_googlebuttonBackground: {
    backgroundColor: Color.white,
  },
  loginbuttonText2: {
    marginLeft: heightPercentage(-43.5),
  },
  login_googlelogo: {
    left: heightPercentage(17),
    width: heightPercentage(25),
    height: heightPercentage(25),
    top: heightPercentage(17),
    position: 'absolute',
  },
  login_InstaButtonTextColor: {
    marginLeft: heightPercentage(-70.5),
  },
  login_instalogo: {
    height: heightPercentage(22),
    position: 'absolute',
    top: heightPercentage(18),
    width: heightPercentage(22),
    left: heightPercentage(18),
  },
  login_loginbuttonset: {
    bottom: heightPercentage(36),
    width:heightPercentage(380),
    alignItems: 'center',
    position: 'absolute',
  },
  imgLogotextwhiteIcon: {
    top: heightPercentage(80),
    width: heightPercentage(126),
    left: heightPercentage(28),
    height: heightPercentage(22),
  },
  lineIcon: {
    top: heightPercentage(126),
    left: heightPercentage(29),
    width: heightPercentage(35),
    height: heightPercentage(1),
    position: 'absolute',
  },
  login_view: {
    backgroundColor: Color.gray_200,
    flex: 1,
    overflow: 'hidden',
    height: heightPercentage(812),
    width: '100%',
    alignItems: "center"
  },
});

export default LogIn;
