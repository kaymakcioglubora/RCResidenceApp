import React, {useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    TextInput,
    Pressable,
    ActivityIndicator,
} from "react-native";

import { FIREBASE_AUTH } from "../FirebaseConfig";

import { images, COLORS, FONTS, SIZES, icons } from "../constants";
import { signIn } from "../util/FirebaseCommands";
import { AuthContext } from "../util/AuthContext";

const styles = StyleSheet.create({
    topcontainer: {
        flex: 1,
        backgroundColor: COLORS.brokenwhite
    },

    bottomcontainer: {
        flex: 1,
        backgroundColor: COLORS.rcredgradient,
        height: '60%',
    },

    input: {
        width: SIZES.width - 120,
        height: 40,
        backgroundColor: "#ebebeb",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 14,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
    },

    button: {
        width: SIZES.width - 265,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.rcred,
        borderRadius: 5,
        borderColor: "#ccc",
        marginTop: 15
    },

    forgotbutton: {
        width: SIZES.width - 265,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.brokenwhite,
        borderRadius: 5,
        borderColor: "#ccc",
        marginTop: 15
    }
})


const Login = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const { signInToApp } = React.useContext(AuthContext);

    const signInAuth = async() => {
        setLoading(true)
        try {
            const response = await signIn(username, password);
            console.log("Response: " + JSON.stringify(response));
            if (response !== null) {
                console.log("User Token Set")
                signInToApp(JSON.stringify(response))
            }
        } catch (error) {
            console.log(error);
            alert(error)
        } finally {
            setLoading(false);
        }
    }

    if(loading) {
        return (
            <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.topcontainer}>
            <View style={{ height: '40%', alignItems: "center", justifyContent: "center" }}>
                <Image
                    source={images.robertCollegeLogo}
                    resizeMode="contain"
                    style={{
                        marginTop: 20,
                        height: '50%'
                    }}
                />

                <Text style={{ ...FONTS.body1, paddingTop: 20 }}>Robert College</Text>
                <Text style={{ ...FONTS.body2 }}>Bingham Portal</Text>
            </View>

            <View style={styles.bottomcontainer}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.brokenwhite,
                        maxHeight: 250,
                        marginTop: 25,
                        marginRight: 40,
                        marginLeft: 40,
                        borderRadius: 20,
                    }}
                >
                    <Text style={{
                        ...FONTS.body1,
                        color: COLORS.rcred,
                        marginLeft: 30,
                        marginTop: 20,
                    }}>
                        Giriş
                    </Text>

                    <TextInput
                        value={username}
                        style={styles.input}
                        selectionColor={COLORS.black}
                        placeholder="Kullanıcı adı"
                        placeholderTextColor={COLORS.gray}
                        fontSize={14}
                        autoCapitalize="none"
                        onChangeText={(text) => setUsername(text)}
                    />

                    <TextInput
                        value={password}
                        style={styles.input}
                        selectionColor={COLORS.black}
                        placeholder="Şifre"
                        placeholderTextColor={COLORS.gray}
                        fontSize={14}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />

                    <View style={{ flexDirection: "row", justifyContent: "space-evenly"}}>
                        
                        <Pressable
                            style={styles.forgotbutton}
                            onPress={null}
                        >
                            <Text style={{...FONTS.body4, alignItems: "center", textAlign: "center", color: COLORS.black}} >
                                Şifremi Unuttum
                            </Text>
                        </Pressable>

                        <Pressable
                            style={styles.button}
                            onPress={signInAuth}
                        >
                            <Image
                                source={icons.rightArrow}
                                resizeMode="cover"
                                alignItems="center"
                                style={{
                                    height: 20,
                                    width: 20,
                                }}
                            />
                        </Pressable>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Login;