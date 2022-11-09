import 'react-native-gesture-handler';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import AppStack from "./navigation/AppStack";
export default function App() {
  let [fontsLoaded] = useFonts({
    'comici': require("./assets/fonts/comici.ttf"),
    'Nunito-Bold': require("./assets/fonts/Nunito-Bold.ttf"),
    'Nunito-Regular': require("./assets/fonts/Nunito-Regular.ttf"),
    'Nunito-SemiBold': require("./assets/fonts/Nunito-SemiBold.ttf"),
    'Roboto-Medium': require("./assets/fonts/Roboto-Medium.ttf"),
    'Roboto-Light': require("./assets/fonts/Roboto-Light.ttf"),
    'Roboto-Regular': require("./assets/fonts/Roboto-Regular.ttf"),
    'Roboto-Bold': require("./assets/fonts/Roboto-Bold.ttf"),
  })
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}