//import liraries
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { QRCode } from "react-native-custom-qr-codes-expo";

// create a component
const ScanPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstview}>
        <Image
          style={{ height: "60%", width: "50%" }}
          source={require("../../assets/amp1.png")}
        />
        <Ionicons
          onPress={() => navigation.navigate("MyProfile")}
          style={{
            position: "absolute",
            right: 30,
            fontSize: 25,
            color: "white",
          }}
          name="person-outline"
        />
      </View>
      <View style={styles.secondview}>
        <Text style={styles.maintexts}>Exchange Contact Information</Text>
        <Text style={styles.subtexts}>
          Scan this QR below to share your contacts
        </Text>
      </View>
      <View style={styles.thirdview}>
        <QRCode
          content={JSON.stringify([
            {
              name: "Bilal Zakari",
              role: "Software Engineering",
              phone: "+233 209688728",
              email: "bzak954@gmail.com",
              location: "kasoa",
            },
          ])}
          logo={require("../../assets/npic.jpg")}
        />
      </View>
      <View style={styles.fourthview}>
        <Image
          style={{
            marginRight: 10,
            height: 50,
            width: 50,
            borderRadius: 50,
          }}
          source={require("../../assets/1041797.jpg")}
        />
        <View>
          <Text style={styles.maintexts}>Austin Post</Text>
          <Text style={styles.subtexts}>Artiste</Text>
        </View>
      </View>
      <View style={styles.fifthview}>
        <Text style={{ fontSize: 13, marginRight: 20 }}>
          Want to add a new connection?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Scanner")}>
          <Text
            style={{
              color: "brown",
              borderWidth: 1,
              borderColor: "brown",
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}
          >
            Scan QR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "white",
  },
  firstview: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "red",
  },
  secondview: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 40,
    width: "100%",
  },
  thirdview: {
    flex: 3,
    alignItems: "center",
    width: "100%",
  },
  fourthview: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 40,
    width: "100%",
  },
  fifthview: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    borderTopWidth: 1,
    borderTopColor: "silver",
  },
  maintexts: {
    fontSize: 16,
    marginBottom: 10,
  },
  subtexts: {
    fontSize: 16,
    color: "grey",
  },
});

//make this component available to the app
export default ScanPage;
