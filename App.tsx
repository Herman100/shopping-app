import { StyleSheet, View } from "react-native";
import { theme } from "./theme";
import { ShoppingListItem } from "./components/shopping-list/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: theme.spacing.small,
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    alignItems: "center",
    marginTop: 50,
    // justifyContent: "flex-start",
  },
  // item: {
  //   flexDirection: "row",
  //   width: "80%",
  //   height: 48,
  //   backgroundColor: theme.colors.primary,
  //   borderRadius: theme.borderRadius.medium,
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   ...theme.shadows.heavy,
  // },

  // button: {
  //   padding: 8,
  //   borderRadius: 6,
  //   backgroundColor: theme.colors.secondary,
  //   borderColor: theme.colors.secondary,
  //   borderWidth: 1,
  //   ...theme.shadows.medium,
  // },
  // buttonText: {
  //   color: theme.colors.primary,
  //   fontFamily: theme.fonts.bold,
  //   textTransform: "uppercase",
  // },
  // lineSeparator: {
  //   width: "100%",
  //   height: 0.5,
  //   backgroundColor: theme.colors.secondary,
  // },
});
