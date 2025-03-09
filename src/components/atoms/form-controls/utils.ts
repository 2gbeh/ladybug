import {InputModeOptions, KeyboardTypeOptions} from 'react-native';

export type FormControlPropsType = {
  label: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  // custom
  hasError?: boolean;
  flat?: Boolean;
};

export type FormControlKeyboardType =
  | 'text'
  | 'number'
  | 'decimal'
  | 'search'
  | 'email'
  | 'tel'
  | 'url'
  | 'chat';

export class FormControlUtil {
  static getInputMode = (type: FormControlKeyboardType) =>
    ({
      text: 'text',
      number: 'numeric',
      decimal: 'decimal',
      search: 'search',
      email: 'email',
      tel: 'tel',
      url: 'url',
      password: 'email',
      chat: 'search',
    }[type] as InputModeOptions);

  static getKeyboardType = (type: FormControlKeyboardType) =>
    ({
      text: 'default',
      number: 'numeric', // number-pad
      decimal: 'decimal-pad',
      search: 'web-search',
      email: 'email-address',
      tel: 'name-phone-pad', // phone-pad
      url: 'url',
      password: 'visible-password', // ???
      chat: 'twitter',
    }[type] as KeyboardTypeOptions);
}
