import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { OnboardingHeader } from "../components";
import { globalStyles } from "../styles";
export default function Register({ navigation }) {
    function handleClick() {
        navigation.navigate("LoginFirst")
    }
    return (
        <View style={globalStyles.container}>
            <OnboardingHeader />
            <View>
                <Text style={styles.registerText}>Register via</Text>
            </View>
            <View style={styles.iconsContainer}>
                <View style={styles.fbIcon}>
                    <TouchableOpacity onPress={handleClick}>
                        <Image style={styles.fbIconImg} source={require("../assets/images/shareicons/fbicon.png")} />
                    </ TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={handleClick}>
                        <Image style={styles.googleIconImg} source={require("../assets/images/shareicons/googleicon.png")} />
                    </ TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    registerText: {
        marginTop: 64,
        fontStyle: "normal",
        fontSize: 24,
        lineHeight: 33,
        color: "#000000",
        fontFamily: "Nunito-Regular",
    },
    iconsContainer: {
        flexDirection: "row",
        marginTop: 33,
        width: 80,
        justifyContent: "space-between",
        alignItems: "center"
    },
    fbIcon: {
        paddingTop: 7,
        paddingHorizontal: 10,
        borderRadius: 100,
        backgroundColor: "#1877F2"
    },
    fbIconImg: {
        width: 17.11,
        height: 28
    },
    googleIconImg: {
        width: 32,
        height: 38,
    }
})

