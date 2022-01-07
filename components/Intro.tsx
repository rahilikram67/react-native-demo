import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from "@expo/vector-icons"
export default function Intro({ navigation }: any) {
    return (
        <ImageBackground source={require('../assets/images/developer.jpg')} style={sheet.backImage}>
            <LinearGradient colors={["transparent", "blue"]} style={sheet.gradHeight} >
                <View style={{ flex: 1 }}>
                    <Text style={sheet.skip}>Skip</Text>
                    <View style={sheet.textBallCont}>
                        <Text style={sheet.description}>Search for service providers around you</Text>
                        <View style={sheet.ball}></View>
                    </View>
                    <View style={sheet.circle}>
                        <View style={sheet.line}></View>
                        <AntDesign onPress={() => navigation.navigate('main')} name='caretright' style={sheet.icon} />
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    );
}

const sheet = StyleSheet.create({
    backImage: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    gradHeight: {
        height: "100%"
    },
    skip: {
        fontSize: 20,
        fontWeight: "700",
        alignSelf: "flex-start",
        marginLeft: "auto",
        marginRight: "4%",
        marginTop: "10%",
        color: "#fff"
    },
    textBallCont: {
        marginTop: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        width: "90%"
    },
    description: {
        fontSize: 27,
        fontWeight: "700",
        marginBottom: "3%",
        color: "#fff"
    },
    ball: {
        width: "8%",
        height: "15%",
        marginRight: "auto",
        borderRadius: 50,
        backgroundColor: "#F8B720"
    },
    circle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "14%",
        height: "7%",
        borderRadius: 50,
        backgroundColor: "#fff",
        marginLeft: "auto",
        marginRight: "7%",
        marginBottom: "15%",
    },
    line: {
        marginRight: "-3%",
        width: "15%",
        height: "6%",
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        backgroundColor: "blue",
    },
    icon: {
        fontSize: 20,
        marginTop: "-1.5%",
        color: "blue",
        borderRadius: 10,
    }
})