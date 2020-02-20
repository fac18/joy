import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: '#E71F67',
  color: 'white',
  '&:hover': {
    backgroundColor: '#f06292',
  },
  padding: '10px 20px',
});

export default function StyledComponents() {
  return <MyButton />;
}
