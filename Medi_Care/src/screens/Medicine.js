import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import CameraModal from "../components/QRScanner";
import { Ionicons } from "@expo/vector-icons";

const Medicine = () => {
  const [search, setSearch] = useState("");
  const [medicine, setMedicine] = useState(null);
  const [loading, setLoading] = useState(false);
  const [qrVisible, setQrVisible] = useState(false);

  // 🔎 SEARCH FUNCTION
  const handleSearch = async () => {
    console.log("🔎 Medicine Search Started");
    console.log("User keyword:", search);

    if (!search.trim()) {
      console.log("⚠️ Empty search keyword");
      return;
    }

    Keyboard.dismiss();

    try {
      setLoading(true);

      console.log("📡 Sending request to backend...");

      /*
      const response = await fetch(
        `http://YOUR_BACKEND_IP:5000/api/medicine?name=${search}`
      );
      const data = await response.json();
      setMedicine(data);
      */

      // Temporary dummy data
      setMedicine({
        name: search,
        formula: "Ibuprofen",
        power: "200mg",
        uses: "Pain relief",
        sideEffects: "Allergic reaction, nausea",
        description:
          "Used for fever, headache, body pain. Long description to test scrolling inside card.",
        image: "https://via.placeholder.com/150",
      });

      console.log("✅ Medicine data loaded");
    } catch (error) {
      console.log("❌ Medicine API Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // 📷 QR RESULT
  const handleQRScanResult = async (qrData) => {
    console.log("📷 QR Code Scanned:", qrData);

    try {
      setLoading(true);

      /*
      BACKEND QR API CALL HERE
      */

      setMedicine({
        name: "QR Medicine",
        formula: "Paracetamol",
        power: "500mg",
        uses: "Pain relief, fever",
        sideEffects: "Drowsiness",
        description: "Fetched from QR code",
        image: "https://via.placeholder.com/150",
      });

      console.log("✅ QR medicine data fetched");
    } catch (err) {
      console.log("QR API Error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white p-6">

        <Image style={{ width: 150, height: 150 , marginBottom:-65, marginTop:5, marginLeft:100}}
           resizeMode="contain" 
           source={require('../assets/img/logo2.png')}
        />

      <Text className="text-2xl font-bold text-center mt-14 mb-6">
        Medicine Guide
      </Text>

      {/* Search Input */}
      <TextInput
        placeholder="Search Medicine..."
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}   // 🔥 search on Done
        returnKeyType="search"
        className="bg-white p-4 py-3 rounded-full mb-4 mr-5 ml-5 border border-gray-300"
      />

      {/* Loading */}
      {loading && (
        <ActivityIndicator size="large" color="#00b3b7" />
      )}

      {/* Medicine Card */}
      {medicine && !loading && (
        <View className="bg-[#00b3b7] rounded-2xl p-5 shadow-lg max-h-[420px]">

          <ScrollView showsVerticalScrollIndicator={false}>

            <Image style={{ width: 200, height: 200 , marginBottom:3, marginTop:-25, marginLeft:60}}
           resizeMode="contain" 
           source={require('../assets/img/logo2.png')}
           />

            <Text className="text-xl font-bold text-center mb-4 text-white">
              {medicine.name}
            </Text>

            <Text className="mb-2 text-white">
              <Text className="font-bold">Formula: </Text>
              {medicine.formula}
            </Text>

            <Text className="mb-2 text-white">
              <Text className="font-bold">Power: </Text>
              {medicine.power}
            </Text>

            <Text className="mb-2 text-white">
              <Text className="font-bold">Uses: </Text>
              {medicine.uses}
            </Text>

            <Text className="mb-2 text-white">
              <Text className="font-bold">Side Effects: </Text>
              {medicine.sideEffects}
            </Text>

            <Text className="mb-4 text-white">
              <Text className="font-bold">Description: </Text>
              {medicine.description}
            </Text>

          </ScrollView>
        </View>
      )}

      {/* FLOATING QR BUTTON */}
      <TouchableOpacity
        style={{marginLeft:285, marginTop:35}}
        onPress={() => setQrVisible(true)}
        className="bg-green-500 w-16 h-16 rounded-full justify-center items-center shadow-lg"
        
      >
        <Ionicons name="qr-code-outline" size={28} color="white" />
      </TouchableOpacity>

      {/* QR MODAL */}
      <CameraModal
        visible={qrVisible}
        onClose={() => setQrVisible(false)}
        onScan={handleQRScanResult}
      />

    </View>
  );
};

export default Medicine;
