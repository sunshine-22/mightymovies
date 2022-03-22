import React,{useState,useEffect,Component} from "react"
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView,Image,Keyboard,TextInput,Button,BackHandler,Alert,Linking,ActivityIndicator,TouchableOpacity,SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from "react-native-login-screen/build/dist/LoginScreen";

const Signin=({navigation})=>{
    const[user,setuser]=useState(null);
    const[password,setpassword]=useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data,setdata]=useState(null);
    const auth=()=>{
        setIsLoading(!isLoading);
        fetch('https://mightymovies.pythonanywhere.com/api/login/', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "username":user,
            "password":password,
          })
          
        }).then((response)=>response.json())
          .then((responseData)=>{
              console.log(responseData);
              
            if(responseData.message=="success"){
                setIsLoading(false);
                AsyncStorage.setItem('key',responseData.email)
                navigation.navigate("Dashboard",{userdata:responseData});
                
            }
            else{
                setdata(responseData.message)
                setIsLoading(false);
            }
             
          }).done();
    }
    return(
        <SafeAreaView style={{backgroundColor:"black",flex:1}}>
           <View style={{margin:20,flexDirection:"row",justifyContent:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:35,color:"#fc0509"}}>M<Text style={{fontWeight:"bold",fontSize:35,color:"#fc05e4"}}>I</Text></Text><Text style={{fontWeight:"bold",fontSize:35,color:"#6734eb"}}>G</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05ebf7"}}>H</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f742"}}>T</Text><Text style={{fontWeight:"bold",fontSize:35,color:"yellow"}}>Y</Text>
                <Text style={{fontWeight:"bold",fontSize:35,color:"#6af705"}}> M</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f7e7"}}>O</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#b2f705"}}>V</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f782"}}>I</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#f7053d"}}>E</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#f7c305"}}>S</Text>
           </View>
           <View>
               <Text style={{fontWeight:"bold",fontSize:25,color:"white",margin:15}}>Login</Text>
                <TextInput placeholder="Enter E-mail" style={{borderWidth:1,borderColor:"white",borderRadius:10,height:45,margin:15,padding:10,color:"white"}} placeholderTextColor='white' onChangeText={setuser}></TextInput>
                <TextInput placeholder="Enter Password" style={{borderWidth:1,borderColor:"white",borderRadius:10,height:45,margin:15,padding:10,color:"white"}} placeholderTextColor='white' onChangeText={setpassword}></TextInput>
                <Text style={{fontSize:13,color:"white",margin:15}} onPress={()=>navigation.navigate("Forgotpassword")}>Forgot Password?</Text>
           </View>
           <View style={{margin:15}}>
                <TouchableOpacity>
                    {isLoading && <ActivityIndicator size="large" color="white" />}
                    <Button title="Login"  onPress={()=>{auth();}}></Button>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:"center"}}>
                 <Text style={{color:"white"}}>{data}</Text>
            </View>
            <View>
                <Text style={{fontSize:15,fontWeight:"bold",color:"lightblue",margin:15}} onPress={()=>navigation.navigate('Signup')}>Don't have an account? Sign-Up</Text>
            </View>
            <View style={{borderBottomColor: 'white',borderBottomWidth: 1,margin:5}} />
            <View style={{margin:15}}>
                <TouchableOpacity style={{margin:12}}>
                    <Button title="Continue with Google"></Button>
                </TouchableOpacity>
                <TouchableOpacity style={{margin:12}}>
                    <Button title="Continue with Facebook"></Button>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{fontSize:16,color:"white",margin:5}}>By continuing, you agree to mighty moview <Text style={{color:"lightblue"}}>Terms of Use</Text> and <Text style={{color:"lightblue"}}>Privacy policy</Text></Text>
            </View>
        </SafeAreaView>
    );
};


export default Signin;