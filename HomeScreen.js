
import  React,{ useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';






function HomeScreen({ navigation}) {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);

    const url = `https://api.github.com/users/${user}`;

    const submit = async() => {
        setLoading(true);
       
       try {
        const response = await axios.get(url); 
        navigation.navigate('Detail', {user: response.data});     
       } catch (error) {
           alert('Usuário não encontrado');
       }

       setLoading(false);
       

    };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
        <Text style={styles.title}>GitHub</Text>
       

        <TextInput style={styles.input} values={user}  placeholder="Digite o usuário" onChangeText={setUser}/>


        <TouchableOpacity
         disabled={loading}
         style={styles.button}
         onPress={() =>{

              
              submit();
        }}
        >
       {loading == false && <Text style={styles.textButton}>Buscar</Text>}
       {loading == true && <ActivityIndicator color="white"/>}

        </TouchableOpacity>
      </View>
    );
  }
const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        color:'red',
        fontWeight: 'bold',
        fontStyle:'italic',
    },
    input: {
        width: 200,
        borderRadius: 20,
        height: 50,
        textAlign: 'center',
        marginVertical: 10,
        backgroundColor: '#DDDDDD',

    },
    button:{
        width:200,
        height: 50,
        textAlign: 'center',
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 20,
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
    },
});
  export default HomeScreen;