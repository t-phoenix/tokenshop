import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

//import icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function AppBar({navigation, navigateToScreen}){
    return(
        <View>
            {/* App Bar Start Here */}
          <View
            style={{
              flexDirection: "row",
              height: 60,
              alignItems: "center",
              backgroundColor: 'rgba(255,255,255,0.5)',
              borderBottomLeftRadius:25,
              borderBottomRightRadius:25,
            }}
          >
            <View
              style={{ flex: 3, flexDirection: "row", alignItems: "center" }}
            >
                <TouchableOpacity onPress={()=>navigation.navigate(navigateToScreen)}><MaterialCommunityIcons name="arrow-left" size={30}/></TouchableOpacity>
              <MaterialCommunityIcons name="map-marker" size={30} color="#000000"/>
              <Text style={{fontSize:18}}> Bangalore </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <MaterialCommunityIcons name="wallet" size={30} color="#000000" />
              <MaterialCommunityIcons name="qrcode-scan" size={30} color="#000000"/>
            </View>
          </View>
          {/* App Bar End Here */}
        </View>
    );
}