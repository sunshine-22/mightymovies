import React,{useState,useEffect,Component} from "react"
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView,Image,Keyboard,TextInput,Button,BackHandler,Alert,ActivityIndicator,SafeAreaView,TouchableOpacity } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';


const Signup =({navigation})=>{
    const [name,username]=useState(null);
    const[email,useremail]=useState(null);
    const[mobile,usermobile]=useState(null);
    const[password,userpassword]=useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data,setdata]=useState(null);
    
    const register= ()=>{
        setIsLoading(!isLoading);
        fetch('https://mightymovies.pythonanywhere.com/api/registration/', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "name":name,
            "email":email,
            "mobile":mobile,
            "password":password,
            "is_active":false
          })
          
        }).then((response)=>response.json())
          .then((responseData)=>{
            console.log(responseData)
            setdata(responseData.message);
            setIsLoading(false);
             
          }).done();

        };
    return(
        <SafeAreaView style={{backgroundColor:"black",flex:1}}>
            <ScrollView>
                <View style={{margin:20,flexDirection:"row",justifyContent:"center"}}>
                    <Text style={{fontWeight:"bold",fontSize:35,color:"#fc0509"}}>M<Text style={{fontWeight:"bold",fontSize:35,color:"#fc05e4"}}>I</Text></Text><Text style={{fontWeight:"bold",fontSize:35,color:"#6734eb"}}>G</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05ebf7"}}>H</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f742"}}>T</Text><Text style={{fontWeight:"bold",fontSize:35,color:"yellow"}}>Y</Text>
                    <Text style={{fontWeight:"bold",fontSize:35,color:"#6af705"}}> M</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f7e7"}}>O</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#b2f705"}}>V</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#05f782"}}>I</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#f7053d"}}>E</Text><Text style={{fontWeight:"bold",fontSize:35,color:"#f7c305"}}>S</Text>
                </View>
                <View>
                    <Text style={{fontWeight:"bold",fontSize:25,color:"white",margin:15}}>Register</Text>
                    <TextInput placeholder="Enter Name" style={{borderWidth:1,borderColor:"white",borderRadius:10,height:45,margin:15,padding:10,color:"white"}} onChangeText={username} placeholderTextColor='white'></TextInput>
                    <TextInput placeholder="Enter E-mail" style={{borderWidth:1,borderColor:"white",borderRadius:10,height:45,margin:15,padding:10,color:"white"}} onChangeText={useremail} placeholderTextColor='white'></TextInput>
                    <TextInput placeholder="Enter MobileNumber" style={{borderWidth:1,borderColor:"white",borderRadius:10,height:45,margin:15,padding:10,color:"white"}} onChangeText={usermobile} placeholderTextColor='white'></TextInput>
                    <TextInput placeholder="Create Password" style={{borderWidth:1,borderColor:"white",borderRadius:10,height:45,margin:15,padding:10,color:"white"}} onChangeText={userpassword} placeholderTextColor='white'></TextInput>
                </View>
                <View style={{margin:15}}>
                    <TouchableOpacity >
                        {isLoading && <ActivityIndicator size="large" color="white" />}
                        <Button title="Create New Account" onPress={()=>{register();}} ></Button>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:"center"}}>
                 <Text style={{color:"white"}}>{data}</Text>
                </View>
                <View>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"lightblue",margin:15}} onPress={()=>navigation.navigate('Signin')}>Alredy have an account? Sign-In</Text>
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
                
           </ScrollView>

        </SafeAreaView>
    );
};

export default Signup;