import React from 'react'
import { Image, Linking, TouchableHighlight, View } from 'react-native'

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <TouchableHighlight onPress={() => Linking.openURL('https://google.com')}>
        <Image
          source={{
            uri: 'https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-5840294d185ab486a90f170cba8caba2.png',
          }}
          style={{
            width: 55,
            height: 55,
          }}
        />
      </TouchableHighlight>
      <View>
        <Image
          source={{
            uri: 'https://images.ua.prom.st/264763249_w640_h640_moryak-popaj.jpg',
          }}
          style={{
            width: 85,
            height: 70,
          }}
        />
      </View>
    </View>
  )
}

export default Header
