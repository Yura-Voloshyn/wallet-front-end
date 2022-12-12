import styled from '@emotion/styled';
import { stylistics } from '../../styles/styles';
import Datetime from 'react-datetime';
import Switch from 'react-switch';



export const MySwitch = styled(Switch)`
  margin: 0 20px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: none;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 6px 15px rgba(156, 156, 158, 0.5);
`

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
  margin-bottom: 40px;
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
  width: 280px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
`;

export const CheckboxSpan = styled.span`
  font-weight: 700;
  font-style: 16px;
  line-height: 24px;
  color: ${stylistics.colors.secondaryLightText};
  &.active-i{
    color: #24CCA7;
  }
  &.active-e{
    color: #FF6596;
  }
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
  /* border-bottom: 1px solid #BDBDBD; */
  color: ${stylistics.colors.secondaryLightText};
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
}
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
  @media screen and (max-width: 768px) {
    display: grid;
  }
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const FormSum = styled.label`
  @media screen and (max-width: 768px) {
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
  max-width: 188px; 
  height: 32px; 
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  
    @media screen and (max-width: 768px) {
    min-width: 280px;
  }
  &::placeholder {
    color: ${stylistics.colors.secondaryText};
    padding-bottom: 8px;
    padding-left: 20px;
    font-weight: 700;
    @media screen and (min-width: 768px) {
    text-align: center;
    }
  }

`;



export const MyTimePicker = styled(Datetime)`
outline: none;
border: none;
width: 100%;
border-bottom: 1px solid #E0E0E0;
`;

export const CalendarDiv = styled.div`
width: 100%;
/* padding: 10px; */
@media screen and (min-width: 768px){
width: 200px;
}
`;

export const DataPickerWrapper = styled.label`
display: flex;
flex-direction: row;
height: 32px;
border: none;
outline: none;
background-color: #fff;
/* padding: 18px 20px 18px 10px; */
padding: 0;
outline: none;
border: none;
/* line-height: 0; */
input,
  textarea {
    padding: 0 20px;
    font-weight: 400;
    /* line-height: 1.5; */
    border: none;
  }
     @media screen and (max-width: 768px) {
      margin-bottom: 40px;
      min-width: 280px;
      height: 32px;
      padding: 18px 0px 0px 0px;
    }
`;

export const DateIcon = styled.svg`
    @media screen and (max-width: 768px) {
      top: 95px;
    }
    width: 24px;
    height: 24px;
    fill: ${stylistics.colors.houseExpens};
    position: absolute;
    right: 20px;
    /* top: 7px; */
    pointer-events: none;
    vertical-align: baseline;
`;

export const TextForm = styled.label`
  /* margin-bottom: 50px; */
  /* margin-top: 40px; */
  /* max-width: 280px;
  max-height: 84px; */
`;

export const CommentInput = styled.input`
  width: 394px;
  height: 32px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  padding-left: 20px;
  padding-bottom: 5px;
  outline: none;
  border: none;
  resize: none;
  display: block;
  position: relative;
  border-bottom: 1px solid #BDBDBD;
  color: ${stylistics.colors.primaryText};
      &::placeholder{
    color: ${stylistics.colors.secondaryText};
    }
  @media screen and (max-width: 768px) {
     height: 84px;
     max-width: 240px;
    }

  /* resize: none; */
`;


//--------Styles for changing initial Select from react-----------

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

