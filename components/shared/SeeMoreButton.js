import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
export function SeeMoreButton({ text, marginTop, onPress }) {
    return (
        <TouchableOpacity>
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
        gap: 8,
        borderRadius: 8,
        marginRight: 11
    },
    buttonText: {
        color: "#000000",
        fontStyle: "normal",
        fontFamily: 'Nunito-Bold',
        fontSize: 12,
        lineHeight: 16
    }
})