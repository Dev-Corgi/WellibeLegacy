import React,{useState} from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { heightPercentage} from "../ResponsiveSize";
import ProgressBar from "../component/CorgiUI/ProgressBar";
// import CorgiView from "../component/CorgiView";
import MovingMotion from "../motion/MovingMotion";
// import ButtonController from "../controller/ButtonController";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';


const CheckStatusScene = () => {
	
	const [count, setCount] = useState(1);
  
	const translateX = useSharedValue(0);


const handlePress = (direction) => {
  translateX.value = withTiming(translateX.value - direction*heightPercentage(375), {
    duration: 500,
    easing: Easing.bezier(0.42, 0, 0.58, 1)
  });
};

const boxAnimatedStyle = useAnimatedStyle(() => {
  return {
    transform: [
      { translateX: translateX.value },
    ],
  };
});

	const navigation = useNavigation();
	// const buttoncontroller = new ButtonController(0);

	return (
		<View style={styles.splash}>
			<Text style={[styles.text, styles.textTypo2]}>{`웰리비 님은
무엇이 고민인가요?`}</Text>
	{/* <Image
		style={[styles.splashChild, styles.splashPosition]}
		resizeMode="cover"
		source={require("../assets/vector-142.png")}
	/>
	<Image
		style={[styles.splashItem, styles.splashPosition]}
		resizeMode="cover"
		source={require("../assets/vector-1434.png")}
	/> */}

   <ProgressBar barStyle={styles.bar} backbarStyle={styles.backbar} totalStep={5} nowStep={count}></ProgressBar>


	<Text style={styles.text1}>중복선택도 가능해요</Text>
	<View style={styles.buttonset}>
		<View style={[styles.buttonNext, styles.buttonLayout]}>
      			<TouchableOpacity
				style={[styles.buttonNextChild, styles.buttonChildPosition]}
				onPress={() => {
          if(count == 5){navigation.navigate("PhotoBeginView")}
          else{handlePress(1); setCount((prev) => ++prev)}
        }}
			/>
			<Text style={[styles.text2, styles.textIconPosition]}>다음</Text>
		</View>
		<View style={[styles.buttonBack, styles.buttonLayout]}>
			<TouchableOpacity style={[styles.buttonBackChild, styles.buttonChildPosition]}
      				onPress={() => {
                if(count == 1){}
                else{handlePress(-1); setCount((prev) => --prev)}
              }} />
			<Text style={[styles.text3, styles.textIconPosition]}>뒤로</Text>
		</View>
	</View>

	{/* <CorgiView styles={styles.checklists} inputcontroller = {buttoncontroller} motions = {[new MovingMotion(0,2,[0.42, 0, 0.58, 1],100,0)]}>
		<View style={styles.faceset}>
			<Text style={[styles.text4, styles.textIconPosition]}>{`얼굴 `}</Text>
			<View style={[styles.selectionset, styles.selectionsetPosition]}>
				<View style={styles.selectionLayout1}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						이마에 가로주름이 있어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						미간에 세로주름이 있어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						콧등에 잔주름이 있어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>해당없음</Text>
				</View>
			</View>
			<Image
				style={[styles.icFace1Icon, styles.textIconPosition]}
				resizeMode="cover"
				source={require("../assets/ic-face-1.png")}
			/>
		</View>
		<View style={[styles.eyeset, styles.eyesetSpaceBlock]}>
			<Text style={[styles.text9, styles.textTypo]}>눈</Text>
			<View style={[styles.selectionset1, styles.selectionsetPosition]}>
				<View style={styles.selectionLayout1}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						눈꺼풀에 잔주름이 있어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						눈 밑 처짐이나 다크서클이 있어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						눈가에 주름이 있어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						윙크가 안 되거나 한쪽만 돼요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>해당없음</Text>
				</View>
			</View>
			<Image
				style={[styles.icEye1Icon, styles.textIconPosition]}
				resizeMode="cover"
				source={require("../assets/ic-eye-1.png")}
			/>
		</View>
		<View style={[styles.lipset, styles.eyesetSpaceBlock]}>
			<View style={[styles.selectionset2, styles.selectionsetPosition]}>
				<View style={styles.selectionLayout1}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						입술색이 칙칙해요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text16, styles.textTypo1]}>
						입꼬리가 쳐져 있거나 삐뚤어졌어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>해당없음</Text>
				</View>
			</View>
			<Text style={[styles.text18, styles.textTypo]}>입</Text>
			<Image
				style={[styles.icLips1Icon, styles.textIconPosition]}
				resizeMode="cover"
				source={require("../assets/ic-lips-1.png")}
			/>
		</View>
		<View style={[styles.cheakset, styles.eyesetSpaceBlock]}>
			<Text style={[styles.text18, styles.textTypo]}>볼</Text>
			<Image
				style={[styles.icLips1Icon, styles.textIconPosition]}
				resizeMode="cover"
				source={require("../assets/ic-cheak-1.png")}
			/>
			<View style={[styles.selectionset2, styles.selectionsetPosition]}>
				<View style={styles.selectionLayout1}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						눈꺼풀이 푸석푸석한 느낌이에요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text16, styles.textTypo1]}>
						팔자주름이 짙어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						웃을 때 표정이 굳어져요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						양 옆에 피부가 쳐져 있어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						음식을 먹을 때 입 안쪽만 씹어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>해당없음</Text>
				</View>
			</View>
		</View>
		<View style={[styles.lipset, styles.eyesetSpaceBlock]}>
			<View style={[styles.selectionset2, styles.selectionsetPosition]}>
				<View style={styles.selectionLayout}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						옆 얼굴선이 흐트러져있어요
					</Text>
				</View>
				<View style={[styles.selection24, styles.selectionLayout]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text16, styles.textTypo1]}>
						이중턱이 신경쓰여요
					</Text>
				</View>
				<View style={[styles.selection24, styles.selectionLayout]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>해당없음</Text>
				</View>
			</View>
			<Text style={[styles.text18, styles.textTypo]}>턱</Text>
			<Image
				style={[styles.icLips1Icon, styles.textIconPosition]}
				resizeMode="cover"
				source={require("../assets/ic-tusk-1.png")}
			/>
		</View>
	</CorgiView> */}

		<Animated.View style={[styles.checklists,boxAnimatedStyle]}>
		<View style={styles.faceset}>
			<Text style={[styles.text4, styles.textIconPosition]}>{`얼굴 `}</Text>
			<View style={[styles.selectionset, styles.selectionsetPosition]}>
				<View style={styles.selectionLayout1}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						이마에 가로주름이 있어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						미간에 세로주름이 있어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						콧등에 잔주름이 있어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>해당없음</Text>
				</View>
			</View>
			<Image
				style={[styles.icFace1Icon, styles.textIconPosition]}
				resizeMode="cover"
				source={require("../assets/ic-face-1.png")}
			/>
		</View>
		<View style={[styles.eyeset, styles.eyesetSpaceBlock]}>
			<Text style={[styles.text9, styles.textTypo]}>눈</Text>
			<View style={[styles.selectionset1, styles.selectionsetPosition]}>
				<View style={styles.selectionLayout1}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						눈꺼풀에 잔주름이 있어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						눈 밑 처짐이나 다크서클이 있어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						눈가에 주름이 있어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						윙크가 안 되거나 한쪽만 돼요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>해당없음</Text>
				</View>
			</View>
			<Image
				style={[styles.icEye1Icon, styles.textIconPosition]}
				resizeMode="cover"
				source={require("../assets/ic-eye-1.png")}
			/>
		</View>
		<View style={[styles.lipset, styles.eyesetSpaceBlock]}>
			<View style={[styles.selectionset2, styles.selectionsetPosition]}>
				<View style={styles.selectionLayout1}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						입술색이 칙칙해요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text16, styles.textTypo1]}>
						입꼬리가 쳐져 있거나 삐뚤어졌어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>해당없음</Text>
				</View>
			</View>
			<Text style={[styles.text18, styles.textTypo]}>입</Text>
			<Image
				style={[styles.icLips1Icon, styles.textIconPosition]}
				resizeMode="cover"
				source={require("../assets/ic-lips-1.png")}
			/>
		</View>
		<View style={[styles.cheakset, styles.eyesetSpaceBlock]}>
			<Text style={[styles.text18, styles.textTypo]}>볼</Text>
			<Image
				style={[styles.icLips1Icon, styles.textIconPosition]}
				resizeMode="cover"
				source={require("../assets/ic-cheak-1.png")}
			/>
			<View style={[styles.selectionset2, styles.selectionsetPosition]}>
				<View style={styles.selectionLayout1}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						눈꺼풀이 푸석푸석한 느낌이에요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text16, styles.textTypo1]}>
						팔자주름이 짙어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						웃을 때 표정이 굳어져요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						양 옆에 피부가 쳐져 있어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						음식을 먹을 때 입 안쪽만 씹어요
					</Text>
				</View>
				<View style={[styles.selection2, styles.selectionLayout1]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>해당없음</Text>
				</View>
			</View>
		</View>
		<View style={[styles.lipset, styles.eyesetSpaceBlock]}>
			<View style={[styles.selectionset2, styles.selectionsetPosition]}>
				<View style={styles.selectionLayout}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>
						옆 얼굴선이 흐트러져있어요
					</Text>
				</View>
				<View style={[styles.selection24, styles.selectionLayout]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text16, styles.textTypo1]}>
						이중턱이 신경쓰여요
					</Text>
				</View>
				<View style={[styles.selection24, styles.selectionLayout]}>
					<View style={styles.selection1Child} />
					<Text style={[styles.text5, styles.textTypo1]}>해당없음</Text>
				</View>
			</View>
			<Text style={[styles.text18, styles.textTypo]}>턱</Text>
			<Image
				style={[styles.icLips1Icon, styles.textIconPosition]}
				resizeMode="cover"
				source={require("../assets/ic-tusk-1.png")}
			/>
		</View>
	</Animated.View>
	</View>
	);
};

const styles = StyleSheet.create({
	textTypo2: {
		textAlign: "left",
		color: Color.navy,
		fontFamily: FontFamily.Pretendard_Bold,
		
		lineHeight: heightPercentage(34),
		fontSize: FontSize.font4_size,
	},
	splashPosition: {
		height: heightPercentage(3),
		maxWidth: "100%",
		top: heightPercentage(183),
		left: "0%",
		position: "absolute",
		overflow: "hidden",
	},
	buttonLayout: {
		width: "47.71%",
		top: heightPercentage(0),
		height: heightPercentage(57),
		position: "absolute",
	},
	buttonChildPosition: {
		borderRadius: Border.br_base,
		bottom: "0%",
		top: "0%",
		height: "100%",
		left: "0%",
		right: "0%",
		position: "absolute",
		width: "100%",
	},
	textIconPosition: {
		left: "50%",
		position: "absolute",
	},
	selectionsetPosition: {
		left: heightPercentage(0),
		right: heightPercentage(0),
		alignItems: "center",
		position: "absolute",
	},
	textTypo1: {
		top: "50%",
		marginTop: heightPercentage(-11),
		lineHeight: heightPercentage(26),
		fontSize: FontSize.font_size,
		textAlign: "left",
		fontFamily: FontFamily.Pretendard_Bold,
		
	},
	selectionLayout1: {
		height: heightPercentage(55),
		alignSelf: "stretch",
	},
	eyesetSpaceBlock: {
		marginLeft: heightPercentage(48),
		flex: 1,
	},
	textTypo: {
		marginLeft: heightPercentage(-26.5),
		left: "50%",
		textAlign: "left",
		color: Color.navy,
		fontFamily: FontFamily.Pretendard_Bold,
		
		fontSize: FontSize.font4_size,
		position: "absolute",
	},
	selectionLayout: {
		width: heightPercentage(327),
		height: heightPercentage(55),
	},
	text: {
		top: heightPercentage(60),
		left: heightPercentage(24),
		position: "absolute",
		textAlign: "left",
		color: Color.navy,
		fontFamily: FontFamily.Pretendard_Regular,
		
		lineHeight: heightPercentage(34),
		fontSize: FontSize.font2_size,
	},
	splashChild: {
		right: "0%",
		width: "100%",
		maxWidth: "100%",
		top: heightPercentage(183),
	},
	splashItem: {
		width: "23.6%",
		right: "76.4%",
	},
	text1: {
		top: heightPercentage(131),
		letterSpacing: -0.5,
		
		color: Color.grey,
		lineHeight: heightPercentage(26),
		fontSize: FontSize.font_size,
		textAlign: "left",
		fontFamily: FontFamily.Pretendard_Medium,
		left: heightPercentage(24),
		position: "absolute",
	},
	buttonNextChild: {
		backgroundColor: Color.navy,
	},
	text2: {
		color: Color.white,
		top: "50%",
		marginTop: heightPercentage(-11),
		lineHeight: heightPercentage(26),
		fontSize: FontSize.font_size,
		textAlign: "left",
		fontFamily: FontFamily.Pretendard_Bold,
		
		marginLeft: heightPercentage(-15),
		left: "50%",
	},
	buttonNext: {
		left: "52.29%",
		top: heightPercentage(0),
		right: "0%",
	},
	buttonBackChild: {
		backgroundColor: Color.lightGrey,
	},
	text3: {
		color: Color.mediumGrey,
		top: "50%",
		marginTop: heightPercentage(-11),
		lineHeight: heightPercentage(26),
		fontSize: FontSize.font_size,
		textAlign: "left",
		fontFamily: FontFamily.Pretendard_Bold,
		
		marginLeft: heightPercentage(-15),
		left: "50%",
	},
	buttonBack: {
		right: "52.29%",
		top: heightPercentage(0),
		left: "0%",
		width: "47.71%",
	},
	buttonset: {
		top: heightPercentage(719),
		right: heightPercentage(24),
		height: heightPercentage(57),
		left: heightPercentage(24),
		position: "absolute",
	},
	text4: {
		marginLeft: heightPercentage(-36.5),
		top: heightPercentage(3),
		textAlign: "left",
		color: Color.navy,
		fontFamily: FontFamily.Pretendard_Bold,
		
		lineHeight: heightPercentage(34),
		fontSize: FontSize.font4_size,
	},
	selection1Child: {
		borderRadius: Border.br_xs,
		backgroundColor: Color.extraLightGrey,
		bottom: "0%",
		top: "0%",
		height: "100%",
		left: "0%",
		right: "0%",
		position: "absolute",
		width: "100%",
	},
	text5: {
		left: heightPercentage(26),
		top: "50%",
		marginTop: heightPercentage(-5.5),
		color: Color.grey,
		position: "absolute",
	},
	selection2: {
		marginTop: heightPercentage(16),
	},
	selectionset: {
		top: heightPercentage(56),
	},
	icFace1Icon: {
		marginLeft: heightPercentage(11.5),
		width: heightPercentage(24),
		height: heightPercentage(22),
		top: heightPercentage(9),
	},
	faceset: {
		height: heightPercentage(324),
		flex: 1,
	},
	text9: {
		top: heightPercentage(0),
	},
	selectionset1: {
		top: heightPercentage(53),
	},
	icEye1Icon: {
		marginLeft: heightPercentage(0.5),
		width: heightPercentage(25),
		height: heightPercentage(14),
		top: heightPercentage(10),
	},
	eyeset: {
		height: heightPercentage(392),
	},
	text16: {
		left: heightPercentage(28),
		top: "50%",
		marginTop: heightPercentage(-5.5),
		color: Color.grey,
		position: "absolute",
	},
	selectionset2: {
		top: heightPercentage(58),
	},
	text18: {
		top: heightPercentage(5),
	},
	icLips1Icon: {
		marginLeft: heightPercentage(-1.5),
		width: heightPercentage(26),
		height: heightPercentage(26),
		top: heightPercentage(10),
	},
	lipset: {
		height: heightPercentage(255),
	},
	cheakset: {
		height: heightPercentage(468),
	},
	selection24: {
		marginTop: heightPercentage(16),
	},
	checklists: {
		top: heightPercentage(224),
		flexDirection: "row",
		alignItems: "top left",
		left: "50%",
		marginLeft : heightPercentage(-163.5),
		width: heightPercentage(1827),
		position: "absolute",
	},
	splash: {
		backgroundColor: Color.gray_200,
		height: heightPercentage(812),
		overflow: "hidden",
		width: "100%",
		flex: 1,
	},
  backbar:{
    width: "100%",
    height: heightPercentage(3),
    backgroundColor: Color.gray_300,
    top: heightPercentage(184),
    left:heightPercentage(0)
  },
  bar:{
    height: heightPercentage(3),
    backgroundColor: Color.pointY
  }
});

export default CheckStatusScene;
