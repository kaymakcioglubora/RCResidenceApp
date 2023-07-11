import React, { useState, useEffect } from 'react';

// Utils
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, useNavigationContainerRef } from '@react-navigation/native';
import * as Font from 'expo-font';

// Screens
import { Announcements, Home, Login } from "./screens";
import { InResidence, OutOfResidence, PastRequests, Weekends } from "./screens/parent";
import { Outing, PastRACheck, StudyClassroom } from "./screens/student";

import { AuthContext } from './util/AuthContext';

// Themes
import { icons, images, COLORS, SIZES, FONTS } from "./constants";


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
				<ActivityIndicator size="large"/>
			</View>
		)
	}

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				{userToken !== null ? (
					<Stack.Navigator>
						<Stack.Screen
							name="Home"
							component={Home}
							options={() => ({
								title: null,
								headerShown: false,	
							})}
						/>

						<Stack.Screen
							name="OutOfResidence"
							component={OutOfResidence}
							options={{
								headerShown: false
							}}
						/>
					</Stack.Navigator>
				) : (
					<Stack.Navigator>
						<Stack.Screen
							name="Login"
							component={Login}
							options={() => ({
								title: null,
								headerShown: false,
							})}
						/>
					</Stack.Navigator>
				)}

			</NavigationContainer>
		</AuthContext.Provider>
	);
}

