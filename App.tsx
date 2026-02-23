import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import {theme} from './theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>Coffee</Text>
        <Pressable onPress={() => console.log("pressed")} style={styles.button}>
          <Text style={styles.text}>Press Me</Text>
        </Pressable>
      </View>
      <View style={{...styles.lineSeparator}} />
      <View style={styles.item}>
        <Text style={styles.text}>Tea</Text>
        <Pressable onPress={() => console.log("pressed")} style={styles.button}>
          <Text style={styles.text}>Press Me</Text>
        </Pressable>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // gap: theme.spacing.medium,
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    width: '80%',
    height: 150,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.medium,
    justifyContent: 'space-between',
    // alignItems: 'center',
    ...theme.shadows.heavy,
  },
  text:{
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
    padding: theme.spacing.medium,
  },
  button: {
    padding: theme.spacing.medium,
    width: "auto",
    height: 48,
    borderRadius:20,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.shadows.medium,
  },
  lineSeparator: {
    width: '100%',
    height: 3,
    backgroundColor: theme.colors.secondary,
  },
});
