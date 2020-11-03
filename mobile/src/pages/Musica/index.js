import React, { useState, useEffect } from "react";
import { Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesome5, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import { Audio } from 'expo-av';

export default function App(){
    const navigation = useNavigation();
    const soundObject = new Audio.Sound();
    let x = 0;
    let eprimeiro = true;

    async function loadsound(){
        try {
            await soundObject.loadAsync(require('../../assets/sounds/hello.mp3'));
        } catch (error) {
            alert('An error occurred!');
        }
    };

    async function stopsound(){
        if(eprimeiro){
            await loadsound();
            eprimeiro = false;
        }
        if(x == 0){
            await soundObject.playAsync();
            x++;
        }else{
            await soundObject.pauseAsync();
            x--;
        }
    }

        return (
            <>
            <SafeAreaView style={styles.mainContainer}>
                <View style={{ alignItems: "center" }}>
                    <View style={{ alignItems: "center", marginTop: 24 }}>
                        <Text style={[styles.textLight, { fontSize: 12 }]}>Minha Campanha</Text>
                        <Text style={[styles.text, { fontSize: 15, fontWeight: "500", marginTop: 8 }]}>
                            Daniel Cassiano
                        </Text>
                    </View>
                    <View style={styles.coverContainer}>
                        <Image source={require("../../assets/Perfil.png")} style={styles.cover}></Image>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 32 }}>
                        <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500" }]}>Vote 30!</Text>
                        <Text style={[styles.text, { fontSize: 16, marginTop: 8 }]}>Música</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 48 }}>
                    <TouchableOpacity>
                        <FontAwesome5 name="backward" size={32} color="#93A8B3"></FontAwesome5>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={stopsound} style={styles.playButtonContainer}>
                        <FontAwesome5
                            name="play"
                            size={32}
                            color="#3D425C"
                            style={[styles.playButton, { marginLeft: 8 }]}
                        ></FontAwesome5>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome5 name="forward" size={32} color="#93A8B3"></FontAwesome5>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            {/*__________________ MAIN^*/}  
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
        );
    }
