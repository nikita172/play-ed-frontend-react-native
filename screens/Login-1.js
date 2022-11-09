import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { globalStyles } from "../styles";
import { FlatButton } from "../components";
import { OnboardingHeader } from "../components";
export default function LoginFirst({ navigation }) {
    function onPress() {
        navigation.navigate("LoginSecond")

    }
    return (
        <View style={globalStyles.container}>
            <OnboardingHeader />
            <View style={styles.inputContainer}>
                <TextInput placeholder="Enter ZIP code" placeholderTextColor="#000000" />
            </View>
            <FlatButton text="CONTINUE" onPress={onPress} />
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 67,
        borderColor: "black",
        borderBottomWidth: 2,
        width: 247,
        marginBottom: 36
    },
})

