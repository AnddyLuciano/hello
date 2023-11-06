import {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ImageSourcePropType,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Button,
} from 'react-native';
import {Input} from './src/login/components/Input';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {InputButton} from './src/login/components/Button';
export default function App() {
  const textInputRef = useRef<TextInput | null>(null);

  const handleBlurTextInput = () => {
    textInputRef.current?.blur();
    Keyboard.dismiss();
  };

  return (
    <TouchableOpacity
      style={{flex: 1}}
      onPress={handleBlurTextInput}
      activeOpacity={1}>
      <ImageBackground
        source={require('./src/login/assets/img/background.png')}
        blurRadius={1}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.box}>
          <View>
            <Text style={styles.title}>Shopi</Text>
          </View>
          <View style={styles.form}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#606771',
              }}>
              Welcome back! 🙂
            </Text>
            <Input
              type="text"
              icon={faUser}
              iconColor="#4990E2"
              placeholder="enter username"
              inputRef={textInputRef}
            />
            <Input
              type="password"
              icon={faLock}
              iconColor="#4990E2"
              placeholder="enter password"
              inputRef={textInputRef}
            />
            <InputButton label="Login" color="#4990E2" />
            <Text style={{color: '#8b8f98', textDecorationLine: 'underline'}}>
              Forgot password?
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const background: ImageSourcePropType = {
  uri: './src/login/assets/img/background.svg',
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingVertical: 0,
    paddingHorizontal: 60,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    transform: [{translateY: 100}],
    gap: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#4990E2',
  },
  form: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderRadius: 5,
    elevation: 3,
    shadowColor: 'rgba(0,0,0,1)',
  },
});
