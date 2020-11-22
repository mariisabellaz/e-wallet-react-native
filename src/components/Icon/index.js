import React from 'react';
import {IconWrapper} from './styles';
import {
  BillIcon,
  EducationIcon,
  BuyIcon,
  GymIcon,
  PetIcon,
  ServiceIcon,
  TariffIcon,
  TransportationIcon,
  InvestmentIcon,
  ObjectiveIcon,
  CashBackIcon,
  RecreationIcon,
  RestaurantIcon,
  SalaryIcon,
  HomeIcon,
  OtherIcon,
  MarketIcon,
  SavingsIcon,
  TravelIcon,
} from '../../assets/svg';

const Icon = ({service, color}) => {
  const checkSwitch = param => {
    switch (param) {
      case 'house':
        return <HomeIcon color={color} />;

      case 'pet':
        return <PetIcon color={color} />;

      case 'shopping':
        return <BuyIcon color={color} />;

      case 'bills':
        return <BillIcon color={color} />;

      case 'education':
        return <EducationIcon color={color} />;

      case 'tributes':
        return <TariffIcon color={color} />;

      case 'recreation':
        return <RecreationIcon color={color} />;

      case 'market':
        return <MarketIcon color={color} />;

      case 'pub':
        return <RestaurantIcon color={color} />;

      case 'health':
        return <GymIcon color={color} />;

      case 'transport':
        return <TransportationIcon color={color} />;

      case 'travel':
        return <TravelIcon color={color} />;

      case 'services':
        return <ServiceIcon color={color} />;

      case 'other':
        return <OtherIcon color={color} />;

      case 'salary':
        return <SalaryIcon color={color} />;

      case 'investment':
        return <InvestmentIcon color={color} />;

      case 'cashback':
        return <CashBackIcon color={color} />;

      case 'objectives':
        return <ObjectiveIcon color={color} />;

      case 'savings':
        return <SavingsIcon color={color} />;

      default:
        return <HomeIcon color={color} />;
    }
  };
  const renderItem = checkSwitch(service);
  return <IconWrapper>{renderItem}</IconWrapper>;
};

export default Icon;
