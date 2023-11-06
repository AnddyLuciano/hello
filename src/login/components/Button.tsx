import {ButtonProps, Text, View, StyleSheet} from 'react-native';

export const InputButton = ({label, onPress, color}: InputButtonProps) => {
  return (
    <View style={[styles.container, {borderColor: color}]}>
      <Text style={{color: color, fontWeight: '600'}}>{label}</Text>
    </View>
  );
};

type InputButtonProps = {
  label: string;
  onPress?: () => void;
  color?: string;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8B8F98',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    paddingVertical: 7,
  },
});
