import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer"
export default function CustomDrawer(props) {
    function openRegisterScreen() {
        props.navigation.navigate("EventRegister")
    }
    function openContactScreen() {
        props.navigation.navigate("Contact")
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#FFD3F3", borderBottomRightRadius: 40, borderTopRightRadius: 40 }}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading} >P
                    <Text style={{ color: "#3108D6" }}>L</Text>
                    <Text style={{ color: "#068EB9" }}>A</Text>
                    <Text style={{ color: "#39D313" }}>Y</Text>
                    <Text style={{ color: "#F5C108" }}>-</Text>
                    <Text style={{ color: "#FF7A00" }}>E</Text>
                    <Text style={{ color: "#FE0000" }}>D</Text>
                </Text>
            </View>
            <View style={styles.allClickables}>
                <TouchableOpacity onPress={openRegisterScreen}>
                    <View>
                        <Text style={styles.clickable}>Register an Event</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={openContactScreen}>
                    <View style={styles.contactBtn}>
                        <Text style={styles.clickable}>Contact Us</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.iconsContainer}>
                <Image style={{ marginRight: 16 }} source={require("../assets/fb.png")} />
                <Image source={require("../assets/insta.png")} />
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    headingContainer: {
        alignItems: "center",
        marginLeft: 0,
        marginRight: 0,
        width: "auto",
        height: 58,
        marginTop: 65,

    },
    heading: {
        fontSize: 50,
        fontStyle: "normal",
        lineHeight: 70,
        fontFamily: "comici",
        color: "#8000FF",
    },
    drawerList: {
        marginTop: 120
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 133,
        marginLeft: 60
    },
    allClickables: {
        marginTop: 60,
        marginLeft: 33

    },
    clickable: {
        fontFamily: 'Nunito-SemiBold',
        fontStyle: "normal",

        fontSize: 24,
        lineHeight: 33
    },
    contactBtn: {
        marginTop: 29
    }
})


