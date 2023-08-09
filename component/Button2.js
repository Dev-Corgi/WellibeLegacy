const { heightPercentage } = require("../ResponsiveSize");
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
const Button2 = ({text,route}) => {
    const navigation = useNavigation();
    return (
<TouchableOpacity
style={styles.button}
onPress={() => navigation.navigate(route)}
>
<Text style={styles.buttonText}>{text}</Text>
</TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
      button: {
        width: "100%",
        height: "100%",
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: Color.pointY,
      },
      buttonText: {
        color: Color.navy,
        textAlign: "center",
        fontFamily: FontFamily.Pretendard_Bold,
        fontSize: FontSize.font_size,
      },
  });

  export default Button2
