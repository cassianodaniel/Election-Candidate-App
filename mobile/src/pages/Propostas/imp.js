import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
//import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Card from "./card";

const CONTENT = [
  {
    title: 'Educação',
    content: 'DATH_APP DATH_APP DATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APP'
  },
  {
    title: 'Saúde',
    content: 'DATH_APP DATH_APP DATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APP',
  },
  {
    title: 'Segurança',
    content: 'DATH_APP DATH_APP DATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APPDATH_APP',
  },
  {
    title: 'Infraestrutura',
    content: 'Olá, tudo bem?',
  },
];

export default class App extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"

      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined} style={styles.contentText}>
          {section.content}
        </Animatable.Text>{}
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
            <Text style={styles.title}>Propostas</Text>
          <Collapsible 
              collapsed={this.state.collapsed} align="center">
          </Collapsible>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#293f7b',
    paddingTop: 37,
  },
  title: { //título de Proposta
    textAlign: 'center',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 20,
    color: '#fff',

  },
  header: {
    padding: 10,
  },
  headerText: { //texto educação, saúde, segurança, infraestrutura
    fontSize: 25,
    marginTop: 5,
    padding: 8,
    fontWeight: '500',
    color: '#fff',
    borderWidth: 1,
    borderColor:'#191970',
    height: 50,
    borderRadius:8,
  },
  content: { //conteúdo de abertura de cada botão
    padding: 20,
    backgroundColor: '#fff',
    color: '#fff',
    borderRadius: 4,
    elevation: 3,
    shadowOffset: { width:1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  contentText:{
    color: '#fff',
  },
  active: { //quando clicado educação, saúde, segurança, infraestrutura
    backgroundColor: '#191970',
    marginLeft: 10,
    marginRight: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    /* 
    minWidth: 370,
    maxWidth: 370 
    */
  },
  inactive: { //quando não clicado
    backgroundColor: '#293f7b',
  },
});