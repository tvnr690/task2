import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


class screenfour extends Component {
    
    render() {
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>screenfour</Text>
                <Button
                    title="Go to Details"
                    
                    onPress={() => this.props.navigation.navigate('screenone')}
                />
            </View>
        );
    }
}

export default screenfour;