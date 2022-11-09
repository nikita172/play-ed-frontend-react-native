import { View, Text, StyleSheet } from "react-native"

export default function Contact({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>contact screen</Text>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

})