import { View, Text, Image, StyleSheet } from 'react-native';

export default function Welcome({ navigation }: any) {
    setTimeout(() => {
        navigation.navigate('intro');
    }, 3000);
    return (
        <View style={sheet.container}>
            <Image source={require("../assets/images/logo.png")} style={{ height: 200, width: 200 }} />
            <View style={sheet.majorView}>
                <View style={sheet.ball}></View>
                <Text style={sheet.text}>Paserv<Text style={sheet.littleI}>l</Text></Text>
            </View>
        </View>
    );
}

const sheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C39CE",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 70,
        color: "#fff",
        fontFamily: "monospace",
        fontWeight: "900",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "4%",
    },
    ball: {
        height: "10%",
        width: "4%",
        borderRadius: 50,
        backgroundColor: "#F8B720",
        marginLeft: "auto",
        marginRight: "8%",
        marginBottom: '-13%'
    },
    majorView: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    littleI: {
        fontSize: 50,
        fontWeight: "900"
    }
})