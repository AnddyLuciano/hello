import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {TextInput, StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const Input = ({
  label,
  placeholder,
  inputRef,
  type,
  icon,
  iconColor,
}: {
  label?: string;
  type: 'text' | 'password';
  placeholder?: string;
  inputRef?: React.MutableRefObject<TextInput | null>;
  icon?: IconDefinition;
  iconColor?: string;
}) => {
  return (
    <View style={styles.inputContainer}>
      {label && (
        <Text style={styles.label} ref={inputRef}>
          {label}
        </Text>
      )}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        }}>
        {icon && <FontAwesomeIcon icon={icon} color={iconColor} size={18} />}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={'#606771'}
          secureTextEntry={type === 'password' && true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'left',
  },
  input: {
    color: '#606771',
    height: 40,
    width: '100%',
    borderRadius: 5,
    borderColor: '#8B8F98',
    backgroundColor: '#E3E4E8',
    paddingLeft: 10,
  },
});
