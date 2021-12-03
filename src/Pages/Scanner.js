//import liraries
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

// create a component
const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not Yet SCanned");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  };

  // Request camera permision
  useEffect(() => {
    askForCameraPermission();
  }, []);

  //when barcode is scanned
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("type: " + type + "data:" + data);
  };

  //check permision and return the screen
  if (hasPermission === null) {
    return (
      <View>
        <Text>Requesting for camera</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.scanner}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 700, width: 400 }}
        />
        <Text>{text}</Text>
      </View>
      <View style={styles.bottomview}>
        <Text style={{ fontSize: 13, marginRight: 40 }}>
          Want to share your contact?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: "brown",
              borderWidth: 1,
              borderColor: "brown",
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}
          >
            Send QR
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
    backgroundColor: "black",
  },
  scanner: {
    flex: 4,

    alignItems: "center",
    justifyContent: "center",
    marginVertical: 200,
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
  },
  bottomview: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    borderTopWidth: 1,
    borderTopColor: "silver",
  },
});

//make this component available to the app
export default Scanner;
