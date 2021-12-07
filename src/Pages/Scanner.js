//import liraries
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";

// create a component
const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.scanner}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
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

//navigation function
//() => NavigationContainer.navigate("MemberProfile")
