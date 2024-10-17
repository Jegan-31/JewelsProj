<<<<<<< Updated upstream
import Login from '@/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Button, Pressable } from 'react-native';


const Stack = createNativeStackNavigator();
const mainpageApp = () => {
  function btnClick(){
    
 
  return (
    console.log('this is from stack naviga'),
      <NavigationContainer>
          <Stack.Navigator >
              
              <Stack.Screen name ="Login" component={Login} />
              
          </Stack.Navigator>
      </NavigationContainer>
    //console.log('button press event ;')

  )}
  
  return (
    console.log('this is from index view naviga'),

    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
      <Image
              style={styles.logo}
              //className="w-full flex-1"
              source={require("C:/JewelsProj/Jewelsapp/assets/images/JCSLogo.png")}
            />
        {/* <Text style={styles.title}>JCS</Text>
        <Text style={styles.subtitle}>Jewel Creations</Text> */}
      </View>
      <View style={styles.buttonContainer}>
       <Button title='Login' onPress={btnClick} />  
    <Pressable  onPress={btnClick}>
      {/* <Text> dkckjwcnkwjejcbjwebcn </Text> */}
    </Pressable>
        <TouchableOpacity style={styles.signupButton}> 
          <Text style={styles.signupButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/collections/Gold-Rings_1920x.jpg?v=1657794189' }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardSubtitle}>LATEST COLLECTION</Text>
            <Text style={styles.cardTitle}>Wedding Rings</Text>
            <Text style={styles.cardDescription}>at a unbelievable price</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/collections/JCGJRN1008_2_1920x.jpg?v=1627546346' }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardSubtitle}>LATEST COLLECTION</Text>
            <Text style={styles.cardTitle}>Necklace</Text>
            <Text style={styles.cardDescription}>at a unbelievable price</Text>
            <TouchableOpacity style={[styles.buyButton, styles.buyButtonYellow]}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
=======
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Homescreen from "@/screens/Home";
import LoginApp from "@/screens/Login";
import Forgot from "@/screens/ForgotPassword";
import Newuser from "@/screens/CreateAccount";
import Resetpass from "@/screens/ResetPass";
import LandingScreen from "@/screens/Landing";
import Otpver from "@/screens/OtpVerify";
import Success from "@/screens/Congrats";
import Joinsch from "@/screens/PlanDetails";
import Prodet from "@/screens/ProfileDetails";
import Paynow from "@/screens/PayNow";

const Stack = createNativeStackNavigator();

const MainpageApp: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  name="Home"  component={Homescreen}  />
        <Stack.Screen name="CreateAccount" component={Newuser} options={{ headerShown: false }} />
        <Stack.Screen name="LoginApp" component={LoginApp} />
        <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }} />
        <Stack.Screen name="Resetpass" component={Resetpass}  options={{ headerShown: false }}/>
        <Stack.Screen name="LandingScreen" component={LandingScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Otpver" component={Otpver} options={{ headerShown: false }} />
        <Stack.Screen name="Congrats" component={Success}  options={{ headerShown: false }}/>
        <Stack.Screen name="Joinsch" component={Joinsch}  options={{ headerShown: false }}/>
        <Stack.Screen name="Prodet" component={Prodet}  options={{ headerShown: false }}/> 
        <Stack.Screen name="Paynow" component={Paynow}  options={{ headerShown: false }}/> 
       
      </Stack.Navigator>
    </NavigationContainer>

    
>>>>>>> Stashed changes
  );
};



export default MainpageApp;