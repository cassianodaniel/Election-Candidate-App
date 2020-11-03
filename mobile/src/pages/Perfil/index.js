import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import Feed from '../Feed';

import styles from './styles';

import api from '../../../services/api';

export default function Perfil(){
    
    const imgPerfil = require('../../assets/Perfil.png');

    const [apoiadores, setApoiadores] = useState(0);

    const navigation = useNavigation();

    const countApoiadores = async function(){

        const count = await api.post('/apoiadores/count', { apoiado: 'Zezim'});

        setApoiadores(count.data);
    }

    useEffect(() => {
        countApoiadores();
    }, []);

    return(
        <>
            <View style={styles.screen}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image style={styles.avatar} source={imgPerfil} />
                        <View style={styles.info}>
                            <View style={styles.caixa}>
                                <Text style={styles.num}>PDGT</Text>
                                <Text style={styles.desc}>Partido</Text>
                            </View>

                            <View style={styles.caixa}>
                                <Text style={styles.num}>{apoiadores}</Text>
                                <Text style={styles.desc}>Apoiadores</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.bio}>
                        <Text style={styles.name}>Zé do Povo</Text>
                        <Text style={styles.apresentacao}>Uma breve apresentacao do candidado, seu partido, sua história e frases.</Text>
                    </View>

                    <View style={styles.feed}>
                        <Feed />
                    </View>
                </View> 
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