import React from "react";
import { StyleSheet, View } from "react-native";

export const AppCard = (props) => {
  return (
    <View style={{ ...styles.default, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  default: {
    flexDirection: "row",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    elevation: 8,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
