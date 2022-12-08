import PropTypes from 'prop-types';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from "react-redux";
import { TitleMod, TransactionAddForm, CheckboxWrapper, AddTransIcon, AddExpsIcon, SelectWrapper, InputSumWrapper, FormSum, DateIcon, TextForm, SumInput, ChooseIcon, CommentInput, CheckboxSpan } from "./modalAddTransaction.styled"
import {fetchTransactions} from '../../redux/transaction/transactionOperation';
import Modal from '../ModalAddTransactions/Modal';
import Switch from 'react-switch';
import Select from 'react-select';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
// import 'moment/locale/ua';
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';



//-------------Modal for new transaction adding------------
const ModalAddTransactions = ({ onClose }) => {
    
  const dispatch = useDispatch();

//   const defaultState = {
//   date: new Date(),
//   type: false,
//   category: "",
//   comment: "",
//   sum: "",
// };

    
    useEffect(() => {
    dispatch(fetchTransactions.getCategories());
  }, [dispatch]);

  // const transactionCategories = useSelector(
  //   transactionSlice.getTransactionCategories,
  // );

  // const optionSelect = transactionCategories.map(e => {
  //   return {
  //     value: e,
  //     label: e,
  //   };
  // });



  const [defaultState, setFullState] = useState({
  date: new Date(),
  type: false,
  category: "",
  comment: "",
  sum: "",
  });

  const { category, comment, sum, checked } = defaultState;

  useEffect(() => {
    if (checked) {
      setFullState(prev => ({
        ...prev,
      }));
      return;
    }

    setFullState(prev => ({
      ...prev,
    }));
  }, [checked]);

  const handleChangeCheckbox = nextChecked => {
    setFullState(prev => ({
      ...prev,
      checked: nextChecked,
      value: null,
      label: '',
    }));
  };


  const onChangeSelect = e => {
    setFullState(prev => ({
      ...prev,
      category: e.value,
    }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFullState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  //subtracting the day to get actual date
// moment.locale('ua');
  
  let startday = moment.locale('ua').subtract(1, 'day');
  let today = function (current) {
    return current.isAfter(startday);
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      (async function () {
        const userSum = Number(sum);
        await dispatch(
          fetchTransactions.addTransaction({
            sum: Number(userSum),
            comment,
            type: !checked ? 'income' : 'expense',
            category,
          }),
        );
      })();

      onClose();
    },
    [checked, comment, sum, category, onClose, dispatch],
  );
  
  let optionIncome;
  

    return (
      <Modal onClose={onClose}>
        <button
          type="button"
          className="TransactionAddForm__closeBtn"
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
       </button>
        
      <TitleMod as="h2">Add transaction</TitleMod>
        
      <TransactionAddForm onSubmit={handleSubmit}>
        <CheckboxWrapper as="div">
          <CheckboxSpan as="span">
            Income
          </CheckboxSpan>
          <Switch
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
              <AddTransIcon as="svg"
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
              <AddExpsIcon as="svg"
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
          <CheckboxSpan as="span">
            Expense
          </CheckboxSpan>
        </CheckboxWrapper>

        {checked && (
          <SelectWrapper as="div">
            <Select
              name="selectedOption"
              onChange={onChangeSelect}
              // options={optionSelect}
              placeholder="Choose category"
            />
            <ChooseIcon as="svg"
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
        {!checked && (
          <SelectWrapper as="div">
            <Select
              name="selectedOption"
              onChange={onChangeSelect}
              options={optionIncome}
            />
            <ChooseIcon as="svg"
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
            <SumInput as="input"
              name="sum"
              value={sum}
              onChange={handleChange}
              type="text"
              maxLength="7"
              placeholder="0.00"
              pattern="^[ 0-9]+$"
              required
            ></SumInput>
          </FormSum>

          <Datetime
            locale="ua"
            initialValue={moment()}
            timeFormat={false}
            closeOnSelect={true}
            isValidDate={today}
            inputProps={{
            placeholder: "MM-DD-YYYY HH:mm",
            required: true
        }}
          />
          <DateIcon as="svg"
            id="calendar-icon"
            width="26"
            height="30"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </DateIcon>
        </InputSumWrapper>

        <TextForm as="label">
          <CommentInput as="input"
            name="comment"
            value={comment}
            type="text"
            onChange={handleChange}
            placeholder="Leave your comment here"
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ]+([-'\s][a-zA-Zа-яА-ЯІіЇїҐґ]+)*$"
          ></CommentInput>
        </TextForm>
            {/* Two modal btns */}
          <StyledNavLink btnText={'Add'}></StyledNavLink>
          <SubmitBtn onClick={onClose} btnText={'Decline'}></SubmitBtn> 
      </TransactionAddForm>  
 </Modal>)
}

ModalAddTransactions.propTypes = {
  onClose: PropTypes.func,
};

export default ModalAddTransactions;


