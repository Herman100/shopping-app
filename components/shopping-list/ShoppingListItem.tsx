import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import { theme } from "../../theme";
import { useCallback } from "react";
import { capitalizeFirstWord } from "../../utils/common";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

type Item = {
  id: string;
  name: string;
  completed: boolean;
};

type ShoppingListItemProps = {
  readonly item: Item;
  readonly toggleCompleted: (id: string) => void;
  readonly removeItem: (id: string) => void;
};

export function ShoppingListItem({
  item,
  toggleCompleted,
  removeItem,
}: ShoppingListItemProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.item, item.completed && styles.completedItem]}>
        <Text style={[styles.text, item.completed && styles.completedText]}>
          {capitalizeFirstWord(item.name)}
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => toggleCompleted(item.id)}
            style={styles.completeButton}
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
            onPress={() => removeItem(item.id)}
            style={styles.deleteButton}
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
    width: "100%",
    marginBottom: theme.spacing.small,
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
    includeFontPadding: false,
  },
  completedText: {
    textDecorationLine: "line-through",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: theme.spacing.small,
  },
  completeButton: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: theme.colors.completed,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    ...theme.shadows.medium,
  },
  deleteButton: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: theme.colors.delete,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    ...theme.shadows.medium,
  },
});
