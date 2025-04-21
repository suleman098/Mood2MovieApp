import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MoodButtons from "../components/MoodButtons";
import { useMoods } from "../context/Appcontext";

export default function SelectMoodScreen({ navigation }) {
  const moods = useMoods();
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Mood</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <MoodButtons
          moods={moods}
          selectedIndex={moods.findIndex(
            (mood) => mood.name === selectedMood?.name
          )}
          onSelect={(index) => setSelectedMood(moods[index])}
        />
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.selectButton,
          { backgroundColor: selectedMood ? "#E50914" : "#555" },
        ]}
        onPress={() => {
          if (selectedMood) {
            navigation.navigate("Recommendation", {
              mood: selectedMood.category,
            });
          }
        }}
        disabled={!selectedMood}
      >
        <Text style={styles.selectButtonText}>Recommend Movie</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#141414",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#FFF",
  },
  selectedContainer: {
    marginTop: 20,
    alignItems: "center",
    height: 40, // Fixed height to prevent layout shift
  },
  selectedText: {
    fontSize: 18,
    textAlign: "center",
    color: "#FFF",
  },
  selectButton: {
    position: "absolute",
    bottom: 40, // Adjusted to be above the bottom of the screen
    left: 20,
    right: 20,
    paddingVertical: 20, // Increased height
    borderRadius: 25,
    alignItems: "center",
  },
  selectButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
