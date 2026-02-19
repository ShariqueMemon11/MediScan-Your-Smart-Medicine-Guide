import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ReminderModal from "../components/ReminderModal";

const ReminderScreen = () => {
  const [reminderVisible, setReminderVisible] = useState(false);

  // Temporary dummy reminder list
  const reminders = [
    { id: 1, name: "Aspirin", time: "09:00 AM" },
    { id: 2, name: "Cymbalta", time: "10:00 AM" },
    { id: 3, name: "Lexapro", time: "03:00 PM" },
  ];

  return (
    <View className="flex-1 bg-white p-6">

      {/* Header */}
      <Text className="text-2xl font-bold mt-10 mb-6">
        Medicine Reminder
      </Text>

      {/* Reminder List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {reminders.map((item) => (
          <View
            key={item.id}
            className="bg-gray-100 p-4 rounded-xl mb-4 flex-row justify-between items-center"
          >
            <View>
              <Text className="font-bold text-lg">
                {item.name}
              </Text>
              <Text className="text-gray-500">
                {item.time}
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="black"
            />
          </View>
        ))}
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity
        onPress={() => setReminderVisible(true)}
        className="absolute bottom-8 right-6 bg-yellow-400 w-16 h-16 rounded-full justify-center items-center shadow-lg"
      >
        <Ionicons name="add" size={30} color="black" />
      </TouchableOpacity>

      {/* Reminder Modal */}
      <ReminderModal
        visible={reminderVisible}
        onClose={() => setReminderVisible(false)}
      />
    </View>
  );
};

export default ReminderScreen;
