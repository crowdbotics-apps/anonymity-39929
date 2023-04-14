import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const ChatScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // handle login logic here
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // handle logout logic here
    setLoggedIn(false);
  };

  return <View style={styles.container}>
      {loggedIn ? <View style={styles.chatContainer}>
          {
        /* display previous chats here */
      }
          <Text style={styles.chatText}>Previous chats</Text>
        </View> : <View style={styles.loginContainer}>
          <Image source={require("./assets/logo.png")} style={styles.logo} />
          <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Sign Up")}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  loginContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  chatContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "80%"
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  },
  chatText: {
    fontSize: 24,
    fontWeight: "bold"
  }
});
export default ChatScreen;