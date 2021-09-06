import React, { useState } from 'react'
import { Text, Image, TouchableHighlight, View } from 'react-native'

import { COLORS, SIZES } from '../../constants'
import { categories } from '../categories'

const Categories = () => {
  const [active, setActive] = React.useState(null)
  return (
    <View style={{ paddingTop: 30 }}>
      <Text
        style={{ fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white }}
      >
        Seamen`s
      </Text>
      <Text style={{ fontSize: SIZES.h2, color: COLORS.white }}>Club</Text>

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {categories.map((cat, idx) => (
          <View
            style={{
              width: '30%',
              height: 100,
              marginBottom: 20,
              borderRadius: SIZES.radius,
              backgroundColor: active === idx ? COLORS.secondary : COLORS.gray,
              justifyContent: 'center',
              paddingLeft: 5,
              paddingRight: 5,
            }}
          >
            <TouchableHighlight
              underlayColor={COLORS.secondary}
              onPress={() => setActive(idx)}
            >
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={{ uri: cat.image }}
                  style={{ width: 70, height: 70 }}
                />
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.white,
                    marginTop: 8,
                  }}
                >
                  {cat.name}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Categories
