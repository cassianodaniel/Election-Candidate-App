import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import Card from "./card";
import { StyleSheet } from 'react-native';

import AccordionView from './imp';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Propostas(){
    
    const navigation = useNavigation();

    return(
        <>
            <View style={styles.screen}>
                <ScrollView  showsHorizontalScrollIndicator={false}>
                    <View>
                        <AccordionView></AccordionView>
                    </View>
                </ScrollView>
            </View>
            
            <View style={styles.navBar} >
                    <TouchableOpacity 
                        style={styles.buttonNav} 
                        onPress={() => navigation.navigate("Perfil")}
                        >
                        <FontAwesome5 name="user-alt" size={25} color="black" style={{marginTop: 3}}/>
                        <Text style={{fontSize: 11}}>Perfil</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={styles.buttonNav} 
                        onPress={() => navigation.navigate("Propostas")}
                        >
                        <MaterialCommunityIcons name="lightbulb-on" size={25} color="black" style={{marginTop: 3}}/>
                        <Text style={{fontSize: 11}}>Propostas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonNav} 
                        onPress={() => navigation.navigate("Midia")}
                        >
                        <Entypo name="archive" size={25} color="black" style={{marginTop: 3}}/>
                        <Text style={{fontSize: 11}}>Mídia</Text>
                    </TouchableOpacity>
            </View>
        </>
    )
}