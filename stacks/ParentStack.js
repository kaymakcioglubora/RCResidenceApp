import { createStackNavigator } from "@react-navigation/stack"

import { Announcements, Home, Login } from "../screens";
import { InResidence, OutOfResidence, PastRequests, Weekends } from "../screens/parent";
import { Outing, PastRACheck, StudyClassroom } from "../screens/student";

const Stack = createStackNavigator()

export default ParentStack = () => {

    return (
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
    )
}