// Imports: Dependencies
import React from 'react'
import { R_BoldTitle } from '../styles/components/headers'
import { R_View, R_SafeAreaView } from '../styles/components/views'

import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter } from '../actions/counterActions'
import { login } from '../actions/authActions'
// Screen: Counter
class Onboarding extends React.PureComponent {
  render() {
    return (
      <R_SafeAreaView>
        <R_View >

        </R_View>
      </R_SafeAreaView>
    )
  }
}
// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    counter: state.counterReducer.counter,
    loggedIn: state.authReducer.loggedIn,
  }
}
// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // Increase Counter
    reduxIncreaseCounter: () => dispatch(increaseCounter()),
    // Decrease Counter
    reduxDecreaseCounter: () => dispatch(decreaseCounter()),
    // Login
    reduxLogin: (trueFalse) => dispatch(login(trueFalse)),
  }
}
// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Onboarding)
