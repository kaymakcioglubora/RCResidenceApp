import { React } from "react";
import { View, Text } from "react-native";
import { Auth0Provider } from "@auth0/auth0-react";

const Login = () => {
    return (
        <View>
            <Auth0Provider>

            </Auth0Provider>
        </View>
    )
}

export default Login;