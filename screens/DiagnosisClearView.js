import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { heightPercentage} from "../ResponsiveSize";
import Button1 from "../component/Button1";
const DiagnosisClearView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={styles.button}>
        <Button1 text = {"진단보러가기"} route={"FaceDiagnosisViewMuscle"}></Button1>
      </View>
      <Text style={[styles.maintext, styles.textPosition]}>
        진단이 완료되었습니다.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    left: "50%",
    position: "absolute",
  },
  buttonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_base,
    backgroundColor: Color.navy,
    position: "absolute",
    width: "100%",
  },
  text: {
    marginTop: heightPercentage(-5.5),
    marginLeft: heightPercentage(-41.5),
    top: "50%",
    fontSize: FontSize.font_size,
    lineHeight: heightPercentage(26),
    
    fontFamily: FontFamily.Pretendard_Regular,
    color: Color.white,
    textAlign: "left",
  },
  button: {
    borderRadius: Border.br_base,
    overflow: "hidden",
    top: heightPercentage(719),
    height: heightPercentage(58),
    width: heightPercentage(360),
    left: "50%",
    marginLeft: heightPercentage(-180), 
    position: "absolute",
  },
  maintext: {
    marginLeft: heightPercentage(-122),
    top: heightPercentage(391),
    fontSize: 25,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    backgroundColor: Color.white,
    flex: 1,
    height: heightPercentage(812),
    overflow: "hidden",
    width: "100%",
  },
});

export default DiagnosisClearView;
