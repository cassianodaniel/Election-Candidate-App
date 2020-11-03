import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FontAwesome5, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import { WebView } from 'react-native-webview';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Midia() {
    
    const navigation = useNavigation();

    return(
        <>
            <View style={styles.screen}>
                <ScrollView  showsHorizontalScrollIndicator={false}>
                    <View style={styles.container}>
                    
                        <View style={styles.video}>
                            <WebView 
                                source={{ uri: 'https://www.youtube.com/embed/5-qbpf17lz8?rel=0&showinfo=0&controls=1' }} />
                        </View>

                        <View style={styles.boxBig}>
                            <Text style={styles.text}> 
                                Esta é a lei da selva, tão antiga quanto o céu que se eleva, 
                                o lobo que respeitar vai prospera, e o que não respeitar morrerá, 
                                como um rio que viaja pela floresta, a vida na selva é uma odisséia 
                                porque a força da alcatéia é o lobo, e a força do lobo é a alcatéia. 
                            </Text>
                        </View>
                        
                        <TouchableOpacity 
                            style={styles.buttonMusic} 
                            onPress={() => navigation.navigate("Musica")}
                            >
                            <Text style={{fontSize: 11}}>Música 1</Text>
                        </TouchableOpacity>

                        <View style={styles.boxSmall}>
                            <Text> Música </Text>
                        </View>

                        <View style={styles.boxSmall}>
                            <Text> Música </Text>
                        </View>

                        <View style={styles.boxSmall}>
                            <Text> Música </Text>
                        </View>

                        <View style={styles.boxSmall}>
                            <Text> Música </Text>
                        </View>
                    
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