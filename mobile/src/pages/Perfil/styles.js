import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#293f7b',
        alignItems: 'center',
    },

    container: {
        backgroundColor: '#293f7b',
        width: '98%',
        borderRadius: 5,
        marginTop: 5,
    },

    header: {
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        width: '100%',
        borderRadius: 8,
        marginTop: 10,
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 70,
        marginTop: 15,
        marginLeft: 15,
        marginRight:8,
        marginBottom: 8
    },

    info: {
        marginTop: 15,
        backgroundColor: '#FFF',
        width: '65%',
        height: 100,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    caixa: {
        padding: 10,
        backgroundColor: '#FFF',
        alignItems: 'center',
        width: '42%',
        height: 80,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 0,
        borderColor: '#333',
        borderWidth: 0.2,
        borderRadius: 5
    },

    num:{
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },

    desc: {
        color: 'black',
        fontSize: 15,
    },

    bio: {
        padding: 5,
        backgroundColor: '#FFF',
        width: '100%',
        height: 80,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5
    },

    feed: {
        backgroundColor: '#293f7b',
        width: '100%',
        height:'71%',
        borderRadius: 15,
    },

    name: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    apresentacao: {
        color: 'black',
        fontSize: 15,
        marginLeft: 10,
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