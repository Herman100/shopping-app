import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { theme } from "./theme";
import { ShoppingListItem } from "./components/ShoppingListItem";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState<string[]>([]);

  const showInput = () => {
    Alert.prompt(
      "Add Item",
      "Enter the name of the item you want to add.",
      (text) => {
        const trimmedText = text.trim();

        if (trimmedText === "") {
          Alert.alert("Invalid input", "Please enter a valid item name.");
        } else {
          setItems((prevItems) => [...prevItems, trimmedText]);
          Alert.alert(
            "Item added",
            `You have added ${trimmedText} to your shopping list.`,
          );
        }
      },
    );
  };

  const removeItem = (item: string) => {
    Alert.alert(
      "Remove Item",
      `Are you sure you want to remove ${item} from your shopping list?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          style: "destructive",
          onPress: () => {
            setItems((prevItems) => prevItems.filter((i) => i !== item));
            Alert.alert(
              "Item removed",
              `${item} has been removed from your shopping list.`,
            );
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={showInput} style={styles.button}>
        <Text style={styles.buttonText}>Add Item</Text>
      </Pressable>
      <View style={styles.lineSeparator} />
      {items.map((item, index) => (
        <View key={`${item}-${index}` + "container"} style={styles.item}>
          <ShoppingListItem key={`${item}-${index}`} item={item} isCompleted />
          <Pressable onPress={() => removeItem(item)} style={styles.button}>
            <Text style={styles.buttonText}>Delete</Text>
          </Pressable>
        </View>
      ))}
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

  button: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: theme.colors.secondary,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    ...theme.shadows.medium,
  },
  buttonText: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
    textTransform: "uppercase",
  },
  lineSeparator: {
    width: "100%",
    height: 0.5,
    backgroundColor: theme.colors.secondary,
  },
});
