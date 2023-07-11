import { createStackNavigator } from "@react-navigation/stack"

import { Announcements, Home, Login } from "../screens";
import { InResidence, OutOfResidence, PastRequests, Weekends } from "../screens/parent";
import { Outing, PastRACheck, StudyClassroom } from "../screens/student";

const Stack = createStackNavigator()

export default AuthStack = () => {
    return (
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
    )
}