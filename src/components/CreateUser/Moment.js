import React, { Component } from "react";
import { View, Text, StyleSheet,Animated,Dimensions,TouchableWithoutFeedback } from "react-native";
const {width, height, } = Dimensions.get('window')

class Moment extends Component {
  render() {
    return <View style={styles.container}>

    <Animated.Image
    source={this.props.image}
    style={styles.image}
    resizeMode='cover'
    />

    </View> 
  }
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        overfloww: "hidden"
    },
    image : {
        flex: 1,
        width: null,
        height: null
    }
})



export default Moment;
