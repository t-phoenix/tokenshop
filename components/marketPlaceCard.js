import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from "react-native";



export default function MarketPlaceCard({marketType, image, company, navigation}){
    return(
        <View style={{flexDirection:'column', marginHorizontal:28, marginVertical:16,paddingVertical:8, height: 200}}>
              <Text style={{paddingHorizontal: 20, paddingVertical:4}}>tokenShop {marketType} marketplace</Text>

              <View style={{flexDirection:'row' , paddingHorizontal:10,paddingVertical:20 , backgroundColor:'rgba(255,255,255,0.5)', height: 160, borderRadius:25, justifyContent: "center", alignItems: 'center'}}>
                
                <View style={styles.shadowBox}>
                    <Image source={image}/>
                </View>
                <View style={{flexDirection: 'column', width: Dimensions.get("screen").width*0.50 , paddingHorizontal: 18 }}>
                    <Text>Use CELO to perform transaction at {company}</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("Details")} style={{backgroundColor:"#35D07F", width:Dimensions.get("screen").width*0.25 ,paddingHorizontal:10, paddingVertical:2, marginVertical: 10, marginHorizontal: 2, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}><Text style={{color:"#fff"}}>Explore</Text></TouchableOpacity>
                </View>
                
                <View></View>

              </View>

          </View>
    );
}


const styles = StyleSheet.create({
    shadowBox:{ 
        paddingHorizontal:10,
        paddingVertical:20 ,
        backgroundColor:'rgba(255,255,255,0.5)', 
        height: 100, 
        width: 100, 
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
})