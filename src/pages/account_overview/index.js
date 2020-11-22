import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  ApplicationProvider,
  Wrapper,
  ScrollView,
  LoadingWrapper,
  Content,
} from './styles';
import {
  NavigationHeader,
  Balance,
  Transactions,
  Body,
  EmptyPage,
} from '../../components';
import {theme} from '../../theme/globalStyles';
import {FORMAT_PRICE} from '../../utils/format';
import {allTransactions, sumAllTransactions} from '../../store/actions';

const AccountOverviewScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const sumValue = useSelector(state => FORMAT_PRICE(state.value));
  const transactions = useSelector(state => state.transactions);
  const dispatch = useDispatch();

  const loading = setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  useEffect(() => {
    dispatch(allTransactions());
    dispatch(sumAllTransactions());
  }, [transactions, sumValue, dispatch, loading]);

  return (
    <ApplicationProvider>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavigationHeader label="Visão Geral da Conta" />
        <Wrapper>
          {isLoading ? (
            <LoadingWrapper>
              <ActivityIndicator size="small" color={theme.color.dusk} />
            </LoadingWrapper>
          ) : (
            <Content>
              <Balance
                value={sumValue}
                onPress={() => navigation.navigate('CreateTransaction')}
              />
              <Body
                label="transações"
                textTransform={'uppercase'}
                marginBottom={16}
              />
              <FlatList
                data={transactions}
                keyExtractor={item => String(item.id)}
                ListEmptyComponent={() => <EmptyPage />}
                renderItem={({item}) => (
                  <Transactions
                    transaction_name={item.transaction_name}
                    value={FORMAT_PRICE(item.value)}
                    service={item.service}
                    date={item.data}
                    type={item.type}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </Content>
          )}
        </Wrapper>
      </ScrollView>
    </ApplicationProvider>
  );
};
export default AccountOverviewScreen;
