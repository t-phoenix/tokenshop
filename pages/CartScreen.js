// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

//import icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//import images
import background from "../assets/background.png";
import dress1 from "../assets//dress/dress1.png";
import dress2 from "../assets//dress/dress2.png";


const CartScreen = ({ route, navigation }) => {
  const [orderData, setOrderData] = React.useState([
    {"dress":dress1, "store":"Amazon", "title":"SASSAFRAS", "description": "Accordian Pleats Empire Dress", "cUSD":"12.75"},
    {"dress":dress2, "store":"Myntra","title":"SASSAFRAS", "description": "Women Printed Fit and Flare Dress", "cUSD":"12.5"},]);

  function renderItem({ item }) {
    return (
        
      <View style={{flexDirection:'column', marginHorizontal:6, marginVertical:0,paddingVertical:0, height: 200}}>
      

      <View style={{flexDirection:'row' , paddingHorizontal:10,paddingVertical:20 , backgroundColor:'rgba(255,255,255,0.5)', height: 180, borderRadius:25, justifyContent:"flex-start", alignItems: "flex-start"}}>
        
        
        <Image resizeMode="contain" source={item.dress} style={{height: 140, width: 120}}/>
        
        <View style={{flexDirection: 'column', width: Dimensions.get("screen").width*0.50 , paddingHorizontal: 18 }}>
            <TouchableOpacity  style={{backgroundColor:"#FF0000", width:Dimensions.get("screen").width*0.25 ,paddingHorizontal:10, paddingVertical:2, marginVertical: 10, marginHorizontal: 2, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}><Text style={{color:"#fff"}}>Remove</Text></TouchableOpacity>
            <View style={{flexDirection: 'column', paddingHorizontal:4, wrap:true}}>
              <Text>Shopping Site: {item.store}</Text>
              <Text>Price: {item.cUSD} cUSD</Text>
              <Text>{item.title}</Text>
              <Text style={{color:"#666666"}}>{item.description}</Text>
            </View>
            <TouchableOpacity  style={{backgroundColor:"#FBCC5C", width:Dimensions.get("screen").width*0.25 ,paddingHorizontal:10, paddingVertical:2, marginVertical: 10, marginHorizontal: 2, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}><Text style={{color:"#fff"}}>more...</Text></TouchableOpacity>
        </View>
        
        

      </View>

  </View>
        
      
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
              position: "absolute",
              backgroundColor: "rgba(255,255,255,0)",
              width: Dimensions.get("screen").width,
              height: Dimensions.get("screen").height,
            }}
          >
            {/* App Bar Start Here */}
            <View
              style={{
                flexDirection: "row",
                height: 60,
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.5)",
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
              }}
            >
              <View
                style={{ flex: 3, flexDirection: "row", alignItems: "center" }}
              >
                <MaterialCommunityIcons
                  name="map-marker"
                  size={30}
                  color="#000000"
                />
                <Text style={{ fontSize: 18 }}> Bangalore </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <MaterialCommunityIcons
                  name="wallet"
                  size={30}
                  color="#000000"
                />
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={30}
                  color="#000000"
                />
              </View>
            </View>
            {/* App Bar End Here */}

            {/* title1 */}
            <View
                style={{
                  marginTop: 20,
                  marginHorizontal: 40,
                  paddingVertical: 0,
                  height: 20,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Checkout</Text>
              </View>
              {/* title1 ends*/}

              {/* Store cards */}
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  
                  marginHorizontal: 24,
                  marginTop: 0,
                  height: 140,
                  
                  paddingHorizontal: 40,
                  paddingTop: 10,
                  paddingBottom:4,
                  backgroundColor: "rgba(255,255,255,0.5)",
                  borderRadius: 25,
                }}>
                  <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center", width: Dimensions.get("screen").width*0.7,marginVertical:10}}>
                    <Text>Total no. of items:</Text>
                    <View style={{backgroundColor:"#FBCC5C", height:30, width:30, borderRadius:15, justifyContent:"center", alignItems: "center"}}>
                      <Text style={{color:"#fff"}}>2</Text>
                    </View>
                  </View>

                  <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "flex-start", width: Dimensions.get("screen").width*0.7,}}>
                    <Text style={{width:Dimensions.get("screen").width*0.4}}>Online shopping sites involved:</Text>
                    <View style={{ flexDirection: "column", }}>
                      <View style={{ flexDirection:"row" ,backgroundColor:"#FBCC5C", height:25, width:100, borderRadius:15, justifyContent:"space-between", alignItems: "center", paddingHorizontal: 10, marginBottom:10}}>
                        <Text style={{color:"#fff"}}>Amazon</Text>
                        <Text > 1 </Text>
                      </View>
                      <View style={{ flexDirection:"row" ,backgroundColor:"#FBCC5C", height:25, width:100, borderRadius:15, justifyContent:"space-between", alignItems: "center", paddingHorizontal: 10}}>
                        <Text style={{color:"#fff"}}>Myntra</Text>
                        <Text > 1 </Text>
                      </View>
                    </View>
                  </View>
                
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
                <Text style={{ fontWeight: "bold" }}>Product Details</Text>
              </View>
              {/* title2 ends*/}

              {/* Product List */}
              <View style={{paddingHorizontal:20}}>
              <FlatList
                
                margin={5}
                data={orderData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={false}
              />
              </View>

              {/* Total Segment */}
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  
                  marginHorizontal: 24,
                  marginTop: 0,
                  height: 90,
                  
                  paddingHorizontal: 40,
                  paddingTop: 20,
                  paddingBottom:4,
                  backgroundColor: "rgba(255,255,255,0.5)",
                  borderRadius: 25,
                }}>
                  <Text style={{fontWeight: "bold"}}>Total: 25.25 cUSD</Text>
                  <View style={{flexDirection: "row", justifyContent: "space-between", width:Dimensions.get("screen").width*0.7, marginVertical:6}}>
                    <TouchableOpacity  style={{backgroundColor:"#35D07F", width:Dimensions.get("screen").width*0.30 ,height: 30 ,paddingHorizontal:10, paddingVertical:2, marginVertical: 10, marginHorizontal: 2, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}><Text style={{color:"#fff"}}>Pay with cUSD</Text></TouchableOpacity>
                    <TouchableOpacity  style={{backgroundColor:"#35D07F", width:Dimensions.get("screen").width*0.30 ,height: 30 ,paddingHorizontal:10, paddingVertical:2, marginVertical: 10, marginHorizontal: 2, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}><Text style={{color:"#fff"}}>Pay with CELO</Text></TouchableOpacity>
                  </View>
                  
                
              </View>





          </View>
        </ImageBackground>
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  shadowBox: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "rgba(255,255,255,0.5)",
    height: 180,
    borderRadius: 25,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
export default CartScreen;
