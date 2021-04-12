// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";

//import images
import background from "../assets/background.png";
import buy from "../assets/wallet/buy.png";
import send from "../assets/wallet/send.png";
import get from "../assets/wallet/get.png"
import amazon from "../assets/company/Amazon.png";
import nike from "../assets/company/nike.png";

//import icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Import components
import WalletIcon from "../components/walletIcon";
import MarketPlaceCard from "../components/marketPlaceCard";


const HomeScreen = ({ navigation }) => {
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
        <View style={{ flex: 1, flexDirection: "column", paddingHorizontal: 4, position: "absolute"}}>
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





          {/* Body Starts Here */}
          <View style={{}}>
            <View style={{flexDirection:'column', alignItems: 'flex-start',marginHorizontal: 24, marginTop:30, height:160, paddingHorizontal: 40, paddingVertical:10,  backgroundColor:'rgba(255,255,255,0.5)', borderRadius:25}}>
                
              <Text style={{fontSize: 24, paddingVertical: 10}}>Hello Abhinil!</Text>
              <Text>Connect with your friends who use tokenShop. You can transfer Celo to them and much more.</Text>
              <TouchableOpacity style={{backgroundColor:"#35D07F", paddingHorizontal:10, paddingVertical:2, marginVertical: 10, marginHorizontal: 2, borderRadius: 10}}><Text style={{color:"#fff"}}>Connect Now</Text></TouchableOpacity>
              
            </View>

          </View>


          <View style={{height:28}}>{/*Space for carousel dots*/}</View>

          <View style={{flexDirection:'row',justifyContent:'space-between', height:120, marginHorizontal: 28 }}>
              <WalletIcon icon={send} title="send CELO"/>

              <WalletIcon icon={get} title="Get CELO"/>

              <WalletIcon icon={buy} title="Buy CELO"/>

          </View>


          <View>
              
                <MarketPlaceCard marketType="e-commerce" image={amazon} company="Amazon" navigation={navigation}/>
              
              

              <MarketPlaceCard marketType="brand" image={nike} company="nike" navigation={navigation} />

          </View>

          {/* Body Ends Here */}

        </View>
      </ImageBackground>
      </ScrollView>  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  
});
export default HomeScreen;
