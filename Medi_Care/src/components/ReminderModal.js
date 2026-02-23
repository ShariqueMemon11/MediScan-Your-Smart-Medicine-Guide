import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ReminderModal = ({ visible, onClose, medicineName }) => {
  const [type, setType] = useState("Tablet");
  const [dosage, setDosage] = useState(1);
  const [alarmEnabled, setAlarmEnabled] = useState(true);

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>

          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="arrow-back" size={24} />
            </TouchableOpacity>
            <Text style={styles.title}>{medicineName || "Medicine"}</Text>
          </View>

          {/* Type Selection */}
          <View style={styles.row}>
            {["Tablet", "Syringe", "Drops" , "cream"].map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => setType(item)}
                style={[
                  styles.typeBtn,
                  type === item && styles.typeBtnActive,
                ]}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Dosage */}
          <View style={styles.section}>
            <Text style={styles.label}>Dosage (per day)</Text>
            <View style={styles.dosageRow}>
              <TouchableOpacity
                onPress={() => setDosage(Math.max(1, dosage - 1))}
                style={styles.circleBtn}
              >
                <Text>-</Text>
              </TouchableOpacity>

              <Text style={{ marginHorizontal: 15 }}>{dosage}</Text>

              <TouchableOpacity
                onPress={() => setDosage(dosage + 1)}
                style={styles.circleBtn}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Alarm Toggle */}
          <View style={styles.sectionRow}>
            <Text style={styles.label}>Alarm</Text>
            <Switch
              value={alarmEnabled}
              onValueChange={setAlarmEnabled}
            />
          </View>

          {/* Add Button */}
          <TouchableOpacity style={styles.addBtn}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Add Schedule
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

export default ReminderModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: "60%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    gap:"20"
  },
  typeBtn: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 10,
  },
  typeBtnActive: {
    backgroundColor: "#FFD54F",
  },
  section: {
    marginBottom: 20,
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  label: {
    fontWeight: "bold",
  },
  dosageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  circleBtn: {
    backgroundColor: "#FFD54F",
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  addBtn: {
    backgroundColor: "#00b3b7",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
});
