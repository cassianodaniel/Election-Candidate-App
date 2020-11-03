import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#293f7b',
        height: 100,
    },

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#293f7b'
    },

/*     buttonProp: {
        backgroundColor: 'white',
        padding: 30,
        margin: 10,
        borderRadius: 8,
    }, */

    textButtonProp: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },

    navBar: {
        backgroundColor: '#FFF',
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    buttonNav: {
        height: 40,
        width: '32%',
        backgroundColor: '#FFF',
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
    },

    textButtonNav: {
        fontSize: 16,
        marginTop: 8,
    },

})