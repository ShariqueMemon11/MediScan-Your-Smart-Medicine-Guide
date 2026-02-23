import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ReminderModal from "../components/ReminderModal";

const days = [
  { id: 1, day: "Sun", date: "1" },
  { id: 2, day: "Mon", date: "2" },
  { id: 3, day: "Tue", date: "3" },
  { id: 4, day: "Wed", date: "4" },
  { id: 5, day: "Thu", date: "5" },
  { id: 6, day: "Fri", date: "6" },
  { id: 7, day: "Sat", date: "7" },
];

const ReminderScreen = () => {
  const [reminderVisible, setReminderVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(4);

  /**
   * ⚠️ TEMP STATIC DATA
   * ---------------------------------------
   * This will later come from Node.js backend
   *
   * Future API:
   * GET /api/reminders?date=YYYY-MM-DD
   *
   * Backend will:
   * 1️⃣ Check DB for reminders of user
   * 2️⃣ Return list
   */
  const [reminders, setReminders] = useState([
    {
      id: 1,
      name: "Aspirin",
      time: "09:00 AM",
      type: "tablet",
    },
    {
      id: 2,
      name: "Cymbalta",
      time: "10:00 AM",
      type: "capsule",
    },
    {
      id: 3,
      name: "Lexapro",
      time: "03:00 PM",
      type: "syringe",
    },
  ]);

  /**
   * 🔵 FUTURE: Fetch reminders from backend
   * This will run whenever selectedDay changes
   */
  useEffect(() => {
    console.log("📅 Selected Day Changed:", selectedDay);

    /**
     * 🚀 Future Backend Call Example
     *
     * async function fetchReminders() {
     *   try {
     *     const response = await fetch(
     *       `http://YOUR_SERVER_IP:5000/api/reminders?day=${selectedDay}`
     *     );
     *
     *     const data = await response.json();
     *
     *     console.log("✅ Reminders Fetched From Backend:", data);
     *
     *     setReminders(data.reminders);
     *   } catch (error) {
     *     console.log("❌ Error Fetching Reminders:", error);
     *   }
     * }
     *
     * fetchReminders();
     */

  }, [selectedDay]);

  const getMedicineIcon = (type) => {
    switch (type) {
      case "tablet":
        return require("../assets/img/tablet.png");
      case "syringe":
        return require("../assets/img/syringe.png");
      case "drops":
        return require("../assets/img/drops.png");
      default:
        return require("../assets/img/tablet.png");
    }
  };

  /**
   * 🟡 When Add Button Pressed
   * Later:
   * 1️⃣ Open modal
   * 2️⃣ After save → POST to backend
   */
  const handleAddReminder = () => {
    console.log("➕ Add Reminder Button Pressed");
    setReminderVisible(true);
  };

  return (
    <View className="flex-1 bg-indigo-900">

      {/* Top Dark Header */}
      <View className="bg-indigo-900 pt-16 pb-16 px-6 rounded-b-3xl" style={{marginTop:-25, marginBottom:20}}>
        <View className="flex-row justify-between items-center mb-6">
          <Image
            source={require("../assets/img/medi.png")}
            className="w-40 h-40 rounded-full" 
            style={{marginLeft:210, marginBottom:-85}}
          />
        </View>

        <Text className="text-white text-4xl font-bold mb-1 -mt-10 ml-3">
          Medicine
        </Text>
        <Text className="text-white text-4xl font-bold ml-3">
          Reminder
        </Text>
      </View>

      {/* White Body */}
      <View className="flex-1 bg-white px-6 pt-6 rounded-t-3xl -mt-9">

        {/* Horizontal Day Calendar */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="-mb-40"
        >
          {days.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                console.log("🗓 Day Selected:", item);
                setSelectedDay(item.id);
              }}
              className={`mr-4 w-14 h-16 rounded-xl justify-center items-center ${
                selectedDay === item.id
                  ? "bg-yellow-400"
                  : "bg-gray-100"
              }`}
            >
              <Text
                className={`text-xs ${
                  selectedDay === item.id
                    ? "text-black"
                    : "text-gray-500"
                }`}
              >
                {item.day}
              </Text>
              <Text className="font-bold">
                {item.date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Reminder List */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
          className="flex-1 -mt-20"
          style={{marginBottom:220}}
        >
          {reminders.map((item) => (
            <View
              key={item.id}
              className="bg-gray-100 p-4 rounded-2xl mb-4 flex-row items-center justify-between"
            >
              <View className="flex-row items-center">
                <Image
                  source={getMedicineIcon(item.type)}
                  className="w-10 h-10 mr-4"
                  resizeMode="contain"
                />
                <View>
                  <Text className="font-bold text-lg">
                    {item.name}
                  </Text>
                  <Text className="text-gray-500">
                    {item.time}
                  </Text>
                </View>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color="#1e1b4b"
              />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Floating Add Button */}
      <TouchableOpacity
        onPress={handleAddReminder}
        className="absolute bottom-24 right-6 bg-yellow-400 w-16 h-16 rounded-full justify-center items-center shadow-lg"
      >
        <Ionicons name="add" size={30} color="black" />
      </TouchableOpacity>

      {/* Modal */}
      <ReminderModal
        visible={reminderVisible}
        onClose={() => {
          console.log("❌ Reminder Modal Closed");
          setReminderVisible(false);
        }}

        /**
         * 🔵 FUTURE:
         * When user saves reminder inside modal:
         *
         * 1️⃣ POST /api/reminders
         * 2️⃣ Backend saves in DB (MongoDB)
         * 3️⃣ Return saved reminder
         * 4️⃣ Update state here
         *
         * Example:
         *
         * onSave={(newReminder) => {
         *   console.log("📤 Sending Reminder To Backend:", newReminder);
         *
         *   setReminders(prev => [...prev, newReminder]);
         * }}
         */
      />
    </View>
  );
};

export default ReminderScreen;
