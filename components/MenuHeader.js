import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

export function MenuHeader({ navigation }) {
    function openDrawer() {
        navigation.openDrawer();
    }
    return (
        <View style={styles.homeHeader}>
            <TouchableOpacity onPress={openDrawer}>
                <Image style={{ marginLeft: 19 }} source={require("../assets/menu.png")} />
            </TouchableOpacity>
            <Text style={styles.headerText} >PLAY-ED</Text>
            <Image style={{ marginRight: 25 }} source={require("../assets/arrow.png")} />
        </View>
    )
}
const styles = StyleSheet.create({
    homeHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerText: {
        fontFamily: "comici",
        fontSize: 28,
        lineHeight: 39
    },
})