import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import { theme } from "../../theme";
import { useState, useCallback } from "react";
import { ShoppingListItem } from "./ShoppingListItem";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { capitalizeFirstWord } from "../../utils/common";

export function ShoppingList() {
  const [items, setItems] = useState<
    { id: string; name: string; completed: boolean }[]
  >([]);

  const handleToggleCompleted = useCallback(
    (id: string) => {
      const item = items.find((item) => item.id === id);
      if (!item) return;
      Alert.alert(
        item.completed ? "Mark as incomplete?" : "Mark as completed?",
        `Are you sure you want to mark "${capitalizeFirstWord(
          item.name,
        )}" as ${item.completed ? "incomplete" : "completed"}?`,
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () =>
              setItems((prevItems) =>
                prevItems.map((prevItem) =>
                  prevItem.id === item.id
                    ? { ...prevItem, completed: !prevItem.completed }
                    : prevItem,
                ),
              ),
          },
        ],
      );
    },
    [items],
  );

  const handleRemoveItem = useCallback(
    (id: string) => {
      const item = items.find((item) => item.id === id);
      if (!item) return;
      Alert.alert(
        "Remove item?",
        `Are you sure you want to remove "${capitalizeFirstWord(item.name)}" from your shopping list?`,
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () =>
              setItems((prevItems) =>
                prevItems.filter((prevItem) => prevItem.id !== item.id),
              ),
          },
        ],
      );
    },
    [items],
  );

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
            { id: uuidv4(), name: trimmedText, completed: false },
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
      {items.map((item) => (
        <ShoppingListItem
          key={item.id}
          item={item}
          toggleCompleted={handleToggleCompleted}
          removeItem={handleRemoveItem}
        />
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
