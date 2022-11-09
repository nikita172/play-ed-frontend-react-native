import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from "react-native"
export default function ListView({ navigation }) {
    function handleClick() {
        navigation.navigate("Detail")
    }
    return (
        <View style={styles.container}>
            <View style={styles.homeHeader}>
                <Image style={{ marginLeft: 19, marginRight: 20 }} source={require("../assets/menu.png")} />
                <Text style={styles.headerText} >Top Best Cricket Acadamys</Text>
            </View>
            <ScrollView>
                <View >
                    <View style={styles.allLists}>
                        <View style={styles.listItem}>
                            <TouchableOpacity onPress={handleClick}>
                                <Image style={{ marginLeft: 10 }} source={require("../assets/images/listview/listimg1.png")} />
                            </TouchableOpacity>
                            <View style={styles.listDesc}>
                                <Text style={styles.academyName}>K.A.Cricket</Text>
                                <Text style={styles.academyDesc}>Below Under -19 cricket {"\n"} coaching in {"\n"} kovaipudur</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.allLists}>
                        <View style={styles.listItem}>
                            <Image style={{ marginLeft: 10 }} source={require("../assets/images/listview/listimg2.png")} />
                            <View style={styles.listDesc}>
                                <Text style={styles.academyName}> J.J.Cricket</Text>
                                <Text style={styles.academyDesc}>cricket coaching in kovaipudur</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.allLists}>
                        <View style={styles.listItem}>
                            <Image style={{ marginLeft: 10 }} source={require("../assets/images/listview/listimg3.png")} />
                            <View style={styles.listDesc}>
                                <Text style={styles.academyName}>Cricket Acadamy</Text>
                                <Text style={styles.academyDesc}>Below Under -19 cricket {"\n"} coaching in {"\n"} kovaipudur</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.allLists}>
                        <View style={styles.listItem}>
                            <Image style={{ marginLeft: 10 }} source={require("../assets/images/listview/listimg4.png")} />
                            <View style={styles.listDesc}>
                                <Text style={styles.academyName}>ABC cricket </Text>
                                <Text style={styles.academyDesc}>cricket coaching in Town hall</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.allLists}>
                        <View style={styles.listItem}>
                            <Image style={{ marginLeft: 10, }} source={require("../assets/images/listview/listimg5.png")} />
                            <View style={styles.listDesc}>
                                <Text style={styles.academyName}>Cricket coaching </Text>
                                <Text style={styles.academyDesc}>Indoor cricket coaching in kovaipudur</Text>
                            </View>
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
    homeHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 15
    },
    headerText: {
        fontSize: 28,
        lineHeight: 39,
        fontFamily: 'Nunito-Bold',
        fontStyle: "normal",
        fontSize: 24,
        lineHeight: 33
    },
    allLists: {
        marginBottom: 15,
        marginLeft: 16,
        marginRight: 19,
        borderColor: "rgba(0, 0, 0, 0.15)",
        borderRadius: 17,
        borderWidth: 1,
        padding: 4
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
        fontFamily: 'Roboto-Bold',
        fontStyle: "normal",
        fontSize: 14.7439,
        lineHeight: 17
    },
    academyDesc: {
        fontFamily: 'Roboto-Light',
        fontStyle: "normal",
        fontSize: 12.1798,
        lineHeight: 14,
        width: 137,
        marginTop: 9
    }
})