import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SecondPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageview}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={require("../../assets/unsplash.jpg")}
        />
      </View>
      <View style={styles.secondview}>
        <Text style={{ fontSize: 16, letterSpacing: 2, marginTop: 20 }}>
          KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND
        </Text>
        <Text style={{ color: "#C2C2C1", marginTop: 20 }}>
          Sign in or register with your Ampersand email
        </Text>
      </View>
      <View style={styles.thirdview}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Registration")}
          style={{ flex: 1, alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: 15,
              borderBottomWidth: 1,
              borderBottomColor: "red",
            }}
          >
            REGISTER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          style={{ flex: 1, alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: 15,
              borderBottomWidth: 1,
              borderBottomColor: "red",
              paddingHorizontal: 10,
            }}
          >
            SIGN IN
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
  },
  imageview: {
    flex: 3,
    backgroundColor: "grey",
  },
  secondview: {
    flex: 1,
    paddingHorizontal: 20,
  },
  thirdview: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    bottom: 50,
  },
});
