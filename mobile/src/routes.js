import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Midia from './pages/Midia';
import Propostas from './pages/Propostas';
import Perfil from './pages/Perfil';
import Musica from './pages/Musica';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator 
                screenOptions={{headerShown: false}}
            >
                <AppStack.Screen name="Perfil" component={Perfil}/>
                <AppStack.Screen name="Propostas" component={Propostas}/>
                <AppStack.Screen name="Midia" component={Midia}/>
                <AppStack.Screen name="Musica" component={Musica}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}