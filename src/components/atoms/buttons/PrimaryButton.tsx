import React, {PropsWithChildren} from 'react';
import {Button} from 'react-native-paper';

type PropsType = PropsWithChildren<{
  onClick?: () => void;
  isLoading?: boolean;
  icon?: string;
  alt?: boolean;
}>;

const PrimaryButton: React.FC<PropsType> = ({
  children,
  onClick,
  isLoading,
  icon,
  alt,
}) => {
  return (
    <Button
      mode={alt ? 'contained-tonal' : 'contained'}
      icon={icon}
      onPress={onClick}
      loading={isLoading}
      compact>
      {children}
    </Button>
  );
};

export default React.memo(PrimaryButton);
