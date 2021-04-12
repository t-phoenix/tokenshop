import * as React from 'react';
import { View, Image, Text, StyleSheet } from "react-native";


export default function WalletIcon({icon, title}){
    return(
        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{paddingHorizontal:10,paddingVertical:20 , backgroundColor:'rgba(255,255,255,0.5)', height: 80, width: 80, borderRadius:25, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={icon}/>
            </View>
            <Text style={{fontSize:14, paddingVertical:4}}>{title}</Text>
        </View>
        
    );
}


