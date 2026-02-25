import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import { theme } from "../../theme";
import { use, useCallback, useState } from "react";
import { capitalizeFirstWord } from "../../utils/common";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

type Item = {
  id: number;
  name: string;
  completed: boolean;
};

type ShoppingListItemProps = {
  readonly item: Item;
  readonly toggleCompleted: (id: number) => void;
  readonly removeItem: (id: number) => void;
};

export function ShoppingListItem({
  item,
  toggleCompleted,
  removeItem,
}: ShoppingListItemProps) {
  const handleToggleCompleted = useCallback(() => {
    toggleCompleted(item.id);
  }, [item.id, toggleCompleted]);

  const handleRemoveItem = useCallback(() => {
    removeItem(item.id);
  }, [item.id, removeItem]);

  return (
    <View style={styles.container}>
      <View style={[styles.item, item.completed && styles.completedItem]}>
        <Text style={[styles.text, item.completed && styles.completedText]}>
          {capitalizeFirstWord(item.name)}
        </Text>
        <View style={{ flexDirection: "row", gap: theme.spacing.small }}>
          <Pressable
            onPress={handleToggleCompleted}
            style={[styles.button, { backgroundColor: theme.colors.completed }]}
          >
            {item.completed ? (
              <AntDesign
                name="close"
                size={16}
                color={theme.colors.secondary}
              />
            ) : (
              <AntDesign
                name="check"
                size={16}
                color={theme.colors.secondary}
              />
            )}
          </Pressable>

          <Pressable
            onPress={handleRemoveItem}
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
  completedItem: {
    backgroundColor: theme.colors.completed,
  },
  text: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.regular,
    justifyContent: "center",
    alignItems: "center",
    includeFontPadding: false,
  },
  completedText: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.regular,
    textDecorationLine: "line-through",
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
  // buttonText: {
  //   color: theme.colors.secondary,
  //   fontFamily: theme.fonts.bold,
  //   paddingHorizontal: 8,
  // },
  // lineSeparator: {
  //   width: "100%",
  //   height: 0.5,
  //   backgroundColor: theme.colors.secondary,
  // },
});
