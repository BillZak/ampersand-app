import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//import pages
import RegistrationPage from "../Pages/registrationPage";
import SecondPage from "../Pages/secondPage";
import SignInPage from "../Pages/signInPage";
import WelcomePage from "../Pages/WelcomePage";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Registration" component={RegistrationPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="Welcome" component={WelcomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
