// Imports: Dependencies
import React from 'react'
import { R_BoldTitle } from '../styles/components/headers'
import { R_View, R_SafeAreaView } from '../styles/components/views'
import { connect } from 'react-redux'
import { STRINGS } from '../styles/constants/strings'
// Screen: Counter
class Onboarding extends React.PureComponent {
  render() {
    return (
      <R_SafeAreaView>
        <R_View>
          <R_BoldTitle>{STRINGS.Onboarding.Welcome}</R_BoldTitle>
        </R_View>
      </R_SafeAreaView>
    )
  }
}
// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {}
}
// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {}
}
// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Onboarding)
