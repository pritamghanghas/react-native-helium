import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Helium from 'react-native-helium';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [resultJS, setResultJS] = React.useState<number | undefined>();

  React.useEffect(() => {
    Helium.multiply(3, 8).then(setResult);
    Helium.multiplyJS(3, 8).then(setResultJS);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>ResultJS: {resultJS}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
