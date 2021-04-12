// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
  NestedScrollView
} from "react-native";

//import images
import background from "../assets/background.png";



//import components
import AppBar from "../components/appBar";

//import store images
import amazon from "../assets/company/Amazon.png";
import flipkart from "../assets/company/flipkart.png";
import myntra from "../assets/company/myntra.png";
import tataCliq from "../assets/company/tata.png";
import gearbest from "../assets/company/gearbest.png";
import more from "../assets/company/more.png"

//import brand images
import nike from "../assets/company/nike.png";
import adidas from "../assets/company/adidas.png";
import puma from "../assets/company/puma.png";
import apple from "../assets/company/apple.png";
import samsung from "../assets/company/samsung.png";
import oneplus from "../assets/company/oneplus.png";
import sony from "../assets/company/sony.png";
import jbl from "../assets/company/jbl.png";


const DetailsScreen = ({ navigation }) => {
  const [storeData, setStoreData] = React.useState([
    amazon,
    flipkart,
    myntra,
    tataCliq,
    gearbest,
    more
  ]);

  const [brandData, setBrandData]= React.useState([
    nike, adidas, puma, apple, samsung, oneplus,sony,jbl, more
  ])

  function renderItem({ item }) {
    return (
        <TouchableOpacity onPress={() =>navigation.navigate("Listing", company= {item})}>
        <View
          
          style={styles.shadowBox}
        >
          <Image resizeMode="contain" source={item} style={{flex: 1}} />
        </View>
        </TouchableOpacity>
      
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
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
              paddingHorizontal: 4,
              position: "absolute",
              width: Dimensions.get("screen").width,
            }}
          >
            {/* APP BAR HERE */}
            <AppBar navigation={navigation} navigateToScreen="Home" />

            {/* Body Start Here */}
            <View style={{ color: "#000", height: 30 }}>
              {/* title1 */}
              <View
                style={{
                  marginTop: 20,
                  marginHorizontal: 40,
                  paddingVertical: 0,
                  height: 20,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Stores</Text>
              </View>
              {/* title1 ends*/}

              {/* Store cards */}
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginHorizontal: 24,
                  marginTop: 0,
                  height: 240,
                  paddingHorizontal: 10,
                  paddingVertical: 0,
                  backgroundColor: "rgba(255,255,255,0.5)",
                  borderRadius: 25,

                }}
              >
                <FlatList
                  style={{margin:5}}
                  data={storeData}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={3}
                  scrollEnabled={false}
                />
              </View>
              {/* Store Cards End   */}


              {/* title2 */}
              <View
                style={{
                  marginTop: 20,
                  marginHorizontal: 40,
                  paddingVertical: 0,
                  height: 20,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Brands</Text>
              </View>
              {/* title2 ends*/}

              {/* Brand cards */}
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginHorizontal: 24,
                  marginTop: 0,
                  height: 360,
                  paddingHorizontal: 10,
                  paddingVertical: 0,
                  backgroundColor: "rgba(255,255,255,0.5)",
                  borderRadius: 25,

                }}
              >
                <FlatList
                  style={{margin:5}}
                  data={brandData}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={3}
                  scrollEnabled={false}
                />
              </View>
              {/* Brand Cards End   */}


            </View>

            <View style={{}}></View>
          </View>
        </ImageBackground>
      
    </SafeAreaView>
  );
};
export default DetailsScreen;

const styles = StyleSheet.create({
  shadowBox:{ 
    marginHorizontal:10, 
    marginVertical:10,
    paddingHorizontal:10,
    paddingVertical:24 ,
    backgroundColor:'rgba(255,255,255,0.5)', 
    height: 90, 
    width: 90, 
    borderRadius:25, 
    justifyContent: 'center', 
    alignItems: 'center' ,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  }
});
