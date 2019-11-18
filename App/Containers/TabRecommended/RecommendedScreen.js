import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class RecommendedScreen extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Recommended Screen</Text>
      </View>
    )
  }
}

export default connect()(RecommendedScreen)
