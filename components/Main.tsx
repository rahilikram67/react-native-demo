import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { BottomNavigation } from 'react-native-paper';
import Home from "./tabs/Home";
import Maps from "./tabs/Maps";
import Messages from "./tabs/Messages";
import Notifications from "./tabs/Notifications";
import { findIndex } from "lodash"
export default function Main() {
    const [index, setIndex] = useState(0);
    const ref = useRef(null);
    const [routes, setRoutes] = useState([
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'notifications', title: 'Notifications', icon: 'bell-outline' },
        { key: 'maps', title: 'Maps', icon: 'map-marker-outline' },
        { key: 'messages', title: 'Messages', icon: 'message-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        notifications: Notifications,
        maps: Maps,
        messages: Messages
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{ backgroundColor: "white",borderWidth:1,borderColor:"#ccc" }}
            shifting={false}
            activeColor="#00a680"
            onTabPress={(e) => {
                let index = findIndex(routes, (k) => k.key === e.route.key)
                setRoutes(route => {
                    route.forEach(e => e.icon = e.icon.split("-outline")[0] + "-outline")
                    route[index].icon = route[index].icon.split("-outline")[0]
                    return route
                })
            }}
        />
    );
};