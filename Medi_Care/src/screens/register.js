import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    console.log("REGISTER CLICKED");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // 👉 Future Node backend API call here
    /*
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        confirmPassword
      })
    })
    */
  };

  return (
    <View className="flex-1 bg-blue-100 justify-center items-center px-6">

      {/* Logo */}
      <Image
        source={require("../assets/img/logo.png")}
        style={{width: 400, height: 400 , marginBottom:-100,marginTop:-240}}
        resizeMode="contain"
      />

      {/* Title */}
      <Text className="text-3xl font-bold mt-4 mb-6">
        MediCare Registration
      </Text>

      {/* Form */}
      <View className="w-full max-w-sm">

        <TextInput
          placeholder="Email"
          placeholderTextColor="#484040ff"
          value={email}
          onChangeText={setEmail}
          className="bg-white p-4 rounded-xl mb-4 border border-gray-300 mr-3 ml-3"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#484040ff"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className="bg-white p-4 rounded-xl mb-4 border border-gray-300 mr-3 ml-3"
        />

        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#484040ff"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          className="bg-white p-4 rounded-xl mb-6 border border-gray-300 mr-3 ml-3"
        />

       <View className="items-center gap-3 mt-4">

          {/* Register Button */}
          <TouchableOpacity
            className="bg-blue-500 px-8 py-3 rounded-xl self-center"
            onPress={handleRegister}
          >
            <Text className="text-white font-semibold text-center">
              Register
            </Text>
          </TouchableOpacity>

          {/* Login Link Button */}
          <TouchableOpacity
            className="self-center"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-black underline text-center">
              Already have account?
            </Text>
          </TouchableOpacity>
          
       </View>
      </View>
    </View>
  );
};

export default Register;
