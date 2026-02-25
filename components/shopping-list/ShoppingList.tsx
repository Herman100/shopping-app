import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import { theme } from "../../theme";
import { useState } from "react";
import { capitalizeFirstWord } from "../../utils/common";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ShoppingListItem } from "./ShoppingListItem";

export function ShoppingList() {
  const [items, setItems] = useState<
    { id: number; name: string; completed: boolean }[]
  >([]);

  const showInput = () => {
    Alert.prompt(
      "Add Item",
      "Enter the name of the item you want to add.",
      (text) => {
        const trimmedText = text.trim();

        if (
          trimmedText === "" ||
          items.some(
            (item) => item.name.toLowerCase() === trimmedText.toLowerCase(),
          )
        ) {
          Alert.alert(
            "Invalid input or duplicate item",
            "Please enter a valid item name.",
          );
        } else {
          setItems((prevItems) => [
            ...prevItems,
            { id: prevItems.length, name: trimmedText, completed: false },
          ]);
          Alert.alert(
            "Item added",
            `You have added ${trimmedText} to your shopping list.`,
          );
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={showInput} style={styles.button}>
        <Text style={styles.buttonText}>Add item</Text>
      </Pressable>
      <View style={styles.lineSeparator} />
      {items.map((item, index) => (
        <View key={`${item.name}-${index}`}>
          <ShoppingListItem
            item={{ id: index, name: item.name, completed: item.completed }}
            toggleCompleted={(id) => {
              setItems((prevItems) =>
                prevItems.map((item, idx) =>
                  idx === id ? { ...item, completed: !item.completed } : item,
                ),
              );
            }}
            removeItem={(id) => {
              setItems((prevItems) => prevItems.filter((_, idx) => idx !== id));
            }}
          />
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
  },

  button: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    ...theme.shadows.medium,
  },
  buttonText: {
    color: theme.colors.secondary,
    fontFamily: theme.fonts.bold,
    paddingHorizontal: 8,
  },
  lineSeparator: {
    width: "100%",
    height: 0.5,
    backgroundColor: theme.colors.secondary,
  },
});
