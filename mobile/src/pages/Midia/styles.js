import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#293f7b',
        height: 100,
    },

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#293f7b',
        alignItems: 'center',
    },

    video: {
        width: '97%',
        height: 250,
        marginTop: 10,
    },

    text: {
        fontSize: 26.5,
        padding: 25,
        textAlign: 'justify',
    },

    boxBig: {
        padding: 5,
        backgroundColor: '#FFF',
        width: '97%',
        height: 400,
        borderRadius: 8,
        marginTop: 10,
    },

    boxSmall: {
        padding: 5,
        backgroundColor: '#FFF',
        width: '97%',
        height: 80,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
    },

    buttonMusic: {
        padding: 5,
        backgroundColor: '#FFF',
        width: '97%',
        height: 80,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
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