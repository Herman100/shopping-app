import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { theme } from "./theme";

function showAlert(title: string, item?: string) {
  Alert.alert(title, "This action cannot be undone.", [
    { text: "Cancel", style: "destructive" },
    { text: "OK", onPress: () => Alert.alert("You have selected " + item) },
  ]);
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>Coffee</Text>
        <Pressable
          onPress={() =>
            showAlert("Are you sure you want to select Coffee?", "Coffee")
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Select</Text>
        </Pressable>
      </View>
      <View style={{ ...styles.lineSeparator }} />
      <View style={styles.item}>
        <Text style={styles.buttonText}>Tea</Text>
        <Pressable
          onPress={() =>
            showAlert("Are you sure you want to select Tea?", "Tea")
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Select</Text>
        </Pressable>
      </View>
      <View style={{ ...styles.lineSeparator }} />
      <View style={styles.item}>
        <Text style={styles.buttonText}>Juice</Text>
        <Pressable
          onPress={() =>
            showAlert("Are you sure you want to select Juice?", "Juice")
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Select</Text>
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
  buttonText: {
    color: theme.colors.text,
    fontFamily: theme.fonts.bold,
    textTransform: "uppercase",
  },
  lineSeparator: {
    width: "100%",
    height: 0.5,
    backgroundColor: theme.colors.secondary,
  },
});
