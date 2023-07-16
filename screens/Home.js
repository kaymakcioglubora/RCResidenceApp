import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from "react-native";

import { COLORS, FONTS, SIZES, icons, images } from "../constants";

import OptionItem from "../components/OptionItem";
import { AuthContext } from "../util/AuthContext";
import { signOut } from "../util/FirebaseCommands";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.brokenwhite
    }
})


const Home = ({ navigation }) => {

    const { signOutFromApp } = React.useContext(AuthContext);

    const signOutAuth = async() => {
        try {
            signOut();
            signOutFromApp();
            console.log("user signed out")
        } catch(error) {
            console.log(error);
        }
    }

    // Render

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ height: 70 }}>
                <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "space-around", marginTop: 30, marginRight: 25 }}>
                    <TouchableOpacity
                         style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}
                         onPress={signOutAuth}
                    >
                        <Text style={{...FONTS.body3}}>
                            Çıkış
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
                <Image
                    source={images.robertCollegeGould}
                    resizeMode="center"
                    borderRadius={15}
                    style={{
                        width: SIZES.width - 20,
                        height: 220,
                    }}
                />

                <Text style={{ ...FONTS.body2, marginTop: SIZES.padding }}>Robert College Bingham</Text>
                <Text style={{ ...FONTS.body3 }}>Veli Portalı</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 270, marginHorizontal: 25, paddingHorizontal: SIZES.base }}>
                <OptionItem
                    size={120}
                    icon={icons.outOfResidence}
                    bgColor={[COLORS.rcred, COLORS.rcredgradient]}
                    label="Yurttan Çıkış"
                    onPress={() => navigation.navigate("OutOfResidence")}
                />

                <OptionItem
                    size={120}
                    icon={icons.inResidence}
                    bgColor={[COLORS.rcred, COLORS.rcredgradient]}
                    label="Yurtta Kalma"
                    onPress={() => navigation.navigate("InResidence")}
                />
            </View>

            <View style={{ flexDirection: 'row', marginTop: SIZES.padding, marginHorizontal: 25, paddingHorizontal: SIZES.base }}>
                <OptionItem
                    size={120}
                    icon={icons.weekend}
                    bgColor={[COLORS.rcred, COLORS.rcredgradient]}
                    label="Hafta Sonu İzin"
                    onPress={() => navigation.navigate("Weekends")}
                />

                <OptionItem
                    size={120}
                    icon={icons.pastRequests}
                    bgColor={[COLORS.rcred, COLORS.rcredgradient]}
                    label="Geçmiş İzinler"
                    onPress={() => console.log("Past Requests")}
                />
            </View>

            <View style={{ flex: 1, marginBottom: 5, marginTop: 5 }}>

            </View>
        </SafeAreaView>
    )
}

export default Home;