import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


class screenone extends Component {
    
    render() {
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>screenone</Text>
                <Button
                    title="Go to Details"
                    
                    onPress={() => this.props.navigation.navigate('screentwo')}
                />
            </View>
        );
    }
}

export default screenone;