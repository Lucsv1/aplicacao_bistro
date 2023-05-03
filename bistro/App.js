import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  FlatList,
} from "react-native";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import { useState } from "react";
import { Button } from "react-native";





export default function App() {

  const [nome, setNome] = useState("")
  const [tipo, setTipo] = useState("")
  const [calorias, setCalorias] = useState("")
  const [nomeIMagem, setNomeImagem] = useState("")
  const [Ingrediente, setIngrediente] = useState("")
  const [lista, setLista] = useState([])



  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", marginTop: "10%", fontSize: 25 }}>
        Bistro-Donte
      </Text>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={img1}
          style={{
            flex: 1,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30 }}>Alimentação Saudavel</Text>
        </ImageBackground>
      </View>
      <View style={{ flex: 2 }}>
        <View style={{ flex: 2 }}>
          <Text>Dados do Prato</Text>
          <TextInput value={nome} onChangeText={setNome} placeholder="nome da Refeição" />
          <TextInput value={tipo} onChangeText={setTipo} placeholder="tipo"/>
          <View style={{flexDirection: 'row'}}>
            <TextInput value={calorias} onChangeText={setCalorias} placeholder="Calorias" />
            <TextInput value={nomeIMagem} onChangeText={setNomeImagem} placeholder="Nome da Imagem" />
          </View>
          <TextInput  value={Ingrediente} onChangeText={setIngrediente} placeholder="Ingredientes"/>
          <Button onPress={()=>{
            const obj = {nome, tipo, calorias, nomeIMagem, Ingrediente}
            setLista([...lista, obj])
          }} title="salvar"/>
        </View>
        <View style={{ flex: 5, backgroundColor: 'white'}}>
          <FlatList data={lista}
          renderItem={({item }) => (
            <View style={{backgroundColor: '#e28c6a', color: 'red', justifyContent: 'center', margin: 10, padding: 10}}>
              <Text>{item.nome}</Text>
              <Text>{item.tipo}</Text>
              <Text>{item.calorias}</Text>
              <Text>{item.nomeIMagem}</Text>
            </View>
          )}
          keyExtractor={item => item.id}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE4E1",
  },
});
