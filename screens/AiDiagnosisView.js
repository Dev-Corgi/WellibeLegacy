import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";
import { heightPercentage} from "../ResponsiveSize";

const AiDiagnosisView = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.pressable}
      onPress={() => navigation.navigate("DiagnosisClearView")}
    >
      <Image
        style={styles.imgLoadingIcon}
        resizeMode="cover"
        source={require("../assets/img-loading.png")}
      />
      <Text style={styles.maintext}>
        AI가 진단중입니다.
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imgLoadingIcon: {
    position: "absolute",
    left: "50%",
    marginLeft: heightPercentage(-69.5),
    top: heightPercentage(305),
    width: heightPercentage(138),
    height: heightPercentage(138),
  },
  maintext: {
    left: "50%",
    position: "absolute",
    marginLeft: heightPercentage(-127),
    top: heightPercentage(196),
    fontSize: 32,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: heightPercentage(812),
    overflow: "hidden",
  },
});

export default AiDiagnosisView;
