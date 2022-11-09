import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { globalStyles } from "../styles";
import { OnboardingHeader } from "../components";
import { FlatButton } from "../components/shared/Button";
export default function LoginSecond({ navigation }) {
    function onPress() {
        navigation.navigate("Home")
    }
    return (
        <View style={globalStyles.container}>
            <OnboardingHeader />
            <View style={styles.inputContainer}>
                <TextInput placeholder="Select Age Group" placeholderTextColor="#000000" />
                <Image source={require("../assets/Polygon1.png")} />
            </View>
            <FlatButton text="ENTER" onPress={onPress} />
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 67,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "black",
        borderBottomWidth: 2,
        width: 247,
        marginBottom: 36,
    }
})