const Stack = createNativeStackNavigator();
import React,{useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//blsfdeeee
import { useFonts } from 'expo-font';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import AiDiagnosisView from './screens/AiDiagnosisView';
import CheckStatusScene from './screens/CheckStatusScene';
import DiagnosisClearView from './screens/DiagnosisClearView';
import FaceDiagnosisViewMuscle from './screens/FaceDiagnosisViewMuscle';
import Join1 from './screens/Join1';
import Join2 from './screens/Join2';
import Join3 from './screens/Join3';
import JoinClearView from './screens/JoinClearView';
import LogIn from './screens/LogIn';
import MainHomeView from './screens/MainHomeView';
import PhotoBeginView from './screens/PhotoBeginView';
import PhotoCheckView from './screens/PhotoCheckView';
import ReportSeasonView from './screens/ReportSeasonView';
import TakePhotoView from './screens/TakePhotoView';
import TrainingDetail from './screens/TrainingDetail';
import IntroView from './screens/VirtualCommunicationView';
import CommunicationMain from './screens/CommunicationMain';
// import { heightPercentage,widthPercentage } from "../ResponsiveSize";

const App = () => {

  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const [loaded] = useFonts({
    "Pretendard-Thin": require("./assets/fonts/Pretendard-Thin.otf"),
    "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.otf"),
    "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.otf"),
    "Pretendard-SemiBold": require("./assets/fonts/Pretendard-SemiBold.otf"),
    "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.otf"),
    "Pretendard-ExtraBold": require("./assets/fonts/Pretendard-ExtraBold.otf")
  });

  useEffect(() => {
    setIsLoading(false); // Mark loading as false when done
  }, []);

  return (
    <>
      <NavigationContainer>
      {loaded ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="LogIn"
            component={LogIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="IntroView"
            component={IntroView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AiDiagnosisView"
            component={AiDiagnosisView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Join3"
            component={Join3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Join2"
            component={Join2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Join1"
            component={Join1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CheckStatusScene"
            component={CheckStatusScene}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DiagnosisClearView"
            component={DiagnosisClearView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FaceDiagnosisViewMuscle"
            component={FaceDiagnosisViewMuscle}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MainHomeView"
            component={MainHomeView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PhotoBeginView"
            component={PhotoBeginView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PhotoCheckView"
            component={PhotoCheckView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TakePhotoView"
            component={TakePhotoView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TrainingDetail"
            component={TrainingDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="JoinClearView"
            component={JoinClearView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="VirtualCommunicationView"
            component={IntroView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CommunicationMain"
            component={CommunicationMain}
            options={{headerShown: false}}
          />
                    <Stack.Screen
            name="ReportSeasonView"
            component={ReportSeasonView}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
    </>
  );
};

export default App;
  