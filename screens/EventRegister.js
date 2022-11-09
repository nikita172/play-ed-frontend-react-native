import { View, Text, StyleSheet, Image, TextInput, ScrollView, Button } from "react-native"
import { MenuHeader } from "../components"
export default function EventRegister() {
    return (
        <View style={styles.container}>
            <MenuHeader />
            <ScrollView>
                <View style={styles.eventRegisterContainer}>
                    <Image style={styles.registerEventImg} source={require("../assets/registerevent.png")} />
                    <Text style={styles.registerDesc}>Enter the details to register an event</Text>
                    <View style={styles.allInputs}>
                        <TextInput style={styles.input} placeholder="NAME" placeholderTextColor="black" />
                        <TextInput style={styles.input} placeholder="NUMBER" placeholderTextColor="black" />
                        <TextInput style={styles.input} placeholder="EMAIL" placeholderTextColor="black" />
                        <TextInput style={styles.input} placeholder="TITLE" placeholderTextColor="black" />
                        <TextInput style={styles.input} placeholder="DESCRIPTION" placeholderTextColor="black" />
                        <TextInput style={styles.input} placeholder="CATEGORY" placeholderTextColor="black" />
                        <TextInput style={styles.input} placeholder="ZIPCODE" placeholderTextColor="black" />
                        <View style={styles.uploadImageButton}>
                            <Text style={styles.uploadText}>UPLOAD IMAGE</Text>
                        </View>
                        <View style={styles.saveButton}>
                            <Text style={styles.saveText}>SAVE</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        paddingTop: 32,
    },
    registerEventImg: {
        marginTop: 88.61,
        marginLeft: 23,
    },
    registerDesc: {
        fontFamily: 'Roboto-Regular',
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 19,
        marginTop: 11,
        marginLeft: 22,
        marginBottom: 27,
    },
    input: {
        marginBottom: 20,
        opacity: 0.8,
        borderColor: "rgba(0, 0, 0, 0.15)",
        borderWidth: 1,
        marginHorizontal: 22,
        paddingVertical: 8,
        paddingLeft: 20,
        borderRadius: 8,
        fontFamily: "Roboto-Medium",
    },
    uploadImageButton: {
        marginBottom: 20,
        opacity: 0.8,
        borderColor: "rgba(0, 0, 0, 0.15)",
        borderWidth: 1,
        marginHorizontal: 22,
        paddingVertical: 16,
        borderRadius: 8,
    },
    uploadText: {
        textAlign: "center",
        fontFamily: "Roboto-Medium",
        fontWeight: "bold",
    },
    saveButton: {
        marginHorizontal: 22,
        marginTop: 37,
        width: "auto",
        backgroundColor: "#FFD3F3",
        borderRadius: 5,
        marginBottom: 185
    },
    saveText: {
        fontSize: 18,
        fontFamily: "Nunito-Bold",
        textAlign: "center",
        opacity: 0.7,
        paddingTop: 18,
        paddingBottom: 18
    }
})