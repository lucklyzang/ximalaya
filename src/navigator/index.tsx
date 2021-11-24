import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack'
import Home from '../pages/Home';
import Details from '../pages/Details';
import BottomTabs from './BottomTabs';
import { Platform, StatusBar } from 'react-native';


export type RootStackParamList = {
    BottomTabs: {
        screen?: string
    };
    Details: {
        itemId: number,
        otherParams: string
    }
};

export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;

let Stack = createNativeStackNavigator<RootStackParamList>();

class Navigation extends React.Component {
    render () {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTitleAlign: "center",
                        gestureEnabled: true
                    }}
                >
                    <Stack.Screen name="BottomTabs" component={BottomTabs} 
                        options={{
                            title: '首页'
                        }}
                    />
                    <Stack.Screen name="Details" options={{
                        title: '详情页',
                        headerStyle: {
                            backgroundColor: '#f4511e'
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                    }} 
                    component={Details} 
                />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigation