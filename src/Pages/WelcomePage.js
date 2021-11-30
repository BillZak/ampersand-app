import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.imageview}>
        <Image
          style={{ height: 60, width: 200 }}
          source={require("../../assets/ampersand_logo.png")}
        />
      </View>
      <View style={styles.secondview}>
        <Text style={{ fontSize: 20, letterSpacing: 5, marginBottom: 10 }}>
          AMPERSAND
        </Text>
        <Text style={{ fontSize: 20, letterSpacing: 5 }}>CONTACTS</Text>
      </View>
      <View style={styles.thirdview}>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              borderBottomWidth: 1,
              borderBottomColor: "red",
              borderBottomLeftRadius: 20,
            }}
          >
            GET STARTED
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9F7",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  imageview: {
    flex: 1,
    top: 130,
  },
  secondview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  thirdview: {
    flex: 1,
    justifyContent: "center",
  },
});
