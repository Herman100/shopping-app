import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import { theme } from "../../theme";
import { useState } from "react";
import { capitalizeFirstWord } from "../../utils/common";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export function ShoppingListItem() {
  const [items, setItems] = useState<{ name: string; completed: boolean }[]>([
    { name: "", completed: false },
  ]);

  const showInput = () => {
    Alert.prompt(
      "Add Item",
      "Enter the name of the item you want to add.",
      (text) => {
        const trimmedText = text.trim();

        if (trimmedText === "") {
          Alert.alert("Invalid input", "Please enter a valid item name.");
        } else {
          setItems((prevItems) => [
            ...prevItems,
            { name: trimmedText, completed: false },
          ]);
          Alert.alert(
            "Item added",
            `You have added ${trimmedText} to your shopping list.`,
          );
        }
      },
    );
  };

  const removeItem = (itemToRemove: string) => {
    Alert.alert(
      "Remove Item",
      `Are you sure you want to remove ${itemToRemove} from your shopping list?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          style: "destructive",
          onPress: () => {
            setItems((prevItems) =>
              prevItems.filter((item) => item.name !== itemToRemove),
            );
            Alert.alert(
              "Item removed",
              `${itemToRemove} has been removed from your shopping list.`,
            );
          },
        },
      ],
    );
  };

  const markCompleted = (itemToMark: string) => {
    Alert.alert(
      "Mark as Completed",
      `Are you sure you want to mark ${itemToMark} as completed?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          onPress: () => {
            setItems((prevItems) =>
              prevItems.map((item) =>
                item.name === itemToMark ? { ...item, completed: true } : item,
              ),
            );
            Alert.alert(
              "Item marked as completed",
              `${itemToMark} has been marked as completed.`,
            );
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={showInput} style={styles.button}>
        <Text style={styles.buttonText}>Add item</Text>
      </Pressable>
      <View style={styles.lineSeparator} />
      {items.map((item, index) => (
        <View
          key={`${item.name}-${index}`}
          style={[
            styles.item,
            item.completed && {
              backgroundColor: theme.colors.completed,
            },
          ]}
        >
          <Text style={styles.text}>{capitalizeFirstWord(item.name)}</Text>
          <View style={{ flexDirection: "row", gap: theme.spacing.small }}>
            {!item.completed && (
              <Pressable
                onPress={() => markCompleted(item.name)}
                style={[
                  styles.button,
                  { backgroundColor: theme.colors.completed },
                ]}
              >
                <AntDesign
                  name="check"
                  size={16}
                  color={theme.colors.secondary}
                />
              </Pressable>
            )}
            <Pressable
              onPress={() => removeItem(item.name)}
              style={[styles.button, { backgroundColor: theme.colors.delete }]}
            >
              <MaterialCommunityIcons
                name="delete"
                size={24}
                color={theme.colors.secondary}
              />
            </Pressable>
          </View>
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
    width: "100%",
    height: 48,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius.medium,
    justifyContent: "space-between",
    alignItems: "center",
    ...theme.shadows.heavy,
    paddingHorizontal: 16,
  },
  text: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.regular,
    justifyContent: "center",
    alignItems: "center",
    includeFontPadding: false,
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
    textTransform: "uppercase",
    paddingHorizontal: 8,
  },
  lineSeparator: {
    width: "100%",
    height: 0.5,
    backgroundColor: theme.colors.secondary,
  },
});
