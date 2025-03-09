import React, {PropsWithChildren} from 'react';
import {Button} from 'react-native-paper';

type PropsType = PropsWithChildren<{
  onClick?: () => void;
  icon?: string;
}>;

const ButtonLink: React.FC<PropsType> = ({children, onClick, icon}) => {
  return (
    <Button mode="" icon={icon} onPress={onClick} compact>
      {children}
    </Button>
  );
};

export default React.memo(ButtonLink);
