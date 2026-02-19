import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/authSlice";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("LOGIN CLICKED");
    console.log("Email:", email);
    console.log("Password:", password);

    // 👉 Future backend API call here
    /*
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
    */

    dispatch(login());
  };

  return (
    <View className="flex-1 bg-blue-100 justify-center items-center px-6">

      {/* Logo */}
      <Image
        source={require("../assets/img/logo.png")}
        style={{ width: 400, height: 400 , marginBottom:-110,marginTop:-290 }}
        resizeMode="contain"
      />

      {/* Title */}
      <Text className="text-4xl font-bold mt-4 mb-6">
        MediCare Login
      </Text>

      {/* Form Container */}
      <View className="w-full max-w-sm">

        <TextInput
          placeholder="Email"
          placeholderTextColor="#484040ff"
          value={email}
          onChangeText={setEmail}
          className="bg-white p-4 rounded-xl mb-4 border border-gray-300 mr-7 ml-7"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#222121ff"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className="bg-white p-4 rounded-xl mb-6 border border-gray-300 mr-7 ml-7"
        />

        <View className="flex-row justify-center gap-3 mt-5">
          <TouchableOpacity
            className="bg-blue-500 px-6 py-3 rounded-xl pr-4.5 pl-4.5"
            onPress={handleLogin}
          >
            <Text className="text-white font-semibold">
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-blue-500 px-6 py-3 rounded-xl pr-4 pl-4"
            onPress={() => navigation.navigate("Register")}
          >
            <Text className="text-white font-semibold">
              Register
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default Login;
