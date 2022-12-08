import styled from '@emotion/styled';
import { stylistics } from '../../styles/styles';

export const Modal = styled.div`  
  outline: none;
  border: none;
  padding: 20px 11px;
`;

export const TitleMod = styled.h2`
  font-family: ${stylistics.fonts.heading};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${stylistics.colors.primaryText};
`;
export const Checkbox = styled``;

export const TransactionAddForm = styled.form`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 0;
  color: #000;
`;

export const CheckboxWrapper = styled.div`
    margin-bottom: 40px;
    display: flex;
    align-items: center;
`;

export const AddTransIcon = styled.svg`
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const AddExpsIcon = styled.svg`
  top: 50%;
  left: 50%;
  width: 20px;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const SelectWrapper = styled.div`
    @media screen and (max-width: 767px) {
      margin-bottom: 40px;
    }
    position: relative;
    margin-bottom: 30px;
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

export const SumInput = styled.input`
  width: 190px;
  height: 34px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  padding-left: 20px;
`;

export const ChooseIcon = styled.svg`
    position: absolute;
    right: 5px;
    top: 15px;
    width: 20px;
    height: 9px;
    /* cursor: pointer; */
`;

export const CommentInput = styled.input`
  width: 410px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  padding-left: 20px;
  padding-bottom: 5px;
`;

export const CheckboxSpan = styled.span`
  
`;