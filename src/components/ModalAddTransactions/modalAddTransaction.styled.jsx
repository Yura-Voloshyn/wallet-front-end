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
  align-items: center;
  text-align: center;
  font-family: ${stylistics.fonts.heading};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  display: flex;
  color: ${stylistics.colors.primaryText};
    @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 26px;
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

  &:hover {
    border-color: ${stylistics.colors.secondaryTextBtn};
  }

  &:focus {
    border-color: ${stylistics.colors.secondaryTextBtn};
  }
    @media screen and (max-width: 767px) {
    width: 280px;
  }
  width: 190px;
  height: 34px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  padding-left: 20px;

  &::placeholder {
    color: ${stylistics.colors.secondaryText};
    padding-bottom: 10px;
  }
`;

export const DateIcon = styled.svg`
  position: absolute;
  right: 20px;
  top: 7px;
  width: 24px;
  height: 24px;
  fill: ${stylistics.colors.houseExpens};
  pointer-events: none;
`;

export const TextForm = styled.label`
  margin-bottom: 50px;
  margin-top: 30px;
`;





export const CommentInput = styled.input`
  width: 410px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  padding-left: 20px;
  padding-bottom: 5px;
`;
