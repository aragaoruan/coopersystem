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

import { useInvestment } from '~/hooks/investment';

interface Acoes {
  id: number;
  nome: string;
  percentual: number;
}
interface InputProps extends TextInputProps {
  name: string;
  total: string;
  acao: Acoes;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, acao, total, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [valueInput, setValueInput] = useState('');
  const [error, setError] = useState(false);

  const { updateActions } = useInvestment();

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

      if (maskCurrencyNumber(val) > parseFloat(total)) {
        setError(true);
      } else {
        setError(false);
      }

      updateActions({
        ...acao,
        newValue: maskCurrencyNumber(val),
      });
    },
    [total, updateActions, acao],
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
