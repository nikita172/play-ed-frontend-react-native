import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
export function FlatButton({ text, marginTop, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ marginTop: marginTop }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {text}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 8,
        backgroundColor: "rgba(255, 0, 138, 0.55)",
        borderRadius: 8,
    },
    buttonText: {
        color: "#FFFBFB",
        fontStyle: "normal",
        lineHeight: 24,
    }
})