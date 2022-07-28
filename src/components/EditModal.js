import React, { useState } from "react";
import { View, StyleSheet, TextInput, Modal, Alert } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { THEME } from "../theme";
import { AppButton } from "./ui/AppButton";

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length <= 3) {
      Alert.alert(
        "Ошибка!",
        `Минимальная длина названия 3 символа, сейчас ${title.trim().length}`
      );
    } else {
      onSave(title);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Введите новое название"
          maxLength={64}
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.buttons}>
          <AppButton onPress={onCancel} color={THEME.GREY_COLOR}>
            <AntDesign name="back" size={20} color="#fff" />
          </AppButton>
          <AppButton onPress={saveHandler}>
            <AntDesign name="checkcircleo" size={20} color="#fff" />
          </AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
