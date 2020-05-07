import  React,{ useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator , StyleSheet} from 'react-native';



function DetailScreen({ navigation, route}) {
  
  const { user } = route.params;
  const{ name, bio, avatar_url, location, public_repos, followers, following, login } = user;
  const [loading, setLoading] = useState(false);
  
  

  const urlSeguidores =`https://api.github.com/users/${login}/followers`;
 
  const submit = async() => {
    setLoading(true);
   
   try {
     
    navigation.navigate('ListFollowersScreen', {url: urlSeguidores});     
   } catch (error) {
       alert('Seguidores não encontrado');
   }

   setLoading(false);
   

};

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Image 
         style={{
           width: 120,
           height: 120,
           borderRadius: 60,
           marginBottom: 20,
           borderWidth: 5,
           borderColor:'white',
         }}
        
          source={{ uri: avatar_url }}></Image>
        <Text style={{fontStyle:'italic', fontWeight: 'bold',fontSize: 25, color:'red' }}>{name}</Text>
        <Text style={{ fontWeight: 'bold',fontSize: 14, alignItems: 'center'}}>{bio}</Text>
        <Text style={{ fontWeight: 'bold',fontSize: 15, alignItems: 'center'}} >Repositórios: {public_repos}</Text>
        <Text style={{ fontWeight: 'bold',fontSize: 15, alignItems: 'center'}}>Seguidores: {followers}</Text>
        <Text  style={{ fontWeight: 'bold',fontSize: 15, alignItems: 'center'}}>Seguindo: {following}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 15, alignItems: 'center'}}>{location}</Text>


        
        <TouchableOpacity
         disabled={loading}
         style={styles.button}
         onPress={() =>{

              
              submit();
        }}
        >
       {loading == false && <Text style={styles.textButton}>Buscar Seguidores</Text>}
       {loading == true && <ActivityIndicator color="white"/>}

        </TouchableOpacity>
      </View>
     
    );
    
      
    }
    const styles = StyleSheet.create({
      
      
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
    

  export default DetailScreen;