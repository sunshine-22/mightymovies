import React,{useState,useEffect,Component} from "react"
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView,Image,Keyboard,TextInput,Button,BackHandler,Alert,Linking,ActivityIndicator,TouchableOpacity,SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WebView } from 'react-native-webview';

function HomeScreen({navigation}){
    const[recommended,setrecommended]=useState(0);
    var recommendeddisplay=[];
    const[recents,setrecents]=useState(0);
    var recentsdisplay=[];
    const[kdramas,setkdramas]=useState(0);
    var kdramasdisplay=[];
    const[crime,setcrime]=useState(0);
    var crimedisplay=[];
    const[action,setaction]=useState(0);
    var actiondisplay=[];
    const[horror,sethorror]=useState(0);
    var horrordisplay=[];
    const[carousel,setcarousel]=useState(0);
    var carouseldisplay=[];
    const[kids,setkids]=useState(0);
    var kidsdisplay=[];
    const[comedy,setcomedy]=useState(0);
    var comedydisplay=[];
    const[popular,setpopular]=useState(0);
    var populardisplay=[];
    const[science,setscience]=useState(0);
    var sciencedisplay=[];
    
    const carosel=()=>{
      fetch('https://mightymovies.pythonanywhere.com/api/carousel/', {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          
          
        }).then((response)=>response.json())
          .then((responseData)=>{
            setcarousel(responseData)
            recomend();
          }).done();
        };      
          
        useEffect(() => {
          carosel();
        }, []);
    for(let i =0; i < carousel.length; i++){
      carouseldisplay.push(
        <View style={{borderRadius:10 }} key={carousel[i].id}>
          <Image source={{uri:carousel[i].movielink}} style={{width:400,height:400,borderRadius:10}} />
        </View>
        
      )
    }; 
    const recomend=()=>{
        fetch('https://mightymovies.pythonanywhere.com/api/recommended/', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            
            
          }).then((response)=>response.json())
            .then((responseData)=>{
              setrecommended(responseData)
              recentsmovies();
            }).done();
          };      
            
     
      for(let i =0; i < recommended.length; i++){
        recommendeddisplay.push(
            <View style={{margin:10}} key={recommended[i].id}>
              <TouchableOpacity onPress={()=>navigation.navigate("Player",{link:recommended[i].poster,about:recommended[i].about,language:recommended[i].languages,imdb:recommended[i].imdb,mlink:recommended[i].movielink})}>
                <Image source={{uri:recommended[i].movielink}} style={{width:200,height:200}} />
              </TouchableOpacity>
            </View>
          
        )
      }; 
      const recentsmovies=()=>{
        fetch('https://mightymovies.pythonanywhere.com/api/recents/', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            
            
          }).then((response)=>response.json())
            .then((responseData)=>{
              setrecents(responseData)
              kdramamovies();
            }).done();
          };      
            
      
      for(let i =0; i < recents.length; i++){
        recentsdisplay.push(
            <View style={{margin:10}} key={recents[i].id}>
               <TouchableOpacity onPress={()=>navigation.navigate("Player",{link:recents[i].poster,about:recents[i].about,language:recents[i].languages,imdb:recents[i].imdb,mlink:recents[i].movielink})}>
                <Image source={{uri:recents[i].movielink}} style={{width:200,height:200}} />
                </TouchableOpacity>
            </View>
          
        )
      }; 
      const kdramamovies=()=>{
        fetch('https://mightymovies.pythonanywhere.com/api/kdramas/', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            
            
          }).then((response)=>response.json())
            .then((responseData)=>{
              setkdramas(responseData)
              crimemovies()
            }).done();
          };      
            
      
      for(let i =0; i < kdramas.length; i++){
        kdramasdisplay.push(
            <View style={{margin:10}} key={kdramas[i].id}>
              <TouchableOpacity onPress={()=>navigation.navigate("Player",{link:kdramas[i].poster,about:kdramas[i].about,language:kdramas[i].languages,imdb:kdramas[i].imdb,mlink:kdramas[i].movielink})}>
                <Image source={{uri:kdramas[i].movielink}} style={{width:200,height:200}} />
                </TouchableOpacity>
            </View>
          
        )
      };
      const crimemovies=()=>{
        fetch('https://mightymovies.pythonanywhere.com/api/crime/', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            
            
          }).then((response)=>response.json())
            .then((responseData)=>{
              setcrime(responseData)
              actionmovies()
            }).done();
          };      
            
      
      for(let i =0; i < crime.length; i++){
        crimedisplay.push(
            <View style={{margin:10}} key={crime[i].id}>
              <TouchableOpacity onPress={()=>navigation.navigate("Player",{link:crime[i].poster,about:crime[i].about,language:crime[i].languages,imdb:crime[i].imdb,mlink:crime[i].movielink})}>
                <Image source={{uri:crime[i].movielink}} style={{width:200,height:200}} />
                </TouchableOpacity>
            </View>
          
        )
      };
      const actionmovies=()=>{
        fetch('https://mightymovies.pythonanywhere.com/api/action/', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            
            
          }).then((response)=>response.json())
            .then((responseData)=>{
              setaction(responseData)
              horrormovies();
            }).done();
          };      
            
      
      for(let i =0; i < action.length; i++){
        actiondisplay.push(
            <View style={{margin:10}} key={action[i].id}>
              <TouchableOpacity onPress={()=>navigation.navigate("Player",{link:action[i].poster,about:action[i].about,language:action[i].languages,imdb:action[i].imdb,mlink:action[i].movielink})}>
                <Image source={{uri:action[i].movielink}} style={{width:200,height:200}} />
                </TouchableOpacity>
            </View>
          
        )
      };
      const horrormovies=()=>{
        fetch('https://mightymovies.pythonanywhere.com/api/horror/', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            
            
          }).then((response)=>response.json())
            .then((responseData)=>{
              sethorror(responseData)
              kidsmovies();
              
            }).done();
          };      
            
      
      for(let i =0; i < horror.length; i++){
        horrordisplay.push(
            <View style={{margin:10}} key={horror[i].id}>
              <TouchableOpacity onPress={()=>navigation.navigate("Player",{link:horror[i].poster,about:horror[i].about,language:horror[i].languages,imdb:horror[i].imdb,mlink:horror[i].movielink})}>
                <Image source={{uri:horror[i].movielink}} style={{width:200,height:200}} />
                </TouchableOpacity>
            </View>
          
        )
      }; 
      const kidsmovies=()=>{
        fetch('https://mightymovies.pythonanywhere.com/api/kids/', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            
            
          }).then((response)=>response.json())
            .then((responseData)=>{
              setkids(responseData)
              comedymovies();
            }).done();
          };      
            
      
      for(let i =0; i < kids.length; i++){
        kidsdisplay.push(
            <View style={{margin:10}} key={kids[i].id}>
              <TouchableOpacity onPress={()=>navigation.navigate("Player",{link:kids[i].poster,about:kids[i].about,language:kids[i].languages,imdb:kids[i].imdb,mlink:kids[i].movielink})}>
                <Image source={{uri:kids[i].movielink}} style={{width:200,height:200}} />
              </TouchableOpacity>
            </View>
          
        )
      };    
      const comedymovies=()=>{
        fetch('https://mightymovies.pythonanywhere.com/api/comedy/', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            
            
          }).then((response)=>response.json())
            .then((responseData)=>{
              setcomedy(responseData)
              popularmovies();
            }).done();
          };      
            
      
      for(let i =0; i < comedy.length; i++){
        comedydisplay.push(
            <View style={{margin:10}} key={comedy[i].id}>
              <TouchableOpacity onPress={()=>navigation.navigate("Player",{link:comedy[i].poster,about:comedy[i].about,language:comedy[i].languages,imdb:comedy[i].imdb,mlink:comedy[i].movielink})}>
                <Image source={{uri:comedy[i].movielink}} style={{width:200,height:200}} />
                </TouchableOpacity>
            </View>
          
        )
      };    
      const popularmovies=()=>{
        fetch('https://mightymovies.pythonanywhere.com/api/popular/', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            
            
          }).then((response)=>response.json())
            .then((responseData)=>{
              setpopular(responseData)
              sciencemovies();
            }).done();
          };      
            
      
      for(let i =0; i < popular.length; i++){
        populardisplay.push(
            <View style={{margin:10}} key={popular[i].id}>
              <TouchableOpacity onPress={()=>navigation.navigate("Player",{link:popular[i].poster,about:popular[i].about,language:popular[i].languages,imdb:popular[i].imdb,mlink:popular[i].movielink})}>
                <Image source={{uri:popular[i].movielink}} style={{width:200,height:200}} />
              </TouchableOpacity>
            </View>
          
        )
      }; 
      const sciencemovies=()=>{
        fetch('https://mightymovies.pythonanywhere.com/api/science/', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            
            
          }).then((response)=>response.json())
            .then((responseData)=>{
              setscience(responseData)
              
            }).done();
          };      
            
      
      for(let i =0; i < science.length; i++){
        sciencedisplay.push(
            <View style={{margin:10}} key={science[i].id}>
              <TouchableOpacity onPress={()=>navigation.navigate("Player",{link:science[i].poster,about:science[i].about,language:science[i].languages,imdb:science[i].imdb,mlink:science[i].movielink})}>
                <Image source={{uri:science[i].movielink}} style={{width:200,height:200}} />
              </TouchableOpacity>
            </View>
          
        )
      };       
    return(
       <SafeAreaView style={{backgroundColor:"black",flex:1}}>
           <ScrollView>
                <View style={{margin:5}}>
                  <ScrollView horizontal={true}>
                  <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl",margin:10}}>
                        
                        {carouseldisplay}    
                    </View>
                  </ScrollView>
                </View>
                <View style={{margin:5}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Recommended Movies</Text>
                    <ScrollView horizontal={true}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl",margin:10}}>
                        {recommendeddisplay}
                            
                    </View>
                    </ScrollView>
                </View>
                <View style={{margin:5}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Recently added movies</Text>
                    <ScrollView horizontal={true}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl",margin:10}}>
                            {recentsdisplay}
                        </View>
                    </ScrollView>
                </View>
                <View style={{margin:5}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>K-Dramas</Text>
                    <ScrollView horizontal={true}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl",margin:10}}>
                            {kdramasdisplay}
                        </View>
                    </ScrollView>
                </View>
                <View style={{margin:5}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Crime movies</Text>
                    <ScrollView horizontal={true}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl",margin:10}}>
                            {crimedisplay}
                        </View>
                    </ScrollView>
                </View>
                <View style={{margin:5}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Action movies</Text>
                    <ScrollView horizontal={true}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl",margin:10}}>
                            {actiondisplay}
                        </View>
                    </ScrollView>
                </View>
                <View style={{margin:5}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Horror movies</Text>
                    <ScrollView horizontal={true}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl",margin:10}}>
                            {horrordisplay}
                        </View>
                    </ScrollView>
                </View>
                <View style={{margin:5}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Kids Special</Text>
                    <ScrollView horizontal={true}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl",margin:10}}>
                            {kidsdisplay}
                        </View>
                    </ScrollView>
                </View>
                <View style={{margin:5}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Comedy</Text>
                    <ScrollView horizontal={true}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl",margin:10}}>
                            {comedydisplay}
                        </View>
                    </ScrollView>
                </View>
                <View style={{margin:5}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Popular Shows</Text>
                    <ScrollView horizontal={true}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl",margin:10}}>
                            {populardisplay}
                        </View>
                    </ScrollView>
                </View>
                <View style={{margin:5}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Sci-Friction movies</Text>
                    <ScrollView horizontal={true}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl",margin:10}}>
                            {sciencedisplay}
                        </View>
                    </ScrollView>
                </View>
                <View style={{marginTop:10}}>
                  <Text></Text>
                </View>
              
           </ScrollView>
       </SafeAreaView>
    )
}

function Search(){
    return(
        <SafeAreaView style={{backgroundColor:"black",flex:1}}>
        <ScrollView>
        
        </ScrollView>
    </SafeAreaView>
    )
}
function Settings(){
    return(
        <SafeAreaView style={{}}>
        <ScrollView>
        <View style={{alignItems:"center",borderWidth:1,margin:15,backgroundColor:"white",borderColor:"white",borderRadius:10}}>
          <Text style={{fontWeight:"bold",fontSize:15,color:"grey"}}>Welcome Back!</Text>
          <Text style={{fontWeight:"bold",fontSize:20,color:"black",marginLeft:70}}>sabarish!   <Image source={require("./images/download.png")} style={{width:30,height:30,marginLeft:40}} /></Text>
          
        </View>
        </ScrollView>
    </SafeAreaView>
    
    )
}




const Dashboard=()=>{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator screenOptions={{headerShown:false, tabBarStyle: {paddingHorizontal: 5,paddingTop: 0,backgroundColor: 'black',position: 'absolute',
        borderTopWidth: 0,
        },}} barstyle>
         <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel: 'Home',tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />),}} />
         <Tab.Screen name="Search" component={Search} options={{tabBarLabel:'Search',tabBarIcon:({color,size})=>(<Ionicons name="search-outline" color={color} size={size} />),}} />
         <Tab.Screen name="Settings" component={Settings} options={{tabBarLabel:'Settings',tabBarIcon:({color,size})=>(<Ionicons name="cog" color={color} size={size} />),}} />
         </Tab.Navigator>
    )    
};


export default Dashboard;