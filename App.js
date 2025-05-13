import * as React from 'react' ;
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AboutScreen from './screens/AboutScreen';

const stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Details" component={DetailsScreen} />
        <stack.Screen name="About" component={AboutScreen}/>
      </stack.Navigator>
    </NavigationContainer>  
    );
}