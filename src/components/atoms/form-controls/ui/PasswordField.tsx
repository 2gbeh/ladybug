import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
// LOCAL IMPORTS
import {FormControlPropsType, FormControlUtil as _} from '../utils';

const PasswordField: React.FC<FormControlPropsType> = ({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled,
  // custom
  hasError,
  flat,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const computedAttribs = {
    right: (
      <TextInput.Icon
        icon={showPassword ? 'eye-off' : 'eye'}
        onPress={() => setShowPassword(prev => !prev)}
      />
    ),
  };
  // RENDER
  return (
    <TextInput
      inputMode="email"
      keyboardType="visible-password"
      label={label}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChangeText={onChange}
      editable={!disabled}
      autoCapitalize="none"
      error={hasError}
      mode={flat ? 'flat' : 'outlined'}
      {...computedAttribs}
    />
  );
};

export default React.memo(PasswordField);
