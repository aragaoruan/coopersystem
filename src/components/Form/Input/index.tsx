import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';

import { useField } from '@unform/core';
import { TextInputProps } from 'react-native';

import { maskCurrency, maskCurrencyNumber } from '~/utils/mask';
import { Container, ContainerInput, TextInput, Text, Error } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  total: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, total, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [valueInput, setValueInput] = useState('');
  const [error, setError] = useState(false);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  const changeValue = useCallback(
    (val) => {
      const valor = maskCurrency(val);
      inputValueRef.current.value = val;
      setValueInput(valor);

      if (maskCurrencyNumber(val) > total) {
        setError(true);
      } else {
        setError(false);
      }
    },
    [total],
  );

  return (
    <Container>
      <ContainerInput>
        <Text>R$</Text>

        <TextInput
          ref={inputElementRef}
          defaultValue={defaultValue}
          value={valueInput}
          onChangeText={(val) => changeValue(val)}
          {...rest}
        />
      </ContainerInput>

      {error && <Error>Valor não pode ser maior que R$ {total}</Error>}
    </Container>
  );
};

export default forwardRef(Input);
