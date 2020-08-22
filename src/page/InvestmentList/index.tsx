import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '~/services/api';

import { Container } from './styles';

import Header from './List/Header';
import Item from './List/Item';

import { Response, ListaInvestimentos } from './interfaces';

const InvestmentList: React.FC = () => {
  const [investments, setInvestments] = useState<ListaInvestimentos[]>();
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get<Response>('5e76797e2f0000f057986099').then((response) => {
      setInvestments(response.data.response.data.listaInvestimentos);
    });
  }, []);

  const handleRescue = useCallback(
    (item: ListaInvestimentos) => {
      if (item.indicadorCarencia === 'N') {
        navigate('RescueConfirm', item);
      }
    },
    [navigate],
  );

  return (
    <Container>
      <FlatList
        ListHeaderComponent={
          <Header leftTitle="investimento" rightTitle="R$" />
        }
        data={investments}
        keyExtractor={(investmentItem) => String(investmentItem.nome)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleRescue(item)}>
            <Item dataItem={item} />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default InvestmentList;
