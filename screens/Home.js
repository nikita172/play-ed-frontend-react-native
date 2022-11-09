import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from "react-native"
import { SeeMoreButton } from "../components"
import { MenuHeader } from "../components"
export default function Home({ navigation }) {
    function handleClick() {
        navigation.navigate("ListView")
    }
    return (
        <View style={styles.container}>
            <MenuHeader navigation={navigation} />
            <ScrollView>
                <View style={styles.inputBar}>
                    <Image style={styles.searchIcon} source={require("../assets/search.png")} />
                    <TextInput style={{ width: 271, opacity: 0.6 }} placeholder="Type your keyword e.g., music classes..." placeholderTextColor="black" />
                </View>
                <Text style={styles.exploreHeading}>Exolpre by Categories</Text>
                <View style={styles.exploreContainerCategories}>
                    <View style={styles.exploreContainer}>
                        <TouchableOpacity onPress={handleClick}>
                            <Image style={styles.exploreImg} source={require("../assets/images/explore/exploreimg1.png")} />
                        </TouchableOpacity>
                        <Text style={styles.exploreTitle}>Online</Text>
                    </View>
                    <View style={styles.exploreContainer}>
                        <Image style={styles.exploreImg} source={require("../assets/images/explore/exploreimg2.png")} />
                        <Text style={styles.exploreTitle}>InPerson</Text>
                    </View>
                    <View style={styles.exploreContainer}>
                        <Image style={styles.exploreImg} source={require("../assets/images/explore/exploreimg3.png")} />
                        <Text style={styles.exploreTitle}>Indoor</Text>
                    </View>
                    <View style={styles.exploreContainer}>
                        <Image style={styles.exploreImg} source={require("../assets/images/explore/exploreimg4.png")} />
                        <Text style={styles.exploreTitle}>Outdoor</Text>
                    </View>
                </View>
                <Text style={styles.nearByEventsHeading}>Nearby Top Events</Text>
                <View style={styles.sportsContainer}>
                    <View style={styles.sportsHeadingContainer}>
                        <Text style={styles.sportsHeading}>Sports</Text>
                        <SeeMoreButton text="See More" />
                    </View>
                    <View style={styles.sportsAllItems}>
                        <View style={styles.sportsItem}>
                            <Image style={styles.eventImg} source={require("../assets/images/sports/sportsimg1.png")} />
                            <Text style={styles.sportName}>Cricket</Text>
                            <Text style={styles.sportDesc}>Below Under -19 cricket coaching in kovaipudur</Text>
                        </View>
                        <View style={styles.sportsItem}>
                            <Image source={require("../assets/images/sports/sportsimg2.png")} />
                            <Text style={styles.sportName}>Billiards</Text>
                            <Text style={styles.sportDesc}>Billiards and all indoor games for all ages</Text>
                        </View>
                        <View style={styles.sportsItem}>
                            <Image source={require("../assets/images/sports/sportsimg1.png")} />
                            <Text style={styles.sportName}>Cricket</Text>
                            <Text style={styles.sportDesc}>Below Under -19 cricket coaching in kovaipudur</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.sportsContainer}>
                    <View style={styles.sportsHeadingContainer}>
                        <Text style={styles.sportsHeading}>Music</Text>
                        <SeeMoreButton text="See More" />
                    </View>
                    <View style={styles.sportsAllItems}>
                        <View style={styles.sportsItem}>
                            <Image source={require("../assets/images/music/musicimg1.png")} />
                            <Text style={styles.sportName}>Guitar</Text>
                            <Text style={styles.sportDesc}>Guiter coaching class</Text>
                        </View>
                        <View style={styles.sportsItem}>
                            <Image source={require("../assets/images/music/musicimg2.png")} />
                            <Text style={styles.sportName}>Piano Class</Text>
                            <Text style={styles.sportDesc}>Piano class for kids</Text>
                        </View>
                        <View style={styles.sportsItem}>
                            <Image source={require("../assets/images/music/musicimg1.png")} />
                            <Text style={styles.sportName}>Guitar</Text>
                            <Text style={styles.sportDesc}>Guiter coaching class</Text>
                        </View>
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
    inputBar: {
        marginTop: 38,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 23,
        marginRight: 15,
        width: "auto",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10
    },
    searchIcon: {
        marginHorizontal: 8.67,
        marginVertical: 9.67
    },
    exploreHeading: {
        marginTop: 53,
        marginLeft: 15,
        fontFamily: 'Nunito-Bold',
        fontStyle: "normal",
        fontSize: 20,
        lineHeight: 27,
    },
    exploreContainerCategories: {
        marginTop: 38,
        marginLeft: 8,
        flexDirection: "row"
    },
    exploreContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginRight: 18
    },
    exploreTitle: {
        marginTop: 18.75,
        fontFamily: 'Nunito-Bold',
        fontStyle: "normal",
        fontSize: 12,
        lineHeight: 16
    },
    nearByEventsHeading: {
        marginTop: 48,
        marginLeft: 15,
        fontFamily: 'Nunito-Bold',
        fontStyle: "normal",
        fontSize: 20,
        lineHeight: 27,
    },
    eventImg: {
        width: 130,
        height: 130
    },
    sportsContainer: {
        marginTop: 29,
        marginLeft: 15,
        marginBottom: 29
    },
    sportsHeadingContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    sportsHeading: {
        fontFamily: 'Nunito-Bold',
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 22,
    },
    sportsAllItems: {
        marginTop: 15,
        flexDirection: "row"
    },
    sportsItem: {
        width: 130,
        marginRight: 40
    },
    sportName: {
        fontFamily: 'Roboto-Medium',
        fontStyle: "normal",
        fontSize: 14.74,
        lineHeight: 17,
        marginTop: 4,
    },
    sportDesc: {
        fontFamily: 'Roboto-Regular',
        fontStyle: "normal",
        fontSize: 8.60,
        lineHeight: 10,
        marginTop: 6
    }
})