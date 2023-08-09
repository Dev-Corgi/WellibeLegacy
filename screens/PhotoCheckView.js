import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";
import { heightPercentage} from "../ResponsiveSize";
import Button1 from "../component/Button1";
import Button2 from "../component/Button2";
const PhotoCheckView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Text style={styles.maintext}>촬영이 잘 되었나요?</Text>
      <Text style={styles.subtext}>이목구비가 잘 보이는지 확인해주세요</Text>

      <View style={styles.button1}>
        <Button1 text = {"다시 촬영할래요"} route={"TakePhotoView"}></Button1>
      </View>
      <View style={styles.button2}>
        <Button2 text = {"잘 되었어요"} route={"AiDiagnosisView"}></Button2>
      </View>
      <View style={styles.imgframe}>
        <Image
          style={styles.imgResultphotoframeIcon}
          resizeMode="cover"
          source={require("../assets/img-resultphotoframe.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    height: heightPercentage(57),
    right: heightPercentage(24),
    left: heightPercentage(24),
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_base,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textPosition: {
    left: "50%",
    top: "50%",
    marginTop: heightPercentage(-5.5),
    lineHeight: heightPercentage(26),
    fontSize: FontSize.font_size,
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Regular,
    
    position: "absolute",
  },
  maintext: {
    top: heightPercentage(60),
    fontSize: FontSize.font4_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Bold,
    
    left: heightPercentage(24),
    position: "absolute",
    color: Color.navy,
  },
  subtext: {
    top: heightPercentage(97),
    letterSpacing: -0.5,
    
    color: Color.grey,
    fontSize: FontSize.font5_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.Pretendard_Medium,
    left: heightPercentage(24),
    position: "absolute",
  },
  button2Child: {
    backgroundColor: Color.navy,
  },
  text: {
    marginLeft: heightPercentage(-50.5),
    color: Color.white,
  },
  button2: {
    borderRadius: Border.br_base,
    overflow: "hidden",
    top: heightPercentage(719),
    height: heightPercentage(58),
    width: heightPercentage(360),
    left: "50%",
    marginLeft: heightPercentage(-180), 
    position: "absolute",
    backgroundColor: Color.navy,
  },
  button1Child: {
    backgroundColor: Color.pointY,
  },
  text1: {
    marginLeft: heightPercentage(-36.5),
    color: Color.navy,
    left: "50%",
    top: "50%",
    marginTop: heightPercentage(-5.5),
  },
  button1: {
    top: heightPercentage(650),
    borderRadius: Border.br_base,
    overflow: "hidden",
    height: heightPercentage(58),
    width: heightPercentage(360),
    left: "50%",
    marginLeft: heightPercentage(-180), 
    position: "absolute",
    backgroundColor: Color.navy,
  },
  imgResultphotoframeIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  imgframe: {
    top: heightPercentage(140),
    borderRadius: 19,
    height: heightPercentage(468),
    right: heightPercentage(24),
    left: heightPercentage(24),
    position: "absolute",
    overflow: "hidden",
  },
  view: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: heightPercentage(812),
    overflow: "hidden",
    width: "100%",
  },
});

export default PhotoCheckView;
