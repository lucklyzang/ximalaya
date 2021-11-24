import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../pages/Home';

const Tab = createMaterialTopTabNavigator();

class HomeTabs extends React.Component {
    render () {
        return (
            <Tab.Navigator
                screenOptions={{
                    lazy: true,
                    tabBarScrollEnabled: true,
                    tabBarItemStyle: {
                        width: 80,
                    },
                    tabBarIndicatorStyle: {
                        width: 20,
                        height: 4,
                        marginLeft: 30,
                        borderRadius: 2,
                        backgroundColor: '#f86442'
                    },
                    tabBarPressColor: 'transparent',
                    tabBarActiveTintColor: '#f86442',
                    tabBarInactiveTintColor: '#333'
                }}
            >
            <Tab.Screen name="Home" component={Home} 
                options={{tabBarLabel: '推荐'}}
            />
          </Tab.Navigator>
        )
    }
}

export default HomeTabs;