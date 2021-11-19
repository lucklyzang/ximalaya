import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, RouteProp, TabNavigationState} from '@react-navigation/native';
import Home from '../pages/Home';
import Listen from '../pages/Listen';
import Found from '../pages/Found';
import Account from '../pages/Account';
import { RootStackNavigation, RootStackParamList } from '.';

export type BottomTabParamList = {
  Home: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

type Route = RouteProp<RootStackParamList,'BottomTabs'> & {
    state?: TabNavigationState<BottomTabParamList>
};

interface IProps {
    navigation: RootStackNavigation;
    route: Route;
};

function getHeaderTitle (route: Route) {
  const routeSymbl = Object.getOwnPropertySymbols(route)[0];
  const currentRoute = route[routeSymbl];
  console.log('路由信息',currentRoute);
    const routeName = currentRoute ? currentRoute.routes[currentRoute.index].name : route.params?.screen || 'Home';
    switch (routeName) {
        case 'Home':
            return '首页';
        case 'Listen':
            return '我听';
        case 'Found':
            return '发现';
        case 'Account':
            return '账户';
         default:
            return '首页'                 
    }
};

class BottomTabs extends React.Component<IProps> {

  componentDidUpdate () {
    const {navigation, route} = this.props;
    navigation.setOptions({
        title: getHeaderTitle(route)
    })
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray'
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '首页',
          }}
        />
        <Tab.Screen
          name="Listen"
          component={Listen}
          options={{
            tabBarLabel: '我听',
          }}
        />
        <Tab.Screen
          name="Found"
          component={Found}
          options={{
            tabBarLabel: '发现',
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: '我的',
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTabs;
