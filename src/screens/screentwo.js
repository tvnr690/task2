import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


class screentwo extends Component {
    
    render() {
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>screentwo</Text>
                <Button
                    title="Go to Details"
                    
                    onPress={() => this.props.navigation.navigate('screenthree')}
                />
            </View>
        );
    }
}

export default screentwo;