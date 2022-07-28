import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { THEME } from "../theme";

import { AppText } from "../components/ui/AppText";

export const Todo = ({ todo, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      onPress={() => onOpen(todo.id)}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <AppText>{todo.title}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    padding: 15,
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    marginBottom: 5,
    borderRadius: 10,
  },
});
