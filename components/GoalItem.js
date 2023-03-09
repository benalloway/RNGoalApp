import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ text, id, onDeleteItem }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={onDeleteItem.bind(this, id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 16,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: { color: "white" },
});

export default GoalItem;
