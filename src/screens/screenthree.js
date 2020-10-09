import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


class screenthree extends Component {
    
    render() {
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>screenthree</Text>
                <Button
                    title="Go to Details"
                    
                    onPress={() => this.props.navigation.navigate('screenfour')}
                />
            </View>
        );
    }
}

export default screenthree;