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
  FlatList,
} from "react-native";

//import images
import background from "../assets/background.png";
import dress1 from "../assets//dress/dress1.png";
import dress2 from "../assets//dress/dress2.png";
import dress3 from "../assets//dress/dress3.png";
import dress4 from "../assets//dress/dress4.png";

//import components
import AppBar from "../components/appBar";

//import icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ListingScreen({ navigation, company }) {
  const [listCardData, setListCardData] = React.useState([
    {"dress":dress1, "title":"SASSAFRAS", "description": "Accordian Pleats Empire Dress", "cUSD":"12.75"},
    {"dress":dress2, "title":"SASSAFRAS", "description": "Women Printed Fit and Flare Dress", "cUSD":"12.5"},
    {"dress":dress3, "title":"Harpa", "description": "Women Printed Maxi Dress", "cUSD":"11.5"},
    {"dress":dress4, "title":"Veni Vedi Vici", "description": "Ruched Bodycon dress", "cUSD":"10.25"},

  ]);

  function renderItem({ item }) {
    return (
      <View style={styles.shadowBox}>
        <View>
          <Image
            resizeMode="contain"
            source={item.dress}
            style={{ height: 180, width: 150, borderRadius: 20 }}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            width: 150,
            maxHeight: 45,
            marginTop: 14,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 4 }}>
            {item.title}
          </Text>
          <Text>{item.description}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            width: 150,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", justifyContent:"flex-start"}}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>{item.cUSD} cUSD</Text>
            <MaterialCommunityIcons name="unfold-more-horizontal" size={20} />
          </View>
          <View style={{ flexDirection: "row", justifyContent:"flex-end"}}>
            <MaterialCommunityIcons name="cart-plus" size={20} style={{marginRight:4}} />
            <MaterialCommunityIcons name="heart-outline" size={20} />
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
              paddingHorizontal: 4,
              position: "absolute",
              width: Dimensions.get("screen").width,
            }}
          >
            {/* APP BAR HERE */}
            <AppBar navigation={navigation} navigateToScreen="Details" />

            {/* Screen Utility Bar */}
            <View
              style={{
                flexDirection: "row",
                marginVertical: 10,
                marginHorizontal: 4,
                paddingHorizontal: 20,
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "rgba(255,255,255,0.5)",
                height: 60,
                borderRadius: 25,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="menu"
                  size={30}
                  style={{ marginHorizontal: 4 }}
                />
                <MaterialCommunityIcons
                  name="filter-outline"
                  size={30}
                  style={{ marginHorizontal: 4 }}
                />
              </View>

              <View>
                <MaterialCommunityIcons name="magnify" size={30} />
              </View>
            </View>
            {/* Screen Utility Bar End Here */}

            <FlatList
              style={{ margin: 5 }}
              data={listCardData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              scrollEnabled={false}
            />
          </View>
        </ImageBackground>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadowBox: {
    flexDirection: "column",
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
    height: 300,
    width: 180,
    borderRadius: 25,
    justifyContent: "flex-start",
    alignItems: "center",
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
