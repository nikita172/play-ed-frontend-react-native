import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from "react-native"
import { MenuHeader } from "../components"
export default function Detail({ navigation }) {
    function handleClick() {
        navigation.navigate("EventRegister")
    }
    return (
        <View style={styles.container}>
            <MenuHeader navigation={navigation} />
            <ScrollView>
                <View style={styles.allLists}>
                    <View style={styles.listItem}>
                        <TouchableOpacity onPress={handleClick}>
                            <Image style={{ marginLeft: 12 }} source={require("../assets/images/listview/listimg1.png")} />
                        </TouchableOpacity>
                        <View style={styles.listDesc}>
                            <Text style={styles.academyName}>K.A.Cricket</Text>
                            <Text style={styles.academyDesc}>Below Under -19 cricket {"\n"} coaching in {"\n"} kovaipudur</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}>K.A cricket acadamy</Text>
                    <Text style={styles.desc}>KA cricket acadamy in coimbatore is
                        one of the leading business in the football coaching .</Text>
                    <Text style={styles.owning}>Cricketl coaching ground undertaken by KA cricket acadamy</Text>
                    <Text style={styles.timing}>Open= 6am - 10am , 4pm - 11pm</Text>
                    <View style={styles.feesContainer}>
                        <Text style={styles.topFees}>Fees - 3 months $200</Text>
                        <Text style={styles.fees} >6 months $400</Text>
                        <Text style={styles.fees}>9 months $600</Text>
                        <Text style={styles.fees}>1year $800</Text>
                    </View>
                    <Text style={styles.availableFor}>For both boys and girls</Text>
                    <View style={styles.contact}>
                        <Image style={styles.contactIcons} source={require("../assets/images/shareicons/whatsapp.png")}></Image>
                        <Image style={styles.contactIcons} source={require("../assets/images/shareicons/call.png")}></Image>
                        <Image style={styles.contactIcons} source={require("../assets/images/shareicons/arrowblue.png")}></Image>
                    </View>
                </View>
            </ScrollView>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        paddingTop: 32,
    },
    allLists: {
        padding: 5,
        marginTop: 15,
        marginLeft: 16,
        marginRight: 19,
        borderColor: "#FF008A",
        borderRadius: 17,
        borderWidth: 1
    },
    listItem: {
        flexDirection: "row",
        position: "relative"
    },
    listDesc: {
        marginTop: 29,
        position: "absolute",
        marginLeft: 200
    },
    academyName: {
        //font-family: 'Roboto';
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14.7439,
        lineHeight: 17
    },
    academyDesc: {
        fontFamily: 'Roboto-Light',
        fontStyle: "normal",
        fontSize: 12.1798,
        lineHeight: 14,
        width: 137,
        marginTop: 9,
        color: "#000000"
    },
    detailsContainer: {
        marginTop: 111,
        backgroundColor: "#FFD3F3",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "flex-start"
    },
    name: {
        fontFamily: 'Roboto-Medium',
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 21,
        marginLeft: 32,
        marginTop: 20
    },
    desc: {
        fontFamily: 'Roboto-Medium',
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 19,
        width: 286,
        marginTop: 28,
        marginLeft: 26
    },
    owning: {
        width: 286,
        marginTop: 29,
        marginLeft: 26,
        fontFamily: 'Roboto-Medium',
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 19
    },
    timing: {
        marginTop: 29,
        marginLeft: 26,
        fontFamily: 'Roboto-Medium',
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 21
    },
    feesContainer: {
        marginTop: 23,
        marginLeft: 26,
    },
    topFees: {
        marginTop: 1,
        fontFamily: 'Roboto-Medium',
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 21
    },
    fees: {
        marginLeft: 54,
        marginTop: 1,
        fontFamily: 'Roboto-Medium',
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 21
    },
    availableFor: {
        marginTop: 6,
        fontFamily: 'Roboto-Medium',
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 21,
        marginLeft: 26,
    },
    contact: {
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 105,
        marginRight: 105,
        width: "auto",
        marginBottom: 40
    },
    contactIcons: {
        marginRight: 35
    }
})