// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from "react";
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Dimensions,  } from "react-native";

//import images
import background from "../assets/background.png";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <ImageBackground
          source={background}
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              position: "absolute",
              backgroundColor: "rgba(255,255,255,0)",
              width: Dimensions.get("screen").width,
              height: Dimensions.get("screen").height,
              justifyContent: "center", 
              alignItems:"center"
            }}
          >
            <Text style={{fontSize:30, fontWeight: "bold"}}>Coming Soon!</Text>
            
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;
