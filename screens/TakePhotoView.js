import * as React from "react";
import { StyleSheet, View, Image, Text,TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { heightPercentage} from "../ResponsiveSize";
import { useNavigation } from "@react-navigation/native";

const TakePhotoView = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <View style={styles.background} />
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/img-model.png")}
      />
      <Image
        style={[styles.imgColumngridIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/img-columngrid.png")}
      />
      <Image
        style={[styles.imgRectlayerIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/img-rectlayer.png")}
      />
      <LinearGradient
        style={[styles.foreground2, styles.foregroundPosition]}
        locations={[0, 1]}
        colors={["rgba(7, 16, 39, 0)", "rgba(7, 16, 39, 0.7)"]}
        useAngle={true}
        angle={180}
      />
      <LinearGradient
        style={[styles.foreground1, styles.foregroundPosition]}
        locations={[0, 0.52, 1]}
        colors={[
          "rgba(7, 16, 39, 0.8)",
          "rgba(7, 16, 39, 0.32)",
          "rgba(7, 16, 39, 0)",
        ]}
        useAngle={true}
        angle={180}
      />
      <Image
        style={[styles.imgFacelayerIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/img-facelayer.png")}
      />
      <TouchableOpacity
      style={styles.buttonIcon}
      onPress={() => navigation.navigate("PhotoCheckView")}
      >
      <Image
      style = {styles.buttonimg}
        resizeMode="cover"
        source={require("../assets/button.png")}
      />
      </TouchableOpacity>
      <Text style={styles.subtext}>
        제시된 가이드에 얼굴을 맞춰주세요
      </Text>
      <Text style={[styles.maintext, styles.subtextFlexBox]}>
        자연스러운 표정을 지어주세요
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  foregroundPosition: {
    backgroundColor: "transparent",
    left: heightPercentage(0),
    right: heightPercentage(0),
    position: "absolute",
  },
  subtextFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.Pretendard_Bold,
    left: "50%",
    position: "absolute",
  },
  background: {
    height: "100%",
    width: "99.73%",
    top: "0%",
    right: "0.27%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    marginLeft: heightPercentage(-260.5),
    top: heightPercentage(105),
    width: heightPercentage(521),
    height: heightPercentage(871),
    left: "50%"
  },
  imgColumngridIcon: {
    marginLeft: heightPercentage(-148.5),
    top: heightPercentage(157),
    width: heightPercentage(297),
    height: heightPercentage(523),
  },
  imgRectlayerIcon: {
    marginLeft: heightPercentage(-166.5),
    top: heightPercentage(161),
    width: heightPercentage(333),
    height: heightPercentage(413),
  },
  foreground2: {
    top: heightPercentage(680),
    height: heightPercentage(132),
  },
  foreground1: {
    top: heightPercentage(0),
    height: heightPercentage(158),
  },
  imgFacelayerIcon: {
    marginLeft: heightPercentage(-142.5),
    top: heightPercentage(205),
    width: heightPercentage(286),
    height: heightPercentage(354),
  },
  buttonIcon: {
    left: "50%",
    position: "absolute",
    marginLeft: heightPercentage(-54.5),
    top: heightPercentage(688),
    width: heightPercentage(109),
    height: heightPercentage(109),
    alignItems: "center",
    justifyContent: "center"
  },
  buttonimg:{
    width: heightPercentage(109),
    height: heightPercentage(109),
  },
  subtext: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.Pretendard_Bold,
    left: "50%",
    position: "absolute",
    marginLeft: heightPercentage(-91.5),
    top: heightPercentage(90),
    fontSize: FontSize.font2_size,
    letterSpacing: -0.6,
    lineHeight: heightPercentage(22),
    
    color: Color.gainsboro,
  },
  maintext: {
    marginLeft: heightPercentage(-94.5),
    top: heightPercentage(67),
    fontSize: FontSize.font_size,
    color: Color.white,
    width: heightPercentage(188),
  },
  view: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: heightPercentage(812),
    overflow: "hidden",
  },
});

export default TakePhotoView;
