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

export default function RegistrationPage() {
  return (
    <View style={styles.container}>
      <View style={styles.firstview}>
        <MaterialIcons
          style={{ position: "absolute", left: 20 }}
          name="keyboard-backspace"
          size={30}
          color="white"
        />
        <Text style={{ color: "#fff", fontSize: 20, letterSpacing: 2 }}>
          Register
        </Text>
      </View>

      <View style={styles.secondview}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={require("./assets/1041797.jpg")}
        />
      </View>
      <View style={styles.thirdview}>
        <Text style={styles.inputlabel}>Full Name</Text>
        <TextInput style={styles.input} placeholder="your full name" />
        <Text style={styles.inputlabel}>Email</Text>
        <TextInput style={styles.input} placeholder="example@email.com" />
        <Text style={styles.inputlabel}>Phone Number</Text>
        <TextInput style={styles.input} placeholder="+233 456 789" />
        <Text style={styles.inputlabel}>Role</Text>
        <TextInput style={styles.input} placeholder="Your Role" />
        <Text style={styles.inputlabel}>Twitter</Text>
        <TextInput style={styles.input} placeholder="@your twitter" />
        <Text style={styles.inputlabel}>LinkedIn</Text>
        <TextInput style={styles.input} placeholder="your linkedin" />
      </View>
      <View style={styles.fourthview}>
        <TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              letterSpacing: 2,
              backgroundColor: "red",
              paddingHorizontal: "30%",
              paddingVertical: 15,
              borderRadius: 5,
            }}
          >
            REGISTER
          </Text>
        </TouchableOpacity>
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
  },
  thirdview: {
    flex: 4,
    paddingHorizontal: 20,
  },
  fourthview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    textAlign: "right",
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "silver",
  },
  inputlabel: {
    fontSize: 15,
    top: 20,
  },
});
