import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import api from '../../../services/api';
import { FlatList } from 'react-native-gesture-handler';

export default function Feed(){
    
    const imgPerfil = require('../../assets/Perfil.png');

    const navigation = useNavigation();

    const [posts, setPosts] = useState([]);

    async function loadPosts() {
        const response = await api.post('/posts/list', { autor: 'Zé do Povo'});

        setPosts(response.data);
    }

    useEffect(() => {
        loadPosts();
    }, []);

    return(
        <View style={styles.screen}>
                
            <FlatList 
                keyExtractor={item => item.id.toString()}
                data={posts}
                showsHorizontalScrollIndicator={false} 
                renderItem={({item}) => (
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <Image source={imgPerfil} style={styles.avatar} />
                            <Text style={styles.name}>{item.autor}</Text>
                        </View>

                        <Image style={styles.postImage} source={{uri: item.imagem}}/>
                        
                        <View style={styles.description}>
                            <Text style={styles.name}>{item.autor}</Text>
                            <Text style={styles.postDescription}>{item.descricao}</Text>
                        </View>
                    </View>
                )}
            />

        </View>
    )
}