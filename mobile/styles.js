import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    
      TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 60,
        bottom: 100,
        
      },
    
      FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 170,
        height: 60,
        backgroundColor:'black',
  
      },
  
      View: {
          resizeMode: 'contain',
          width: 120,
          height: 60,
          backgroundColor:'#FFF',
          borderRadius: 70,
          marginRight: 30,
          alignItems: 'center',
          borderColor: '#293f7b',
          borderWidth: 1.5,
      },
  
      Text: {
          color: 'black',
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 13,
          marginLeft: 4
      },
})