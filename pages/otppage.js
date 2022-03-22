import React,{useState,useEffect,Component} from "react"
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView,Image,Keyboard,TextInput,Button,BackHandler,Alert,Linking,ActivityIndicator,TouchableOpacity,SafeAreaView } from 'react-native';

const Otppage=({navigation})=>{
   /*console.log(utp);
   global.uotp=String(utp.route.params.utp);*/
   const[o1,seto1]=useState(null);
   const[o2,seto2]=useState(null);
   const[o3,seto3]=useState(null);
   const[o4,seto4]=useState(null);
   function checkotp({navigation}){
       var eotp=o1+o2+o3+o4
       if(uotp==eotp){
            console.log("sbaidh");
          
       }
      
    }
    return(
        <SafeAreaView style={{backgroundColor:"black",flex:1}}>
        <ScrollView>
           <View style={{margin:20,flexDirection:"row",justifyContent:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:35,color:"#fc0509"}}>M<Text style={{fontWeight:"bold",fontSize:35,color:"#fc05e4"}}>I</Text></Text><Text style={{fontWeight:"bold",fontSize:35,color:"#6734eb"}}>G</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05ebf7"}}>H</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f742"}}>T</Text><Text style={{fontWeight:"bold",fontSize:35,color:"yellow"}}>Y</Text>
                <Text style={{fontWeight:"bold",fontSize:35,color:"#6af705"}}> M</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f7e7"}}>O</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#b2f705"}}>V</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f782"}}>I</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#f7053d"}}>E</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#f7c305"}}>S</Text>
           </View>
           <View style={{alignItems:"center",height:150,marginTop:20}}>
               <Image source={require("./images/otp.png")} />
           </View>
           <View style={{alignItems:"center",margin:10,marginTop:150}}>
               <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>Please Enter a 4 digit code to Verify Next</Text>
           </View>
           <View>
               <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                   <TextInput style={{borderWidth:1,borderColor:"white",height:45,width:45,margin:20,padding:10,borderRadius:10,color:"white"}} maxLength={1} keyboardType="numeric" onChangeText={seto1}></TextInput>
                   <TextInput style={{borderWidth:1,borderColor:"white",height:45,width:45,margin:20,padding:10,borderRadius:10,color:"white"}} maxLength={1} keyboardType="numeric" onChangeText={seto2}></TextInput>
                   <TextInput style={{borderWidth:1,borderColor:"white",height:45,width:45,margin:20,padding:10,borderRadius:10,color:"white"}} maxLength={1} keyboardType="numeric" onChangeText={seto3}></TextInput>
                   <TextInput style={{borderWidth:1,borderColor:"white",height:45,width:45,margin:20,padding:10,borderRadius:10,color:"white"}} maxLength={1} keyboardType="numeric" onChangeText={seto4}></TextInput>
                </View>
           </View>
           <View style={{margin:15}}>
                <TouchableOpacity>
                    <Button title="Verify" onPress={()=>navigation.navigate("Confirmpassword")}></Button>
                </TouchableOpacity>
           </View>
        </ScrollView>
        </SafeAreaView>
    );
};


export default Otppage;