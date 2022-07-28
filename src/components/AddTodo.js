import React, { useState } from "react";
import { View, StyleSheet, TextInput, Keyboard, Alert } from "react-native";
import { THEME } from "../theme";

import { AntDesign } from "@expo/vector-icons";

export const AddTodo = ({ addTodos }) => {
  const [value, setValue] = useState("");

  const onSubmit = () => {
    if (value.trim()) {
      addTodos(value);
      setValue("");
      Keyboard.dismiss();
    } else {
      Alert.alert("Ошибка!", "Название дела не может быть пустым!");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Введите название дела"
      />
      <AntDesign.Button name="pluscircleo" onPress={onSubmit}>
        Добавить
      </AntDesign.Button>
      {/* <Button title="Добавить" onPress={onSubmit} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "60%",
    padding: 5,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
});
