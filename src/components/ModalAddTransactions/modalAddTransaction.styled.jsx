import styled from '@emotion/styled';
import { stylistics } from '../../styles/styles';

export const CloseAddModal = styled.button`
  position: absolute;
  display: flex;
  cursor: pointer;
  right: 20px;
  top: 20px;
  background-color: #fff;
  border: none;
    @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const TitleMod = styled.h2`
  text-align: center;
  font-family: ${stylistics.fonts.heading};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 42px;
  color: ${stylistics.colors.primaryText};
    @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 45px;
  }
`;

export const TransactionAddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckboxWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
`;

export const CheckboxSpan = styled.span`
  font-weight: 700;
  font-style: 16px;
  line-height: 24px;
  color: ${stylistics.colors.secondaryLightText};
`;

export const IncomeChoosen = styled.div`
color: ${stylistics.colors.primaryBgBtn}
`;

export const AddTransIcon = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AddExpsIcon = styled.svg`
  width: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SelectWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  outline: none;
  border: none;
  border-bottom: 1px solid #BDBDBD;
  color: ${stylistics.colors.secondaryLightText};
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
}
    /* border: none; */
   


  /* @media screen and (min-width: 320px) {
    maxHeight: 352;
} */
  /* @media screen and (min-width: 768px) {
    maxHeight: 411;
}
    padding: 0;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 20;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
`;

export const ChooseIcon = styled.svg`
  position: absolute;
  right: 5px;
  top: 15px;
  width: 18px;
  height: 9px;
  cursor: pointer;
  pointer-events: none;
`;
 
export const InputSumWrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: grid;
  }
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const FormSum = styled.label`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const SumInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid ${stylistics.colors.secondaryText};
  cursor: pointer;
  width: 190px;
  height: 34px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  
    @media screen and (max-width: 767px) {
    width: 280px;
    padding-left: 20px;
  }
  &::placeholder {
    color: ${stylistics.colors.secondaryText};
    padding-bottom: 8px;
    @media screen and (min-width: 767px) {
    text-align: center;
    /* padding-left: 0px; */
    }
  }
`;

export const Calendar = styled.div`
  /* outline: none;
  border: none;
  border-bottom: 1px solid #BDBDBD; */
`;

export const DateIcon = styled.svg`
    @media screen and (max-width: 767px) {
      top: 78px;
    }
    width: 24px;
    height: 24px;
    fill: ${stylistics.colors.houseExpens};
    position: absolute;
    right: 20px;
    top: 7px;
    pointer-events: none;
`;

export const TextForm = styled.label`
  margin-bottom: 50px;
  margin-top: 30px;
`;

export const CommentInput = styled.input`
  width: 400px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  padding-left: 20px;
  padding-bottom: 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid #BDBDBD;
  color: ${stylistics.colors.secondaryLightText};
`;

export const TwoBtns = styled.div`

`;


//--------Styles for changing initial Select from react-----------
/* import Creatable, { useCreatable } from 'react-select/creatable';
const filterOption = (candidate, input) => {
  return candidate.data.__isNew__ || candidate.label.includes(input);
}; */
export const initialSelectStyles = {
  option: (items, state) => ({
    ...items,
    paddingLeft: 20,
    paddingTop: 13,
    height: 44,
    border: 'none',
    cursor: 'pointer',
        color: state.isSelected || state.isFocused ? '#FF6596' : '#000000',
    backgroundColor:
      state.isSelected || state.isFocused ? '#FFFFFF' : 'inherit',
  }),
  menu: items => ({
    ...items,
    borderRadius: 20,
    boxShadow: 'none',
    backgroundColor: 'inherit',
  }),
  menuList: items => ({
    ...items,
    '@media screen and (min-width: 320px)': {
      maxHeight: 352,
    },
    '@media screen and (min-width: 768px)': {
      maxHeight: 411,
    },
    padding: 0,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    filter:
      'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  }),
  control: () => ({
    '@media screen and (min-width: 320px)': {
      width: 280,
    },
    '@media screen and (min-width: 768px)': {
      width: 408,
    },
    height: 34,
  }),
  placeholder: items => ({
    ...items,
    fontSize: 18,
    lineHeight: 1.44,
    color: '#BDBDBD',
  }),
  valueContainer: items => ({
    ...items,
    maxHeight: 34,
    paddingLeft: 20,
    paddingBottom: 10,
  }),
  indicatorsContainer: () => ({
    display: 'none',
  }),
  container: items => ({
    ...items,
    cursor: 'pointer',
    borderBottom: '1px solid #BDBDBD',
  }),
  singleValue: (items, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 150ms';
    return { ...items, opacity, transition };
  },
};

/* export default initialSelectStyles; */