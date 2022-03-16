import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useColorScheme } from "react-native";
import routes from "./config/routes";
import login from './pages/login';
import _ from 'lodash';

const Stack = createNativeStackNavigator();

export default () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
       <Stack.Screen name="登录" component={login}
        options={{
          title: '登录',
          headerTitleAlign:'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
       {
         routes&&_.map(routes,(item,index)=>{
           return <Stack.Screen key={index} name={item.name} 
           options={{
              ...item.options
           }} 
           component={item.component} />
         })
       }
      </Stack.Navigator>
    </NavigationContainer>
  );
};
