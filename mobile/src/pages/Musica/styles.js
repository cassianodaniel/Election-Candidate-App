import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#EAEAEC"
    },
    textLight: {
        color: "#B6B7BF"
    },
    text: {
        color: "#8E97A6"
    },
    textDark: {
        color: "#3D425C"
    },
    coverContainer: {
        marginTop: 32,
        width: 250,
        height: 250,
        shadowColor: "#5D3F6A",
        shadowOffset: { height: 15 },
        shadowRadius: 8,
        shadowOpacity: 0.3
    },
    cover: {
        width: 250,
        height: 250,
        borderRadius: 125
    },
    track: {
        height: 2,
        borderRadius: 1,
        backgroundColor: "#FFF"
    },
    thumb: {
        width: 8,
        height: 8,
        backgroundColor: "#3D425C"
    },
    timeStamp: {
        fontSize: 11,
        fontWeight: "500"
    },
    playButtonContainer: {
        backgroundColor: "#FFF",
        borderColor: "rgba(93, 63, 106, 0.2)",
        borderWidth: 16,
        width: 128,
        height: 128,
        borderRadius: 64,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 32,
        shadowColor: "#5D3F6A",
        shadowRadius: 30,
        shadowOpacity: 0.5
    },
    //_________________________________________________- ^ MAIN 
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
});