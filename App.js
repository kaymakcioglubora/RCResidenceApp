import React from 'react';

// Utils
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, useNavigationContainerRef } from '@react-navigation/native';
import * as Font from 'expo-font';

// Screens
import { Announcements, Home, Login } from "./screens";
import { InResidence, OutOfResidence, PastRequests, Weekends } from "./screens/parent";
import { Outing, PastRACheck, StudyClassroom } from "./screens/student";

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

	const [fontLoaded, setFontLoaded] = React.useState(false);
	const navigationRef = useNavigationContainerRef();

	React.useEffect(() => {
		Font.loadAsync(customFonts)
			.then(() => {
				setFontLoaded(true)
			})
	}, []);

	if (!fontLoaded) return null;

	

	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator
				initialRouteName={'Home'}
			>
				
				{/*Screens*/}
				
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						title: null,
						headerStyle: {
							backgroundColor: COLORS.brokenwhite
						},
						headerLeft: null,
						headerRight: () => (
							<TouchableOpacity
								style={{ marginRight: SIZES.padding }}
								onPress={() => console.log("Settings")}
							>
								<Image
                                    source={icons.setting}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
							</TouchableOpacity>
						)
					}}
				/>

				<Stack.Screen
					name="OutOfResidence"
					component={OutOfResidence}
					options={{
						headerShown:false
					}}
				/>

			</Stack.Navigator>
		</NavigationContainer>
	);
}
