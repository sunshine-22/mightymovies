import React,{useState,useEffect,Component} from "react"
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView,Image,Keyboard,TextInput,Button,BackHandler,Alert,Linking,ActivityIndicator,TouchableOpacity,SafeAreaView } from 'react-native';
import {WebView} from "react-native-webview"

const Player =(link)=>{
    var a=link.route.params.link;
    var b=link.route.params.about;
    var c=link.route.params.language
    var d=link.route.params.imdb
    var e=link.route.params.mlink
    
    return(
        <WebView source={{html: '<iframe width="100%" height="57%" src='+a+' frameborder="0" allow="autoplay"; encrypted-media" allowfullscreen></iframe><div style="font-size:70px;font-weight: bold;color:white;">About</div><div style="margin-left:15px;font-size:40px;color:white;">'+b+'</div><br><div style="font-size:50px;font-weight: bold;color:white;">Languages</div><div style="margin-left:15px;font-size:40px;color:white;">'+c+'</div><br><div style="font-size:50px;font-weight: bold;color:white;">IMDB</div><div style="margin-left:15px;font-size:40px;color:white;">'+d+'</div><br><div style="font-size:50px;font-weight: bold;color:white;">Watch Movie</div><div style="margin-left:15px;font-size:40px;color:white;">'+e+'</div>'}} style={{backgroundColor:"black"}}
        >
           
        </WebView>
    
    
        
    )
}

export default Player;