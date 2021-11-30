import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function SignInPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.firstview}>
        <TouchableOpacity
          style={{ position: "absolute", left: 20 }}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="keyboard-backspace" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontSize: 20, letterSpacing: 2 }}>
          Sign In
        </Text>
      </View>
      <View style={styles.secondview}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={require("../../assets/unsplash2.jpg")}
        />
      </View>
      <View style={styles.thirdview}>
        <Text style={styles.inputlabel}>Email</Text>
        <TextInput style={styles.input} placeholder="example@email.com" />
        <Text style={styles.inputlabel}>Password</Text>
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <View style={styles.fourthview}>
        <TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              letterSpacing: 2,
              backgroundColor: "red",
              paddingHorizontal: "32%",
              paddingVertical: 15,
              borderRadius: 5,
            }}
          >
            SIGN IN
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fifthview}>
        <Text>Forgot?</Text>
        <Text
          style={{
            marginLeft: 5,
            marginBottom: 130,
            borderBottomWidth: 1.5,
            borderBottomColor: "red",
          }}
        >
          Reset Password
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  firstview: {
    flex: 0.7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "red",
  },
  secondview: {
    flex: 2,
    flexDirection: "row",
  },
  thirdview: {
    flex: 2,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  fourthview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fifthview: {
    flex: 1.5,
    flexDirection: "row",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    fontSize: 18,
    textAlign: "right",
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "silver",
  },
  inputlabel: {
    fontSize: 18,
    top: 45,
  },
});
