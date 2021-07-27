import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { COLORS } from '../constants'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  }
})

export default Home
