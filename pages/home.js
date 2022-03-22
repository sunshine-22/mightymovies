import React,{useState,useEffect,Component} from "react"
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView,Image,Keyboard,TextInput,Button,BackHandler,Alert,Linking,ActivityIndicator,TouchableOpacity,SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home =({navigation})=>{
    const[demo,setdemo]=useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [accountbtn, setaccountbtn] = useState(true);
    const sk =async ()=>{  
       
        try{ 
         
          let user = await AsyncStorage.getItem('key');  
          
          fetch('https://mightymovies.pythonanywhere.com/api/verify/', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "username":user,
          })
          
        }).then((response)=>response.json())
          .then((responseData)=>{
              console.log(responseData);
            if (responseData.message=="success") {
                setIsLoading(false);
                setaccountbtn(false);  
                navigation.navigate("Dashboard",{userdata:responseData});
            } 
    
        }).done();
        
        }   
        catch(error){  
          alert(error)
          setIsLoading(false);
          setaccountbtn(false);  
        }  
      } 
      useEffect(() => {
        sk();
      }, []); 
    
    return(
        <SafeAreaView style={{backgroundColor:"black",flex:1}}>
            <ScrollView>
                <View style={{alignItems:"center"}}>
                    <Image source={require('./images/m.png')} style={{width:300,height:250}} />
                </View>
                <View style={{alignItems:"center",marginTop:200}}>
                    <Text style={{color:"white",fontWeight:"bold",fontSize:25}}>Enjoy Movies,Dramas,</Text>
                    <Text style={{color:"white",fontWeight:"bold",fontSize:25}}>Trailers and more!</Text>
                </View>
                
                <View style={{marginTop:50,width:300,alignSelf:"center"}}>
                    <TouchableOpacity >
                        <Button title="Create an Account" onPress={()=>navigation.navigate('Signup')} disabled={accountbtn}></Button>
                    </TouchableOpacity>
                    <View style={{marginTop:20,width:300,alignSelf:"center"}}>
                        <TouchableOpacity>
                            <Button title="Log IN" color={"#9da4b0"} onPress={()=>navigation.navigate("Signin")} disabled={accountbtn}></Button>
                        </TouchableOpacity>
                        {isLoading && <ActivityIndicator size="large" color="white" />}
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
};

export default Home;