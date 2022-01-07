import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Searchbar, Card, Title, Paragraph, Avatar } from "react-native-paper";
export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const data = [
        {
            name: "John Doe",
            passion: "Programming",
            address: "New York, USA",
            avatar: "https://picsum.photos/id/1005/200/300"
        },
        {
            name: "John Perkins",
            passion: "Tailor",
            address: "California, USA",
            avatar: "https://picsum.photos/id/1012/200/300"
        }
    ]
    const onChangeSearch = (query: string) => setSearchQuery(query);
    return (
        <View style={sheet.container}>
            <View style={sheet.topbar}>
                <Searchbar
                    style={sheet.searchbar}
                    autoComplete={false}
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    icon="microphone"
                    iconColor="white"
                    clearTextOnFocus={true}
                    clearIcon="blank"
                    inputStyle={{ color: "white" }}
                    placeholderTextColor='#FAF9F6'
                    onIconPress={() => alert('Icon pressed')}
                />
                <Ionicons name="filter" style={sheet.filter} size={25} color={"white"} />
            </View>
            <View style={sheet.popular}>
                <Text style={{ marginRight: "auto", fontSize: 20, fontWeight: "bold" }}>Popular Service</Text>
                <Text style={{ color: "#F8B720", fontSize: 20 }}>See All</Text>
            </View>
            <View style={sheet.horizontal}>
                <ScrollView horizontal={true}>
                    {data.map(el => (
                        <Card key={el.name} mode="outlined" style={sheet.card}>
                            <Card.Content>
                                <Avatar.Image size={60} source={{ uri: el.avatar }} />
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Looking For your Desire</Text>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{el.passion}?</Text>
                                <View style={sheet.info}>
                                    <Text style={{ fontSize: 16, letterSpacing: 1, fontWeight: "700" }}>{el.name}</Text>
                                    <Text style={{ fontSize: 16, letterSpacing: 1, fontWeight: "bold", color: "blue" }}>{el.passion}</Text>
                                    <Text style={{ fontSize: 16, letterSpacing: 1 }}>{el.address}</Text>
                                </View>
                            </Card.Content>
                        </Card>
                    ))}
                </ScrollView>
            </View>
            <View style={sheet.popular}>
                <Text style={{ marginRight: "auto", fontSize: 20, fontWeight: "bold" }}>Categories</Text>
                <Text style={{ color: "#F8B720", fontSize: 20 }}>See All</Text>
            </View>
        </View>
    )
}
const sheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    topbar: {
        flexDirection: "row",
        backgroundColor: "blue",
        height: 50,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    searchbar: {
        width: "80%",
        height: "80%",
        margin: "auto",
        backgroundColor: "transparent",
        shadowColor: "transparent",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "white"
    },
    filter: {
        paddingLeft: 20
    },
    card: {
        width: 250,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 3
    },
    info: {
        marginTop: 5,
        marginLeft: 2,
        paddingLeft: 10,
        borderLeftColor: "#F8B720",
        borderLeftWidth: 2
    },
    popular: {
        flexDirection: "row",
        height: 27,
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        alignItems: "center",
    },
    horizontal: {
        marginTop: 20,
        height: 230
    }
})