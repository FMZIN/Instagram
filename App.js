import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

import img_a from './assets/a.jpg';
import img_b from './assets/b.jpg';
import img_c from './assets/c.jpg';
import img_d from './assets/d.jpg';
import img_e from './assets/e.jpg';
import img_f from './assets/f.jpg';
export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.Grupo3}>
          <Text style={styles.Nome}>⭠  CleitinDoCreu015</Text>
          <Text style={styles.Ponto}>•••</Text>
        </View>
        <View style={styles.Grupo}>
          <Image
            source={img_a}
            style={styles.Avatar}
          />
          <Text style={styles.Publi}>125 Publicações</Text>
          <Text style={styles.Segui}>241 Seguidores</Text>
          <Text style={styles.Segui2}>68 Seguindo</Text>
        </View>
        <Text style={styles.Bio}>Cleiton Silvassauro</Text>
        <Text style={styles.Bio2}>Blog Pessoal</Text>
        <Text style={styles.Bio3}>🚩SP</Text>
        <Text style={styles.Bio3}>📆19 anos</Text>
        <Text style={styles.Bio4}>💍@CamilinhaTremBala</Text>
        <Text style={styles.Bio3}>🛵Moto Taxi 244</Text>
        <Text style={styles.Bio5}>Seguido por CamilinhaTremBala e <strong>outras 240 pessoas</strong> </Text>
        <View style={styles.Grupo2}>
          <View style={styles.seguirB}>
            <Text style={styles.seguir}> Seguir </Text>
          </View>
          <View style={styles.mensagemB}>
            <Text style={styles.mensagem}>Mensagem</Text>
          </View>
        </View>
        <View style={styles.Grupo4}>
          <Image
            source={img_c}
            style={styles.Stories}
          />
          <Image
            source={img_b}
            style={styles.Stories2}
          />
        </View>
        <View style={styles.Grupo6}>
          <Text style={styles.Viagens}>Viagens</Text>
          <Text style={styles.Fotos}>Fotos</Text>
        </View>
        <View style={styles.Grupo7}>
          <View style={styles.feedB}>
            <Text style={styles.feed}> FEED </Text>
          </View>
          <View style={styles.mencoesB}>
            <Text style={styles.mencoes}>MENÇÕES</Text>
          </View>
        </View>
        <View style={styles.tudo}>
          <View>
            <Image
              source={img_b}
              style={styles.foto1}
            />
          </View>
          <View>
            <Image
              source={img_f}
              style={styles.foto1}
            />
          </View>
          <View>
            <Image
              source={img_c}
              style={styles.foto1}
            />
          </View>
        </View>
        <View style={styles.tudo}>
          <View>
            <Image
              source={img_e}
              style={styles.foto1}
            />
          </View>
          <View>
            <Image
              source={img_d}
              style={styles.foto1}
            />
          </View>
          <View>
            <Image
              source={img_a}
              style={styles.foto1}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Grupo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  Grupo2: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  Grupo7: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  Grupo3: {
    flexDirection: "row",
  },
  Nome: {
    marginTop: 10,
    marginLeft: 10
  },
  Ponto: {
    marginTop: 10,
    marginLeft: 230
  },
  Bio: {
    marginTop: 10,
    marginLeft: 10
  },
  Bio2: {
    marginLeft: 10,
    color: "gray"
  },
  Bio3: {
    marginLeft: 10,
  },
  Bio4: {
    marginLeft: 10,
    color: "#1b79cc"
  },
  Bio5: {
    marginLeft: 10,
    marginTop: 15
  },
  Avatar: {
    width: 130,
    height: 130,
    borderRadius: 100,
    margin: 10,
    marginTop: 20
  },
  Publi: {

  },
  Segui: {

  },
  Segui2: {

  },
  seguir: {
    borderStyle: "solid",
    borderColor: "#d1d1d1",
    borderWidth: 1,
    paddingLeft: 70,
    paddingRight: 71,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 7,
    backgroundColor: "#d1d1d1"
  },
  mensagem: {
    borderStyle: "solid",
    borderColor: "#d1d1d1",
    borderWidth: 1,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 7,
    backgroundColor: "#d1d1d1"
  },
  seguirB: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mensagemB: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Grupo4: {
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 7,
    marginLeft: 20,
    marginRight: 20
  },
  Stories: {
    width:70,
    height:70,
    borderRadius: 100,
  },
  Stories2: {
    width:70,
    height:70,
    borderRadius: 100,
    marginLeft: 23,
  },
  Viagens: {
    marginLeft:28.5
  },
  Fotos: {
    marginLeft:52.5
  },
  Grupo6: {
    flexDirection: "row",
    marginBottom: 10
  },
  feed: {
    borderStyle: "solid",
    borderColor: "black",
    borderBottomWidth: 2,
    paddingLeft: 82,
    paddingRight: 75,
  },
  feedB: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mencoes: {
    borderStyle: "solid",
    borderColor: "gray",
    borderBottomWidth: 2,
    paddingLeft: 70,
    paddingRight: 71,
    color: "gray"
  },
  mencoesB: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  foto1: { 
    width: 130,
    height: 130,
  },
  tudo: { 
    flexDirection: "row",
    justifyContent: "center"
  },
});