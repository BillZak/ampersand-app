import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

export default function RegistrationPage({ navigation }) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
          Register
        </Text>
      </View>

      <View style={styles.secondview}>
        <TouchableOpacity onPress={() => pickImage()} style={{ flex: 1 }}>
          {image ? (
            <View style={{ flex: 1 }}>
              <Image
                source={{ uri: image }}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                  position: "absolute",
                }}
              />
              <Text style={styles.touchable}>EDIT PPRFLIE PHOTO</Text>
            </View>
          ) : (
            <View>
              <Image
                source={require("../../assets/1041797.jpg")}
                style={{
                  width: "100%",
                  height: 200,
                  resizeMode: "cover",
                  position: "absolute",
                }}
              />
              <Text style={styles.photo}>ADD PPRFLIE PHOTO</Text>
            </View>
          )}
        </TouchableOpacity>
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
  touchable: {
    textAlign: "center",
    marginTop: "20%",
    marginHorizontal: 40,
    borderWidth: 2,
    padding: 10,
    color: "white",
    borderColor: "white",
  },
});
