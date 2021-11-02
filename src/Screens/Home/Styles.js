import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({

  backgroud: {
    flex: 1,
  },

  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 32,
  },

  input: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    paddingHorizontal: 20
},


});
export default styles;