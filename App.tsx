/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import GorhomBottomSheetExample from './animation/components/GorhomBottomSheetExample';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Main container */}
      {/* <View style={styles.container}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>App</Text>
      </View> */}

      {/* Bottom sheet should be OUTSIDE the centered container */}
      <GorhomBottomSheetExample />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
