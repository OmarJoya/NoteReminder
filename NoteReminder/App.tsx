import React from 'react';
import {
  View,
} from 'react-native';


import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  
  tabs = [
    {
      key: 'list',
      icon: 'list',
      label: 'List',
      barColor: '#2196F3',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'calendar',
      icon: 'calendar',
      label: 'Calendar',
      barColor: '#2196F3',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'config',
      icon: 'cog',
      label: 'Config',
      barColor: '#2196F3',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]
 
  renderIcon = icon => () => (
    <Icon size={24} color="white" name={icon} />
  )
 
  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

  render () {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {/* Your screen contents depending on current tab. */}
        </View>
        <BottomNavigation
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    );
  };
}