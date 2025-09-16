import React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StorageTest() {
  const saveData = async () => {
    await AsyncStorage.setItem("attendance", "Present");
  };

  const readData = async () => {
    const value = await AsyncStorage.getItem("attendance");
    alert(value || "No data found");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>AsyncStorage Test</Text>
      <Button title="Save Attendance" onPress={saveData} />
      <Button title="Read Attendance" onPress={readData} />
    </View>
  );
}
