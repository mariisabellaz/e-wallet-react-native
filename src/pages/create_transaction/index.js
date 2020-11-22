import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  ApplicationProvider,
  Wrapper,
  ScrollView,
  Empty,
  Row,
  ServiceWrapper,
} from './styles';
import {
  Paragraph,
  Form,
  DisableButton,
  Button,
  TransactionType,
  CurrencyForm,
  TypeService,
} from '../../components';
import {fetchAddTransaction} from '../../store/actions';
import {theme} from '../../theme/globalStyles';

const CreateTransaction = ({navigation}) => {
  const [transaction_name, setTransaction_name] = useState('');
  const [money, setMoney] = useState('');
  const [service, setService] = useState('');
  const [type, setType] = useState('');
  const [label] = useState('Salvar transação');
  const [enable, setEnable] = useState(false);

  const [expensesColor, setExpensesColor] = useState(inactivate_button);
  const [revenueColor, setRevenueColor] = useState(inactivate_button);
  const [expensesLabel, setExpensesLabel] = useState(inactivate_label);
  const [revenueLabel, setRevenueLabel] = useState(inactivate_label);
  const [buttonType, setButtonType] = useState(true);

  const activate_button = theme.color.mongo;
  const inactivate_button = theme.color.ice;
  const activate_label = theme.color.dark;
  const inactivate_label = theme.color.dusk;

  const [house, setHouse] = useState(false);
  const [pet, setPet] = useState(false);
  const [objectives, setObjectives] = useState(false);
  const [shopping, setShopping] = useState(false);
  const [education, setEducation] = useState(false);
  const [tributes, setTributes] = useState(false);
  const [recreation, setRecreation] = useState(false);
  const [market, setMarket] = useState(false);
  const [health, setHealth] = useState(false);
  const [transport, setTransport] = useState(false);
  const [travel, setTravel] = useState(false);
  const [pub, setPub] = useState(false);
  const [services, setServices] = useState(false);
  const [salary, setSalary] = useState(false);
  const [cashback, setCashback] = useState(false);
  const [bills, setBills] = useState(false);
  const [savings, setSavings] = useState(false);
  const [investment, setInvestiment] = useState(false);
  const [other, setOther] = useState(false);

  function changeColorButton() {
    if (buttonType) {
      setButtonType(false);
      setRevenueColor(activate_button);
      setExpensesColor(inactivate_button);
      setRevenueLabel(activate_label);
      setExpensesLabel(inactivate_label);
      setType('1');
    } else {
      setButtonType(true);
      setRevenueColor(inactivate_button);
      setExpensesColor(activate_button);
      setRevenueLabel(inactivate_label);
      setExpensesLabel(activate_label);
      setType('2');
    }
  }

  function toggleHouse() {
    setHouse(!house);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('house');
  }
  function togglePet() {
    setPet(!pet);
    setHouse(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('pet');
  }
  function toggleObjectives() {
    setObjectives(!objectives);
    setHouse(false);
    setPet(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('objectives');
  }
  function toggleShopping() {
    setShopping(!shopping);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('shopping');
  }
  function toggleEducation() {
    setEducation(!education);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('education');
  }
  function toggleTributes() {
    setTributes(!tributes);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('tributes');
  }
  function toggleRecreation() {
    setRecreation(!recreation);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('recreation');
  }
  function toggleMarket() {
    setMarket(!market);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('market');
  }
  function toggleHealth() {
    setHealth(!health);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('health');
  }
  function toggleTransport() {
    setTransport(!transport);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('transport');
  }
  function toggleTravel() {
    setTravel(!travel);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('travel');
  }
  function togglePub() {
    setPub(!pub);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('pub');
  }
  function toggleServices() {
    setServices(!services);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('services');
  }
  function toggleSalary() {
    setSalary(!salary);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('salary');
  }
  function toggleCashback() {
    setCashback(!cashback);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('cashback');
  }
  function toggleBill() {
    setBills(!bills);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setSavings(false);
    setInvestiment(false);
    setOther(false);
    setService('bill');
  }
  function toggleSavings() {
    setSavings(!savings);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setInvestiment(false);
    setOther(false);
    setService('savings');
  }
  function toggleInvestiment() {
    setInvestiment(!investment);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setOther(false);
    setService('investiment');
  }
  function toggleOther() {
    setOther(!other);
    setHouse(false);
    setPet(false);
    setObjectives(false);
    setShopping(false);
    setEducation(false);
    setTributes(false);
    setRecreation(false);
    setMarket(false);
    setHealth(false);
    setTransport(false);
    setTravel(false);
    setPub(false);
    setServices(false);
    setSalary(false);
    setCashback(false);
    setBills(false);
    setSavings(false);
    setInvestiment(false);
    setService('other');
  }

  const dispatch = useDispatch();

  const submit = () => {
    const removeCurrency = money.replace('R$', '');
    const value = removeCurrency.replace(',', '.');

    dispatch(fetchAddTransaction({transaction_name, value, service, type}));
    setEnable(false);
    setTimeout(function() {
      navigation.goBack();
    }, 2300);
  };

  useEffect(() => {
    if (transaction_name !== '' && money !== '') {
      setEnable(true);
    }
  }, [transaction_name, money]);

  return (
    <ApplicationProvider>
      <ScrollView>
        <Wrapper>
          <Paragraph
            label="Qual o nome da transação ?"
            marginTop={30}
            marginBottom={15}
          />
          <Form
            inputs={[
              {
                onChangeText: setTransaction_name,
                placeholder: 'Informe o nome para sua transação',
                value: transaction_name,
                keyboardType: 'default',
                returnKeyType: 'next',
              },
            ]}
            testID="input"
          />
          <Paragraph
            label="Qual o valor da transação ?"
            marginTop={30}
            marginBottom={15}
          />
          <CurrencyForm
            inputs={[
              {
                onChangeText: setMoney,
                placeholder: 'Informe o valor da sua transação',
                value: money,
              },
            ]}
            testID="currency"
          />
          <Paragraph
            label="Qual é o tipo da transação? "
            marginBottom={10}
            marginTop={45}
          />
          <TransactionType
            onPress={changeColorButton}
            expensesColor={expensesColor}
            expensesLabel={expensesLabel}
            revenueColor={revenueColor}
            revenueLabel={revenueLabel}
          />
          <Paragraph
            label="Escolha uma opção: "
            marginBottom={10}
            marginTop={40}
          />

          <ServiceWrapper>
            <Row>
              <TypeService
                service="house"
                label="Casa"
                click={house}
                onPress={toggleHouse}
              />
              <TypeService
                service="pet"
                label="Pet"
                click={pet}
                onPress={togglePet}
              />
              <TypeService
                service="objectives"
                label="Objetivo"
                click={objectives}
                onPress={toggleObjectives}
              />
              <TypeService
                service="shopping"
                label="Compras"
                click={shopping}
                onPress={toggleShopping}
              />
              <TypeService
                service="education"
                label="Educação"
                click={education}
                onPress={toggleEducation}
              />
            </Row>
            <Row>
              <TypeService
                service="tributes"
                label="Imposto"
                click={tributes}
                onPress={toggleTributes}
              />
              <TypeService
                service="recreation"
                label="Lazer"
                click={recreation}
                onPress={toggleRecreation}
              />
              <TypeService
                service="market"
                label="Mercado"
                click={market}
                onPress={toggleMarket}
              />
              <TypeService
                service="health"
                label="Saúde"
                click={health}
                onPress={toggleHealth}
              />
              <TypeService
                service="transport"
                label="Transport"
                click={transport}
                onPress={toggleTransport}
              />
            </Row>
            <Row>
              <TypeService
                service="travel"
                label="Viagem"
                click={travel}
                onPress={toggleTravel}
              />
              <TypeService
                service="pub"
                label="Bar"
                click={pub}
                onPress={togglePub}
              />
              <TypeService
                service="services"
                label="Serviços"
                click={services}
                onPress={toggleServices}
              />
              <TypeService
                service="salary"
                label="Salário"
                click={salary}
                onPress={toggleSalary}
              />
              <TypeService
                service="cashback"
                label="Cashback"
                click={cashback}
                onPress={toggleCashback}
              />
            </Row>
            <Row>
              <TypeService
                service="bills"
                label="Contas"
                click={bills}
                onPress={toggleBill}
              />
              <TypeService
                service="savings"
                label="Poupança"
                click={savings}
                onPress={toggleSavings}
              />
              <TypeService
                service="investment"
                label="Renda"
                click={investment}
                onPress={toggleInvestiment}
              />
              <TypeService
                service="other"
                label="Outros"
                click={other}
                onPress={toggleOther}
              />
              <Empty />
            </Row>
          </ServiceWrapper>

          {enable === false ? (
            <DisableButton label={label} marginTop={45} />
          ) : (
            <Button label={label} marginTop={45} onPress={submit} />
          )}
        </Wrapper>
      </ScrollView>
    </ApplicationProvider>
  );
};
export default CreateTransaction;
