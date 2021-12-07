//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const MemberProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstview}>
        <MaterialIcons
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 20,
            color: "white",
            fontSize: 30,
          }}
          name="keyboard-backspace"
        />
        <Text style={{ color: "white", fontSize: 20, letterSpacing: 2 }}>
          Member profile
        </Text>
      </View>
      <View style={styles.secondview}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ height: 80, width: 80, borderRadius: 50, marginRight: 15 }}
            source={require("../../assets/npic.jpg")}
          />
          <View>
            <Text style={{ fontSize: 15, marginBottom: 5 }}>Bilal Zack</Text>
            <Text style={{ fontSize: 15, color: "grey" }}>
              Software Developer
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Entypo style={styles.socialsicons} name="twitter-with-circle" />
          <Entypo style={styles.socialsicons} name="linkedin-with-circle" />
        </View>
      </View>
      <View style={styles.thirdview}>
        <View style={styles.contacts}>
          <Feather style={styles.contactsicon} name="phone" />
          <Text style={styles.contactstexts}>+233 (209) 688 728 </Text>
        </View>
        <View style={styles.contacts}>
          <MaterialCommunityIcons
            style={styles.contactsicon}
            name="email-outline"
          />
          <Text style={styles.contactstexts}>bzak954@gmail.com</Text>
        </View>
        <View style={styles.contacts}>
          <SimpleLineIcons style={styles.contactsicon} name="location-pin" />
          <Text style={styles.contactstexts}>Kasoa, Accra-Ghana</Text>
        </View>
      </View>
      <View style={styles.fourthview}></View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 30,
  },
  firstview: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "red",
  },
  secondview: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  thirdview: {
    flex: 2,
    paddingHorizontal: 20,
    width: "100%",
  },
  fourthview: {
    flex: 3,
  },
  socialsicons: {
    fontSize: 40,
    color: "#424242",
    marginRight: 15,
    marginTop: 20,
  },
  contacts: {
    flexDirection: "row",
    marginVertical: 15,
  },
  contactsicon: {
    fontSize: 20,
    color: "grey",
  },
  contactstexts: {
    fontSize: 18,
    color: "#424242",
    marginLeft: 15,
  },
});

//make this component available to the app
export default MemberProfile;
