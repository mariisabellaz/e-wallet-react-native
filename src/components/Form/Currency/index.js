import React from 'react';
import {Form, Input} from './styles';

const ReduxForm = ({inputs}) => {
  return (
    <Form>
      {inputs.map((input, index) => (
        <Input
          key={index}
          {...input}
          type={'money'}
          placeholderTextColor={'gray'}
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$ ',
            suffixUnit: '',
          }}
        />
      ))}
    </Form>
  );
};

export default ReduxForm;
