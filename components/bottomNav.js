import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './Nav/home'
import User from './Nav/user'
import Service from './Nav/service'
import Elearning from './Nav/learning'
import primary from './properties'
import Icon from 'react-native-vector-icons/MaterialIcons';
const myIcon = < Icon name = "home"
size = { 30 }
/>;


const MainNavigators = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: '',
            tabBarIcon: ({ tintColor, focused }) => ( <
                Icon name = 'home'
                size = { 26 }
                style = {
                    { marginTop: 10, color: focused ? primary : '#9ba7b5', }
                }
                />
            ),
            header: null,
        })
    },
    Service: {
        screen: Service,
        navigationOptions: ({ navigation }) => ({
            title: '',
            tabBarIcon: ({ tintColor, focused }) => ( <
                Icon name = 'public'
                size = { 26 }
                style = {
                    { marginTop: 10, color: focused ? primary : '#9ba7b5' }
                }
                />
            ),
            header: null,
        })
    },

    'E-learning': {
        screen: Elearning,
        navigationOptions: ({ navigation }) => ({
            title: '',
            tabBarIcon: ({ tintColor, focused }) => ( <
                Icon name = 'school'
                size = { 26 }
                style = {
                    { marginTop: 10, color: focused ? primary : '#9ba7b5' }
                }
                />
            ),
            header: null,
        })
    },
    user: {
        screen: User,
        navigationOptions: ({ navigation }) => ({
            title: '',
            tabBarIcon: ({ tintColor, focused }) => ( <
                Icon name = 'face'

                size = { 26 }
                style = {
                    { marginTop: 10, color: focused ? primary : '#9ba7b5' }
                }
                />
            ),
            header: null,
        })
    },
}, {
    color: '#00ff00'
});

const MainNavigator = createAppContainer(MainNavigators);
export default MainNavigator