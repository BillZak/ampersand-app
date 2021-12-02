import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//import pages
import RegistrationPage from "../Pages/registrationPage";
import SecondPage from "../Pages/secondPage";
import SignInPage from "../Pages/signInPage";
import WelcomePage from "../Pages/WelcomePage";
import MyProfile from "../Pages/myProfilePage";
import MemberProfile from "../Pages/memberProfile";
import ScanPage from "../Pages/scanPage";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={() => "Welcome"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="Registration" component={RegistrationPage} />
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="MemberProfile" component={MemberProfile} />
        <Stack.Screen name="Scan" component={ScanPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
