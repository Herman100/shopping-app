import { StyleSheet, Text, View, Pressable } from "react-native";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>Coffee</Text>
        <Pressable
          onPress={() => console.log("Coffee selected")}
          style={styles.button}
        >
          <Text style={styles.text}>Press Me</Text>
        </Pressable>
      </View>
      <View style={{ ...styles.lineSeparator }} />
      <View style={styles.item}>
        <Text style={styles.text}>Tea</Text>
        <Pressable
          onPress={() => console.log("Tea selected")}
          style={styles.button}
        >
          <Text style={styles.text}>Press Me</Text>
        </Pressable>
      </View>
      <View style={{ ...styles.lineSeparator }} />
      <View style={styles.item}>
        <Text style={styles.text}>Juice</Text>
        <Pressable
          onPress={() => console.log("Juice selected")}
          style={styles.button}
        >
          <Text style={styles.text}>Press Me</Text>
        </Pressable>
      </View>
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
  item: {
    flexDirection: "row",
    width: "80%",
    height: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.medium,
    justifyContent: "space-between",
    alignItems: "center",
    ...theme.shadows.heavy,
  },
  text: {
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
    padding: theme.spacing.medium,
    justifyContent: "center",
    alignItems: "center",
    includeFontPadding: false,
  },
  button: {
    padding: 8,
    borderRadius: 6,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    ...theme.shadows.medium,
  },
  lineSeparator: {
    width: "100%",
    height: 3,
    backgroundColor: theme.colors.secondary,
  },
});
