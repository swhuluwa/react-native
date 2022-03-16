/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * // 登录
 * 
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';

import {setSpText} from '../utils/size';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';


const Login= ({navigation}) => {

  const backgroundStyle = {
    backgroundColor: '#ffffff',
    height:'100%'
  };

  const handleLoginIn=()=>{
    console.log('登录成功');
    navigation.navigate('home');
   }

   const handleRegistration=()=>{
    console.log(44);
    navigation.navigate('register');
   }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: Colors.white,
          }}>
            <View style={styles.loginView}><Text style={styles.loginText}>账号</Text><TextInput style={styles.loginInput} placeholder='请输入账号' ></TextInput></View>
            <View style={styles.loginView}><Text style={styles.loginText}>密码</Text><TextInput style={styles.loginInput} placeholder='请输入密码' ></TextInput></View>
            <View style={styles.pressOn}>
              <Button title="登录" onPress={handleLoginIn} />
            </View>
            <View style={styles.registration}>
              <Button color='gray' title="注册" onPress={handleRegistration} />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginView:{
    display:"flex",
    flexDirection:'row',
    alignItems:'center',
    marginLeft:10,
    marginRight:10,
    borderStyle:'solid',
    borderBottomColor:'gray',
    borderBottomWidth:0.5
  },
  loginText:{
    fontWeight:'bold',
    fontSize:setSpText(12),
  },
  loginInput:{
    paddingLeft:30,
    fontSize:setSpText(10),
  },
  pressOn:{
    fontSize:setSpText(10),
    marginLeft:10,
    marginRight:10,
    marginTop:10
  },
  registration:{
    fontSize:setSpText(10),
    marginLeft:10,
    marginRight:10,
    marginTop:10
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Login;
