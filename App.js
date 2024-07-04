import { useState } from 'react';
import { StatusBar, Platform, StyleSheet, Text, View, TextInput, Pressable, ScrollView, ActivityIndicator, 
  Keyboard
} from 'react-native';
import Slider from '@react-native-community/slider';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const statusBarHeight = StatusBar.currentHeight




export default function App() {

  const [day, setDay] = useState('');
  const [goal, setGoal] = useState(20);
  const [loading, setLoading] = useState(false);
  const [contenting, setContenting] = useState('');

  const gerarDieta = () => {
    for(let i = 0; i < 10 ; i++){
      if(Math.floor(day) == i){
        setContenting(`Esperando conexão para enviar dieta de ${i} dia(s)`);
      }
    }

    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      
      
      <Text style={styles.titulo}>Dieta Fácil</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Objetivo da dieta:</Text>
        <TextInput
          placeholder='Ex: Emagrecimento, Ganho de massa...'
          style={styles.input}
          value={goal}
          onChangeText={ (text) => setGoal(text)}
        />
        <Text style={styles.label}>Duração da dieta:<Text style={styles.days}> {Math.floor(day)}</Text></Text>
        <Slider
          value={day}
          onValueChange={ (val) => setDay(val)}
          
          minimumValue={1}
          maximumValue={10}
          minimumTrackTintColor="#999"
          maximumTrackTintColor="#000"
        />
      </View>
      <Pressable onPress={()=>{gerarDieta()}} style={styles.buttom}>
        <Text style={styles.buttomFont}>Gerar</Text>
        <MaterialIcons name="dining" size={50} color="#fff" />
      </Pressable>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {loading && (<View style={styles.content}>
          <Text style={styles.labelContent}>Criando dieta...</Text>
          <ActivityIndicator color="#000" size='large'/>
        </View>)}

        {contenting && (<View style={styles.content}>
          <Text style={styles.labelContent}>Sua dieta 📝👇🏽</Text>
          <Text style={styles.textContent}>{contenting}</Text>
        </View>)}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 40,
    marginBottom:20,

  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? statusBarHeight + 50 : 70,
  },
  form: {
    width:'90%',
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
    borderRadius:15,
    padding:16,
    marginTop:10,
    marginBottom:10,
  },
  label:{
    fontSize: 20,
    marginBottom:10,
  },
  input:{
    borderWidth: 1,
    width: '90%',
    height: 50,
    borderRadius: 7,
    fontSize:18,
    paddingLeft:15,
    marginBottom:10,
  },
  days:{
    backgroundColor:'#f1f1f1',
    fontSize: 20,
    marginBottom:10,
  },
  buttom:{
    width: '90%',
    height: 60,
    backgroundColor: '#669b49',
    borderRadius:10,
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    
  },
  buttomFont:{
    fontSize:30,
    color:'#FFF',
    margin:10,
    
  },
  scroll:{
    width:'90%',
  },
  content:{
    backgroundColor:'#fff',
    borderRadius:10,
    width:'100%',
    alignItems:'center',
    padding:10,
  },
  labelContent:{
    fontSize: 25,
    marginBottom:20,
  },
  textContent:{
    fontSize: 17,
  },
  
});
