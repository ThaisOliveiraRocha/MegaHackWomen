import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";

const commentsArray = [
  {
    name: "Unicórnio Anonimo",
    textComment:
      "Existe uma estrutura maior que acaba barrando a chegada de mulheres na área de TI. E quando elas chegam existe outro problema a ser enfrentado, por isso, é preciso que empresas se comprometam em melhorar seu ambiente interno",
  },
  {
    name: "Princesa Anonima",
    textComment:
      "Eu concordo, mas imagino que as mulheres também precisam se interessar pela área...",
  },
  {
    name: "Gatinha Anonima",
    textComment:
      "Não é só interesse. Eu mesma, queria muito ser programadora, mas quando cheguei na minha primeira empresa, fiquei tão assustada com o baixo número de mulheres, que talvez aquilo tenha me afetado de alguma forma e por isso desisti.",
  },
  {
    name: "Flor Anonima",
    textComment:
      "Eu entendo como você se sente, amiga.",
  },
];

export const ChatSecreto = ({ navigation }) => {
  const goToNextPage = () => {
    navigation.navigate("ChatSecreto");
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.titleTop}>Papo Privado</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            Por que não há tantas mulheres na área de Tecnologia da Informação?
          </Text>
        </View>
        <ScrollView>
          {commentsArray.map((comment, index) => (
            <View style={styles.commentContainer} key={index}>
              <View style={styles.header}>
                <Image
                  style={styles.avatar}
                  source={require("../../../../assets/images/unicorn.png")}
                />
                <Text style={styles.name}>{comment.name}</Text>
              </View>
              <Text style={styles.comment}>{comment.textComment}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.input}
            placeholder="digite uma mensagem..."
          />
          <TouchableOpacity style={styles.button} onPress={goToNextPage}>
            <Text>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  top: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
  },
  titleTop: {
    fontSize: 24,
    fontWeight: "700",
    color: "#122173",
    marginTop: 48,
    marginBottom: 16,
  },
  body: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#D5e5f2",
  },
  questionContainer: {
    backgroundColor: "#122173",
    borderRadius: 16,
    marginHorizontal: 8,
    marginVertical: 8,
    minHeight: 42,
  },
  question: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  commentContainer: {
    flexDirection: "column",
    marginHorizontal: 8,
    marginVertical: 8,
    padding: 8,
    minHeight: 80,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  comment: {
    fontSize: 14,
    fontWeight: "300",
  },
  header: {
    flexDirection: "row",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#CCCCCC",
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },
  avatar: {
    marginBottom: 8,
  },
  textAreaContainer: {
    height: 72,
    backgroundColor: "#fff",
    paddingVertical: 16,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#CCCCCC",
  },
  button: {
    flex: 2,
    borderWidth: 1,
    borderColor: "gray",
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginRight: 8,
  },
});

export default ChatSecreto;
