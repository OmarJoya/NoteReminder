import React from 'react'
import { View, Button } from 'react-native';

export default class ListScreen extends React.Component {
    static navigationOptions = {
        title: 'List',
    };

    render() {
        return (
            <View>
                <Button title="Go To Calendar" onPress={() => this.props.navigation.navigate('Calendar')} />
            </View>
        )
    }
}