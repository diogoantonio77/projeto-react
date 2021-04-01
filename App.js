import { Picker } from "@react-native-picker/picker";
import React, { Component } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curso: 0,
      cursos: [
        { key: 1, nome: "sistema de informação" },
        { key: 2, nome: "Engenharia química" },
        { key: 3, nome: "Enfermagem" },
        { key: 3, nome: "Odonto" },
        { key: 3, nome: "Medicina" },
        { key: 3, nome: "Engenharia Civil" },
      ],
      periodo: 0,
      periodos: [
        { key: 1, periodo: "1º" },
        { key: 2, periodo: "2º" },
        { key: 3, periodo: "3º" },
        { key: 4, periodo: "4º" },
        { key: 5, periodo: "5º" },
        { key: 6, periodo: "6º" },
        { key: 7, periodo: "7º" },
        { key: 8, periodo: "8º" },

      ],
      turnoP: 0,
      turnos: [
        { key: 1, turno: "Diurno" },
        { key: 2, turno: "Noturno" },
        { key: 3, turno: "Integral" },
      ],
      nome: " ",
    };
  }
  render() {
    let cursosItems = this.state.cursos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />;
    });
    let periodoItems = this.state.periodos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.periodo} />;
    });
    let turnoItems = this.state.turnos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.turno} value />;
    });
    return (
      <>
        <View style={styles.header}>
          <Image
            source={{
              uri:
                "assets/logo-unipam.png",
            }}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <SafeAreaView style={styles.container}>
          <Text>Selecione os parâmetros:</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu nome"
            onChangeText={(itemValue) => this.setState({ nome: itemValue })}
          />
          <Picker
            selectedValue={this.state.curso}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ curso: itemValue })
            }
          >
            {cursosItems}
          </Picker>

          <Picker
            selectedValue={this.state.periodo}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ periodo: itemValue })
            }
          >
            {periodoItems}
          </Picker>
          <Picker
            selectedValue={this.state.turno}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ turnoP: itemValue })
            }
          >
            {turnoItems}
          </Picker>
          <Text>Informações inseridas:</Text>
          <Text>
            <Text style={styles.bold}>Nome:</Text>
            {this.state.nome}
          </Text>
          <Text>
            <Text style={styles.bold}>Curso:</Text>
            {this.state.cursos[this.state.curso].nome}
          </Text>
          <Text>
            <Text style={styles.bold}>Período:</Text>
            {this.state.periodos[this.state.periodo].periodo}
          </Text>
          <Text>
            <Text style={styles.bold}>Turno:</Text>
            {this.state.turnos[this.state.turnoP].turno}
          </Text>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
  },
  input: {
    height: 30,
    width: 200,
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 20,
    marginBottom: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  header: {
    height: 60,
    backgroundColor: "#4954AE",
    justifyContent: "center",
    alignItems: "center",
  },
});
