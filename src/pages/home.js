/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * // 首页
 * 
 * @format
 * @flow strict-local
 */

import React ,{ useState}from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Other from './other';
import Test from './test';



const Home = () => {

  const [state,setState]=useState('home')
  
  const backgroundStyle = {
    backgroundColor: '#ffffff',
    height:'100%'
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle= 'light-content' />
      <TabNavigator  tabBarStyle={{height:50}}  
                    style={{flex:1}}>  
                    <TabNavigator.Item  
                        title="首页"  
                        selected={state=='home'}  
                        onPress={()=>setState('home')}  
                        badgeText="88"  
                        renderIcon={()=><Image  
                            style={{width:40,height:30}}  
                            source={require('../images/ld.png')}></Image>}  
                        >  
                        {/* <Text>我是首页</Text> */}
                        {<Other />}
                    </TabNavigator.Item>  
                    <TabNavigator.Item  
                        title="我的" 
                        selected={state=='center'}  
                        badgeText="50"  
                        onPress={()=>setState('center')}  
                        renderIcon={()=><Image  
                            style={{width:40,height:30}}  
                            source={require('../images/ld.png')}></Image>}  
                        >  
                        {/* <Text>我是首页2</Text> */}
                        {<Test />}
                    </TabNavigator.Item>  
        </TabNavigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homePageText:{
    fontSize:20
  },
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  tabText:{
    color:'#000000',
    fontSize:10
  },
  selectedTabText:{
    color:'#D81E06'
  },
  icon:{
    width:20,
    height:20
  }
})

export default Home;
