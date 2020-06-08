import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'

export const R_BoldTitle = styled(Text)`
  font-family: futura;
  font-size: ${(p) => (p.fontSize ? fontSize : '40px')};
  font-weight: 400;
  text-align: ${(p) => (p.textAlign ? p.textAlign : 'center')};
`
