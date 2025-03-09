import React, {PropsWithChildren} from 'react';
import {Button} from 'react-native-paper';

type PropsType = PropsWithChildren<{
  onClick?: () => void;
  isLoading?: boolean;
  icon?: string;
  alt?: boolean;
}>;

const SecondaryButton: React.FC<PropsType> = ({
  children,
  onClick,
  isLoading,
  icon,
  alt,
}) => {
  return (
    <Button
      mode={alt ? 'contained-tonal' : ''}
      icon={icon}
      onPress={onClick}
      loading={isLoading}
      compact>
      {children}
    </Button>
  );
};

export default React.memo(SecondaryButton);
