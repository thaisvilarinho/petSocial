import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import Home from './pages/Home';
import Details from './pages/Details';
import Profile from './pages/Profile';

const Routes = () =>{

    //const { Navigator, Screen } = createStackNavigator();
    const { Navigator, Screen } = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Navigator
                tabBarOptions={{
                    style:{
                        height: 60,
                        backgroundColor: 'black',
                        borderTopWidth: 0,
                    },
                    tabStyle:{
                        alignItems:'center',
                        justifyContent: 'center',
                    },
                    iconStyle:{
                        flex: 0,
                        width: 20,
                        height: 20,
                    },
                    labelStyle:{
                        fontSize: 11,
                        marginTop: 5,
                    }
                }}
            >
                <Screen name='Home' component={Home} options={{ 
                    title: 'Principal',
                    tabBarIcon: ({size, focused})=>{
                        return (
                            <Ionicons
                                name='md-home'
                                size={size}
                                color={ focused ? '#715' : 'grey' } 
                            />
                        );
                    }
                }} />
                <Screen name='Details' component={Details} options={{ 
                    title: 'Detalhes',
                    tabBarIcon: ({size, focused})=>{
                        return (
                            <Ionicons
                                name='md-list'
                                size={size}
                                color={ focused ? '#715' : 'grey' }                            
                            />
                        );
                    }
                    
                }} />
                <Screen name='Profile' component={Profile} options={{ 
                    title: 'Perfil',
                    tabBarIcon: ({size, focused})=>{
                        return(
                            <MaterialCommunityIcons
                                name='face-profile'
                                size={size}
                                color={ focused ? '#715' : 'grey'}
                            />
                        );
                    }

                }} />
            </Navigator>
        </NavigationContainer>
    );

};

export default Routes;