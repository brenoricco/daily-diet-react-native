import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details } from '@screens/Details';
import { Edit } from '@screens/Edit';
import { Feedback } from '@screens/Feedback';
import { Home } from '@screens/Home';
import { New } from '@screens/New';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator 
            initialRouteName="home"
            screenOptions={{headerShown: false}}
        >
            <Screen 
                name="home" 
                component={Home}
            />
            <Screen 
                name="statistics" 
                component={Statistics}
            />
            <Screen 
                name="new" 
                component={New}
            />
            <Screen 
                name="feedback" 
                component={Feedback}
            />
            <Screen 
                name="details" 
                component={Details}
            />
            <Screen 
                name="edit" 
                component={Edit}
            />
        </Navigator>
    );
}