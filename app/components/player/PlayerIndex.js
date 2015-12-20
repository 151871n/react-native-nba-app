'use strict'

import React, {
  Component,
  StyleSheet,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native'
import {Icon} from 'react-native-icons'

import PlayerSearch from './PlayerSearch'

export default class PlayerIndex extends Component {

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    const {actions} = this.props
    actions.getMyPlayers()
  }

  componentWillReceiveProps (props) {
    const {myPlayers, currentPlayer} = props
    console.log(myPlayers, currentPlayer)
  }

  onPressAdd () {
    const {navigator} = this.props
    navigator.push({
      name: 'PlayerSearch',
      component: PlayerSearch
    })
  }

  onPressGallary () {

  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.navigation}>
          <TouchableHighlight 
            onPress={this.onPressAdd.bind(this)} 
            underlayColor='transparent' 
            style={styles.addIcon}>
            <Icon
              name='ion|plus-round'
              size={20}
              color='#fff'
              style={styles.addIcon} />
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={this.onPressGallary.bind(this)} 
            underlayColor='transparent' 
            style={styles.gallaryIcon}>
            <Icon
              name='ion|ios-browsers-outline'
              size={20}
              color='#fff'
              style={styles.gallaryIcon} />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#465484',
    flex: 1
  },
  // Navigation
  navigation: {
    flexDirection: 'row',
    height: 45
  },
  addIcon: {
    height: 30,
    width: 30
  },
  gallaryIcon: {
    height: 30,
    width: 30
  },
  // List
  mainView: {
    flex: 1
  }
})