
import { View, Text, Image, StyleSheet } from "react-native";

export function OnboardingHeader() {
    return (
        <>
            <Image style={styles.blob} source={require("../assets/Blob.png")} />
            <Image style={styles.image} source={require("../assets/1.png")} />
            <View style={styles.headingContainer}>
                <Text style={styles.heading}  >P
                    <Text style={{ color: "#3108D6" }}>L</Text>
                    <Text style={{ color: "#068EB9" }}>A</Text>
                    <Text style={{ color: "#39D313" }}>Y</Text>
                    <Text style={{ color: "#F5C108" }}>-</Text>
                    <Text style={{ color: "#FF7A00" }}>E</Text>
                    <Text style={{ color: "#FE0000" }}>D</Text>
                </Text>
            </View>
            <View style={styles.descContainer}>
                <Text style={styles.desc}>Search and list kids activities by </Text>
                <Text style={styles.desc}>your zip code</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({

    blob: {
        position: "absolute",
        right: 0,
        top: "-10.18%",
    },
    image: {
        width: 395,
        height: 300,
    },
    headingContainer: {
        marginLeft: 0,
        marginRight: 0,
        width: "auto",
        height: 58,
        marginTop: 42,
    },
    heading: {
        fontSize: 50,
        fontStyle: "normal",
        lineHeight: 70,
        fontFamily: "comici",
        color: "#8000FF"
    },
    descContainer: {
        alignItems: "center",
        marginTop: 26,
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 22,
    },
    desc: {
        fontFamily: "Nunito-Bold",
        color: "#000000",
        fontWeight: "700"
    },
})


