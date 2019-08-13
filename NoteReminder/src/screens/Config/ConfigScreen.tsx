import React from 'react'
import { View, Text } from 'react-native';

export default class ConfigScreen extends React.Component {
    static navigationOptions = {
        title: 'Configuration',
    };

    render() {
        return (
            <View>
                <Text>Config Screen</Text>
            </View>
        )
    }
}