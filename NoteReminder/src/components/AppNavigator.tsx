import React from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import ListScreen from '../screens/list/ListScreen';
import CalendarScreen from '../screens/calendar/CalendarScreen';
import ConfigScreen from '../screens/Config/ConfigScreen';

const TabNavigator = createBottomTabNavigator({
    List: ListScreen,
    Calendar: CalendarScreen,
    Config: ConfigScreen
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName: string = "";

                switch (routeName) {
                    case 'List':
                        iconName = 'list';
                        break

                    case 'Calendar':
                        iconName = 'calendar';

                        break

                    case 'Config':
                        iconName = 'cog';
                        break
                }
                // You can return any component that you like here!
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

export default createAppContainer(TabNavigator)