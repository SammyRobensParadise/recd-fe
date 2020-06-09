import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
// Imports: Screens
import Counter from './pages/Counter'
import Onboarding from './onboarding/onboarding'
// Imports: Redux Persist Persister
import { store, persistor } from './store/store'
// React Native: App
const Stack = createStackNavigator()
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="onboarding">
            <Stack.Screen
              name="onboarding"
              options={{
                headerStyle: {
                  opacity: 0,
                },
              }}
              component={Onboarding}
            />
            <Stack.Screen name="Counter" component={Counter} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}
