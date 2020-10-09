import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BottomSubscription extends Component {
    
    render() {
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>BottomSubscription Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('')}
                />
            </View>
        );
    }
}

export default BottomSubscription;