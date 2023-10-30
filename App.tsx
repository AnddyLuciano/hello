import {useState} from 'react';
import {Button, StyleSheet, Text, View, Animated} from 'react-native';

export default function App() {
  const [number, setNumber] = useState<number>(0);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contained}>
          <Text style={styles.title}>Shopify</Text>
          <Button title="Se connecter" onPress={() => setNumber(number + 1)} />
        </View>
        <View style={styles.footer}>
          <Text>Copyright ©anddy_luciano 2023</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  contained: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 15,
    position: 'relative',
  },
  footer: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 46,
    fontWeight: '700',
    position: 'absolute',
    top: 10,
    left: 25,
    color: '#34518C',
  },
});
