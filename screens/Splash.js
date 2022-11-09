import { View } from "react-native";
import { FlatButton } from "../components/shared/Button";
import { OnboardingHeader } from "../components";
import { globalStyles } from "../styles";
export default function Splash({ navigation }) {
    function onPress() {
        navigation.navigate("Register");
    }
    return (
        <View style={globalStyles.container}>
            <OnboardingHeader />
            <FlatButton text="GET STARTED" marginTop={125} onPress={onPress} />
        </View>
    )
}