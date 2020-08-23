import React, { useCallback } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useInvestment } from '~/hooks/investment';

import { Container } from './styles';

import Header from '~/components/Title';
import Loader from '~/components/Loader';
import Item from './List/Item';

import { ListaInvestimentos } from './interfaces';

const InvestmentList: React.FC = () => {
  const { investments, loading } = useInvestment();

  const { navigate } = useNavigation();

  const handleRescue = useCallback(
    (item: ListaInvestimentos) => {
      if (item.indicadorCarencia === 'N') {
        navigate('PersonalizedRescue', item);
      }
    },
    [navigate],
  );

  if (loading) {
    return <Loader />;
  }

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
