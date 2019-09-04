import * as React from 'react';
import { View ,Text ,Image, TouchableHighlight, Linking} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const card = (props) => {
  // console.log(JSON.stringify(props))
  let onComingData = props.itemData[0];
  let amazonData = props.itemData[1];
  let amazon = null;
  let flip = null;
  let paytm = null;
  try {
    //amazon grid
    amazon = amazonData.map((element,key)=>{
    let linkPressed = ()=>{
      Linking.canOpenURL(element.link)
        .then((supported)=>{
          if(!supported){
            console.log('cant handle url');
          } else{
            Linking.openURL(element.link);
          }
        })
    }
    return <View style={{padding:10}} key={key}>
    <TouchableHighlight onPress={linkPressed}>
    <Card elevation={6} style={{padding: 10}}>
      <View style={{flex:1,flexDirection: 'row'}}>
      <Image style={{flex: 1, width: 50, height: 50, resizeMode: 'contain'}} source={{uri: element.imageSrc}} />
      </View>
      <Card.Content>
        <Title>{element.name}</Title>
        <Paragraph>₹{element.price}</Paragraph>
      </Card.Content>
    </Card>
    </TouchableHighlight>
  </View> 
  });

  //flipkart grid
    flip = onComingData.flipkart.map((element,key)=>{
      let linkPressed = ()=>{
        Linking.canOpenURL(element.link)
          .then((supported)=>{
            if(!supported){
              console.log('cant handle url');
            } else{
              Linking.openURL(element.link);
            }
          })
      }
      return <View style={{padding:10}} key={key}>
      <TouchableHighlight onPress={linkPressed}>
      <Card elevation={6} style={{padding: 10}}>
        <View style={{flex:1,flexDirection: 'row'}}>
        <Image style={{flex: 1, width: 50, height: 50, resizeMode: 'contain'}} source={{uri: element.imgSrc}} />
        </View>
        <Card.Content>
          <Title>{element.name}</Title>
          <Paragraph>{element.price}</Paragraph>
        </Card.Content>
      </Card>
      </TouchableHighlight>
    </View> 
    });

  //paytm grid
   paytm = onComingData.paytm.map((element,key) =>{
      let linkPressed = ()=>{
        Linking.canOpenURL(element.link)
          .then((supported)=>{
            if(!supported){
              console.log('cant handle url');
            } else{
              Linking.openURL(element.link);
            }
          })
      }
      return <View style={{padding: 10}} key={key}>
      <TouchableHighlight onPress={linkPressed}>
        <Card elevation={6} style={{padding: 10}} >
          <View style={{flex:1,flexDirection: 'row'}}>
            <Image style={{flex: 1, width: 50, height: 50, resizeMode: 'contain'}} source={{uri: element.imgSrc}} />
          </View>
          <Card.Content>
            <Title>{element.name}</Title>
            <Paragraph>₹{element.price}</Paragraph>
            <Paragraph>{element.cashback}</Paragraph>
          </Card.Content>
        </Card>
        </TouchableHighlight>
      </View>
    })
  } catch (error) {
    console.log(error)
  }

  return (
    <View>
      {amazon ? <Text style={{fontSize: 28, fontWeight:'bold', textAlign: 'center'}}>Amazon</Text> : null}
      {amazon}
      {flip ?  <Text style={{fontSize: 28, fontWeight:'bold', textAlign: 'center'}}>Flipkart</Text> : null}
      {flip}
      {paytm ? <Text style={{fontSize: 28, fontWeight:'bold', textAlign: 'center'}}>Paytm</Text> : null}
      {paytm}
    </View>
  )  
}

export default card;


