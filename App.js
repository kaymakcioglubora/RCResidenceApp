import React, { useState, useEffect } from 'react';

// Utils
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, useNavigationContainerRef } from '@react-navigation/native';
import * as Font from 'expo-font';

// Screens


import { AuthContext } from './util/AuthContext';

// Themes
import { icons, images, COLORS, SIZES, FONTS } from "./constants";
import ParentStack from './stacks/ParentStack';
import AuthStack from './stacks/AuthStack';


const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		border: "transparent",
	}
}

const Stack = createStackNavigator();

let customFonts = {
	'Roboto-Bold': require('./assets/fonts/roboto/Roboto-Bold.ttf'),
	'Roboto-Black': require('./assets/fonts/roboto/Roboto-Black.ttf'),
	'Roboto-Regular': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
};


export default function App() {

	const [userToken, setUserToken] = useState(null);
	const [loading, setLoading] = useState(false);

	const authContext = React.useMemo(() => ({
		signInToApp: (token) => {
			setLoading(true)
			setUserToken(token);
			setLoading(false);
		},

		signOutFromApp: () => {
			setLoading(true)
			setUserToken(null);
			setLoading(false);
		}
	}));

	const [fontLoaded, setFontLoaded] = useState(false);

	useEffect(() => {
		Font.loadAsync(customFonts)
			.then(() => {
				setFontLoaded(true)
			})
	}, []);

	if (!fontLoaded) return null;

	if(loading) {
		return(
			<View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
				<ActivityIndicator size="large" color={COLORS.rcredgradient}/>
			</View>
		)
	}

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				{userToken !== null ? (<ParentStack/>) : (<AuthStack/>)}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}

