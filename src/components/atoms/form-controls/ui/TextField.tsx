import React from 'react';
import {TextInput} from 'react-native-paper';
// LOCAL IMPORTS
import {
  FormControlKeyboardType,
  FormControlPropsType,
  FormControlUtil as _,
} from '../utils';

export type PropsType = FormControlPropsType & {
  type?: FormControlKeyboardType;
  required?: boolean;
  // custom
  leftText?: string;
  rightText?: string;
  leftIcon?: string;
  rightIcon?: string;
};

const TextField: React.FC<PropsType> = ({
  type = 'text',
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  required,
  disabled,
  // custom
  leftText,
  rightText,
  leftIcon,
  rightIcon,
  hasError,
  flat,
}) => {
  const computedAttribs = {
    inputMode: _.getInputMode(type),
    // keyboardType: _.getKeyboardType(type),
    left: leftText ? (
      <TextInput.Affix text={leftText} />
    ) : leftIcon ? (
      <TextInput.Icon icon={leftIcon} />
    ) : null,
    right: rightText ? (
      <TextInput.Affix text={rightText} />
    ) : rightIcon ? (
      <TextInput.Icon icon={rightIcon} />
    ) : null,
  };
  // RENDER
  return (
    <TextInput
      label={label + (required ? ' *' : '')}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChangeText={onChange}
      editable={!disabled}
      autoCapitalize={type === 'chat' ? 'sentences' : 'none'}
      error={hasError}
      mode={flat ? 'flat' : 'outlined'}
      {...computedAttribs}
    />
  );
};

export default React.memo(TextField);
