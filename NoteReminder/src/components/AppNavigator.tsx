import React from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import notesScreen from '../screens/notes/notesScreen';
import calendarScreen from '../screens/calendar/calendarScreen';
import configScreen from '../screens/config/configScreen';

const tabNavigator = createBottomTabNavigator({
    Notes: notesScreen,
    Calendar: calendarScreen,
    Config: configScreen
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName: string = "";

                switch (routeName) {
                    case 'Notes':
                        iconName = 'sticky-note';
                        break

                    case 'Calendar':
                        iconName = 'calendar';

                        break

                    case 'Config':
                        iconName = 'cog';
                        break
                }
                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#DFD5EB',
            style: {
                backgroundColor: '#2196F3',
            },
        },
    }
);

export default createAppContainer(tabNavigator)