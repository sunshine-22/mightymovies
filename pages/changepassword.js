import React,{useState,useEffect,Component} from "react"
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView,Image,Keyboard,TextInput,Button,BackHandler,Alert,Linking,ActivityIndicator,TouchableOpacity,SafeAreaView } from 'react-native';

const Confirmpassword=({navigation})=>{
    
    return(
        <SafeAreaView style={{backgroundColor:"black",flex:1}}>
        <ScrollView>
           <View style={{margin:20,flexDirection:"row",justifyContent:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:35,color:"#fc0509"}}>M<Text style={{fontWeight:"bold",fontSize:35,color:"#fc05e4"}}>I</Text></Text><Text style={{fontWeight:"bold",fontSize:35,color:"#6734eb"}}>G</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05ebf7"}}>H</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f742"}}>T</Text><Text style={{fontWeight:"bold",fontSize:35,color:"yellow"}}>Y</Text>
                <Text style={{fontWeight:"bold",fontSize:35,color:"#6af705"}}> M</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f7e7"}}>O</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#b2f705"}}>V</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f782"}}>I</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#f7053d"}}>E</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#f7c305"}}>S</Text>
           </View>
           <View style={{marginTop:130}} >
               <Text style={{fontSize:20,fontWeight:"bold",color:"white",margin:12}}>Enter New Password</Text>
               <TextInput style={{borderWidth:1,borderColor:"white",color:"white",padding:10,margin:12,borderRadius:10}}></TextInput>
               <Text style={{fontSize:20,fontWeight:"bold",color:"white",margin:12}}>Confirm Password</Text>
               <TextInput style={{borderWidth:1,borderColor:"white",color:"white",padding:10,margin:12,borderRadius:10}}></TextInput>
           </View>
           <View style={{margin:15}}>
               <TouchableOpacity>
                   <Button title="Change Password"></Button>
               </TouchableOpacity>
           </View>
        </ScrollView>
        </SafeAreaView>
    );
};


export default Confirmpassword;