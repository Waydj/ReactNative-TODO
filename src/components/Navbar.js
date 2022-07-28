import { StyleSheet, View } from "react-native";
import { THEME } from "../theme";

import { AppTextBold } from "../components/ui/AppTextBold";

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}>{props.title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 90,
    backgroundColor: THEME.MAIN_COLOR,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    color: "white",
    paddingBottom: 20,
  },
});
