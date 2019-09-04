import React, { Component } from 'react';
import { View ,ScrollView ,Image, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from 'react-navigation';

import Appbar from '../AppBar/AppBar';
import Input from '../../Components/Input/Input';

class Home extends Component {
    state = {
        product : null
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View>
                    <Appbar navigation={this.props.navigation}/>
                </View>
                <ScrollView>
                    <Input />
                </ScrollView>
            </View>
        );
    }
}

const CustomDrawerContentComponent = (props)=>(
    <SafeAreaView style={{flex:1}}>
        <View style={{height:150,paddingTop: 100,paddingBottom:100,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
            <Image 
                source={require('../../assets/logo.png')} 
                style={{
                    width:120, 
                    height:120, 
                    alignItems:'center', 
                    justifyContent:'center',
                    borderRadius: 60}} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home
    }
}, {
    contentComponent: CustomDrawerContentComponent
})

const AppContainer = createAppContainer(AppDrawerNavigator);

export default AppContainer;