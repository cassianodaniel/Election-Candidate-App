import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#293f7b',
        height: 200,
        borderRadius: 5,
    },

    navBar: {
        backgroundColor: '#FFF',
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    post: {
        backgroundColor: '#FFF',
        flex: 1,
        borderRadius: 6,
        marginBottom: 5,
        width: '100%',
        padding: 8
    },

    postHeader: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginRight: 10,
    },

    name: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
    },

    postImage: {
        width: '100%',
        height: 500
    },

    description: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },

    postDescription: {
        padding: 15,
        lineHeight: 18,
        fontSize: 16,
    },

    buttonNav: {
        height: 40,
        width: 82,
        backgroundColor: '#f5f5f5',
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
    },

    textButtonNav: {
        fontSize: 16,
        marginTop: 8,
    },

})
