import React,{useState,useEffect,Component} from "react"
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView,Image,Keyboard,TextInput,Button,BackHandler,Alert,Linking,ActivityIndicator,TouchableOpacity,SafeAreaView } from 'react-native';

const Forgotpassword=({navigation})=>{
    const[email,useremail]=useState(null);
    const[data,setdata]=useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const[uotp,setotp]=useState(null);
    const login=()=>{
        setIsLoading(!isLoading);
        fetch('https://mightymovies.pythonanywhere.com/api/forgotpassword/', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "email":email,
          })
          
        }).then((response)=>response.json())
          .then((responseData)=>{
           
            setdata(responseData.message);
            setIsLoading(false);
            setotp(responseData.otp)
            navigation.navigate("Otppage",{utp:responseData.otp})
             
          }).done();
         

    }
    return(
        <SafeAreaView style={{backgroundColor:"black",flex:1}}>
        <ScrollView>
           <View style={{margin:20,flexDirection:"row",justifyContent:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:35,color:"#fc0509"}}>M<Text style={{fontWeight:"bold",fontSize:35,color:"#fc05e4"}}>I</Text></Text><Text style={{fontWeight:"bold",fontSize:35,color:"#6734eb"}}>G</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05ebf7"}}>H</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f742"}}>T</Text><Text style={{fontWeight:"bold",fontSize:35,color:"yellow"}}>Y</Text>
                <Text style={{fontWeight:"bold",fontSize:35,color:"#6af705"}}> M</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f7e7"}}>O</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#b2f705"}}>V</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f782"}}>I</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#f7053d"}}>E</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#f7c305"}}>S</Text>
           </View>
           <View style={{alignItems:"center",height:300}}>
               <Image source={require("./images/forgot.png")} />
           </View>
           <View style={{marginTop:50}}>
               <Text style={{fontWeight:"bold",fontSize:25,color:"white",margin:15}}>ForgotPassword?</Text>
                <TextInput placeholder="Enter E-mail" style={{borderWidth:1,borderColor:"white",borderRadius:10,height:45,margin:15,padding:10,color:"white"}} placeholderTextColor='white' onChangeText={useremail}></TextInput>
            </View>
            <View style={{margin:15}}>
                <TouchableOpacity>
                    {isLoading && <ActivityIndicator size="large" color="white" />}
                    <Button title="Recover Password" onPress={()=>{login();}}></Button>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:"center"}}>
                 <Text style={{color:"white"}}>{data}</Text>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
};


export default Forgotpassword;