import React from 'react'
import { View, Button } from 'react-native';

export default class notesScreen extends React.Component {
    render() {
        return (
            <View>
                <Button title="Go To Calendar" onPress={() => this.props.navigation.navigate('Calendar')} />
            </View>
        )
    }
}