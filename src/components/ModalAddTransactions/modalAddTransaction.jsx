import PropTypes from 'prop-types';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CloseAddModal,
  TitleMod,
  TransactionAddForm,
  CheckboxWrapper,
  IncomeChoosen,
  AddTransIcon,
  AddExpsIcon,
  SelectWrapper,
  InputSumWrapper,
  FormSum,
  DateIcon,
  TextForm,
  SumInput,
  ChooseIcon,
  CommentInput,
  CheckboxSpan,
} from './modalAddTransaction.styled';
import {
  transOperations,
  // transSelectors,
} from '../../services/api/transactios';
import Modal from '../ModalAddTransactions/Modal';
import Switch from 'react-switch';
import Select from 'react-select';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
// import moment from 'moment-timezone';
// import moment from 'moment';

import { getFilteredCategories } from 'redux/categories/categories-selectors';
import { fetchCategories } from 'redux/categories/categories-operations';
// import 'moment/locale/ua';
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';

//-------------Modal for new transaction adding------------
const ModalAddTransactions = ({ onClose }) => {
  const dispatch = useDispatch();
  // const categories = useSelector(transOperations.fetchTransactionsByCategory);
  // console.log(categories);

  // // const defaultState = {
  // //   date: new Date(),
  // //   type: false,
  // //   category: "",
  // //   comment: "",
  // //   sum: "",
  // // };
  const categories = useSelector(getFilteredCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // const transCategories = useSelector(transSelectors.getTransactionCategories);

  //-----------styles for expensions categories selection
  const selection = categories.items.map(e => {
    return {
      value: e.name,
      label: e.name,
    };
  });
  selection.style=(state)=>({  paddingLeft: 20,
                          paddingTop: 13,
                          height: 44,
                          border: 'none',
    cursor: 'pointer',
    color: state.isSelected || state.isFocused ? '#FF6596' : '#000000',
    backgroundColor: state.isSelected || state.isFocused ? '#FFFFFF' : 'inherit',})

  
  const [defaultState, setFullState] = useState({
    date: '',
    type: false,
    category: '',
    comment: '',
    sum: '',
    checked: true,
  });

  const { category, comment, sum, checked } = defaultState;

  useEffect(() => {
    if (checked) {
      setFullState(items => ({
        ...items,
      }));
      return;
    }
    setFullState(items => ({
      ...items,
    }));
  }, [checked]);

  const handleChangeCheckbox = nextChecked => {
    setFullState(items => ({
      ...items,
      checked: nextChecked,
      value: null,
      label: '',
    }));
  };

  const onChangeSelect = e => {
    setFullState(items => ({
      ...items,
      category: e.value,
    }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFullState(items => ({
      ...items,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      (async function () {
        const userSum = Number(sum).toFixed(2);
        await dispatch(
          transOperations.addTransaction({
            sum: Number(userSum),
            comment,
            type: !checked ? 'income' : 'expense',
            category,
          })
        );
      })();
      onClose();
    },
    [category, comment, sum, checked, onClose, dispatch]
  );
  //subtracting the day to get actual date

  // moment.locale();
  // let startDay = moment.locale().subtract(1, 'day');
  // let today = function (current) {
  //   return current.isAfter(startDay);
  // };


  return (
    <Modal onClose={onClose}>
      <CloseAddModal as="button"
        type="button"
        onClick={onClose}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L17 17" stroke="black" />
          <path d="M1 17L17 0.999999" stroke="black" />
        </svg>
      </CloseAddModal>

      <TitleMod as="h2">Add transaction</TitleMod>

      <TransactionAddForm onSubmit={handleSubmit}>
        <CheckboxWrapper as="div">
          <IncomeChoosen as="div">
            <CheckboxSpan as="span" >Income</CheckboxSpan>
            </IncomeChoosen>
          <Switch
            styles={{  margin: '0 15px 20px 15px'}}
            name="checked"
            value={checked}
            onChange={handleChangeCheckbox}
            checked={checked}
            height={40}
            width={80}
            handleDiameter={44}
            onHandleColor="#FF6596"
            offHandleColor="#24cca7"
            checkedHandleIcon={
              <AddTransIcon
                as="svg"
                id="add-icon"
                width="20"
                height="2"
                viewBox="0 0 20 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1L20 0.999999" stroke="white" strokeWidth="2" />
              </AddTransIcon>
            }
            noncheckedHandleIcon={
              <AddExpsIcon
                as="svg"
                id="spend-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 0V20" stroke="white" strokeWidth="2" />
                <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
              </AddExpsIcon>
            }
          />
          <CheckboxSpan as="span">Expense</CheckboxSpan>
        </CheckboxWrapper>

    
        {checked && (
          <SelectWrapper as="div">
            <Select
              name="option"
              onChange={onChangeSelect}
              placeholder="Select a category"
              style = {{ 
                //        borderRadius: 20,
                // backgroundColor: `inherit`,
                    '@media screen and (min-width: 320px)': {
      maxHeight: 352,
    },
    '@media screen and (min-width: 768px)': {
      maxHeight: 411,
    },
    padding: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderRadius: 20,
    backdropFilter: 'blur(25px)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
              }}
              options={selection}
            />
            <ChooseIcon
              as="svg"
              id="arrow-icon"
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L10 10L19 1" stroke="black" />
            </ChooseIcon>
          </SelectWrapper>
        )}

        <InputSumWrapper as="div">
          <FormSum as="label">
            <SumInput
              as="input"
              name="sum"
              value={sum}
              type="text"
              placeholder="0.00"
              onChange={handleChange}
              maxLength="7"
              pattern="^[ 0-9]+$"
              required
            ></SumInput>
          </FormSum>

          <Datetime
            locale="ua"
            // initialValue={}
            timeFormat={false}
            closeOnSelect={true}
            // isValidDate={today}
            inputProps={{
            placeholder: 'MM-DD-YYYY',
            required: true,
            }}
          />
          <DateIcon
            as="svg"
            id="calendar-icon"
            width="26"
            height="30"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></DateIcon>
        </InputSumWrapper>

        <TextForm as="label">
          <CommentInput
            as="input"
            name="comment"
            type="text"
            onChange={handleChange}
            value={comment}
            placeholder="Leave your comment here"
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ]+([-'\s][a-zA-Zа-яА-ЯІіЇїҐґ]+)*$"
          ></CommentInput>
        </TextForm>
        {/* Two modal btns */}
        <StyledNavLink btnText={'Add'}></StyledNavLink>
        <SubmitBtn onClick={onClose} btnText={'Decline'}></SubmitBtn>
      </TransactionAddForm>
    </Modal>
  );
};

ModalAddTransactions.propTypes = {
  onClose: PropTypes.func,
};

export default ModalAddTransactions;
