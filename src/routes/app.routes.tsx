import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
        </Navigator>
    );
}