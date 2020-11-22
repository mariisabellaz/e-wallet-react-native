import React from 'react';
import {Form, Input} from './styles';
import {theme} from '../../../theme/globalStyles';

const ReduxForm = ({inputs}) => {
  return (
    <Form>
      {inputs.map((input, index) => (
        <Input
          key={index}
          {...input}
          autoCapitalize={'none'}
          autoCompleteType={'off'}
          autoCorrect={false}
          placeholderTextColor={'gray'}
          underlineColorAndroid="transparent"
          selectionColor={theme.color.dusk}
          textAlign={'left'}
          secureText={false}
        />
      ))}
    </Form>
  );
};

export default ReduxForm;
