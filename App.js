import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./pages/home";
import Signin from "./pages/signin"
import Signup from './pages/signup'
import Forgotpassword from "./pages/forgot"
import Otppage from "./pages/otppage"
import Confirmpassword from "./pages/changepassword"
import Dashboard from "./pages/dashboard"
import Player from "./pages/player"






export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{title:"",headerStyle:{backgroundColor:"black"}}} />
        <Stack.Screen name="Signin" component={Signin} options={{title:"Log In",headerStyle:{backgroundColor:"#53f57e"},headerTitleStyle:{color:"white",fontWeight:"bold"}}} />
        <Stack.Screen name="Signup" component={Signup} options={{title:"Register",headerStyle:{backgroundColor:"#53f57e"},headerTitleStyle:{color:"white",fontWeight:"bold"}}} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} options={{title:"",headerStyle:{backgroundColor:"#53f57e"}}} />
        <Stack.Screen name="Otppage" component={Otppage} options={{title:"Verify Phone",headerStyle:{backgroundColor:"#53f57e"}}} />
        <Stack.Screen name="Confirmpassword" component={Confirmpassword} options={{title:"Change Password",headerStyle:{backgroundColor:"#53f57e"}}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{title:"Mighty Movies",headerStyle:{backgroundColor:"#53f57e"}}} />
        <Stack.Screen name="Player" component={Player} options={{title:"Mighty Movies",headerStyle:{backgroundColor:"#53f57e"}}} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

