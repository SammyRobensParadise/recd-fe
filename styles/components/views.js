import React from 'react'
import { SafeAreaView, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

const defaultMargin = 20

export const R_SafeAreaView = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const R_View = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(p) => (p.maginTop ? `${p.maginTop}px` : `${defaultMargin}px`)};
  margin-bottom: ${(p) => (p.maginBottom ? `${p.maginBottom}px` : `${defaultMargin}px`)};
`
