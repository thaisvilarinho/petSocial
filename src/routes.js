import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Details from './pages/Details';

import colors from './styles/colors';

const Routes = () =>{

    const { Navigator, Screen } = createStackNavigator();

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
                    title: '',
                    headerStyle: {
                        backgroundColor: colors.backgroundColor,
                        elevation: 0,
                    }
                }} />
                <Screen name='Details' component={Details} options={{ 
                    title: '',
                    headerStyle: {
                        backgroundColor: colors.backgroundColor,
                        elevation: 0,
                    }            
                }} />
            </Navigator>
        </NavigationContainer>
    );

};

export default Routes;