import PropTypes from 'prop-types';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CloseAddModal,
  TitleMod,
  TransactionAddForm,
  CheckboxWrapper,
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
  ActiveInc,
  ActiveExp,
  TwoBtns,
  MySwitch,
  // CalendarIcon,
  CalendarDiv,
  DataPickerWrapper,
  MyTimePicker,
  initialSelectStyles,
} from './modalAddTransaction.styled';
import {
  transOperations,
  // transSelectors,
} from '../../services/api/transactios';
import Modal from '../ModalAddTransactions/Modal';
// import Switch from 'react-switch';
import Select from 'react-select';
// import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
// import moment from 'moment-timezone';
// import moment from 'moment';
// import moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022';
// import 'moment/locale/ua';
import { getFilteredCategories } from 'redux/categories/categories-selectors';
import { fetchCategories } from 'redux/categories/categories-operations';
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';



//-------------Modal for new transaction adding------------
const ModalAddTransactions = ({ onClose }) => {
  const dispatch = useDispatch();
  // const categories = useSelector(transOperations.fetchTransactionsByCategory);
  // console.log(categories);

  const categories = useSelector(getFilteredCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // const transCategories = useSelector(transSelectors.getTransactionCategories);

  const selection = categories.items.map(evt => {
    return {
      value: evt.name,
      label: evt.name,
    };
  });


   const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = evt => {
    setSelectedDate(String(evt._d));
  };

  const [defaultState, setFullState] = useState({
    date: selectedDate,
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

  const onChangeSelect = evt => {
    setFullState(items => ({
      ...items,
      category: evt.value,
    }));
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFullState(items => ({
      ...items,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback(
    evt => {
      evt.preventDefault();
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
             <CheckboxSpan className={` ${!checked && ActiveInc}`} style={{marginRight: "20px"}}>Income</CheckboxSpan>
          <MySwitch
            // styles={{ margin: '0 15px 20px 15px'}}
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
          <CheckboxSpan className={` ${checked && ActiveExp}`} style={{marginLeft: "20px"}}>Expense</CheckboxSpan>
        </CheckboxWrapper>

    
        {checked && (
          <SelectWrapper as="div">
            <Select
              name="option"
              onChange={onChangeSelect}
              placeholder="Select a category"
              // style = {{ boxShadow: `none`,
              //          borderRadius: 20,
              //   backgroundColor: `inherit`,
              // }}
              styles={initialSelectStyles}
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
              // title="Add sum"
              required
              min="0.00"
              step="0.01"
              type="number"
              placeholder="0.00"
              autoComplete="off"
              onChange={handleChange}
              maxLength="6"
              pattern="^[ 0-9]+$"
              
            ></SumInput>
          </FormSum>

          <CalendarDiv>
           <DataPickerWrapper as="label" direction="row">
              <MyTimePicker
                locale="ua"
                type="date"
                closeOnSelect={true}
                value= {selectedDate}
                selected={selectedDate}
                onChange={handleDateChange}
                timeFormat={false}
                dateFormat="DD.MM.YYYY"
                required
               />
              <DateIcon
                as="svg"
                // id="calendar-icon"
                width="26"
                height="30"
                viewBox="0 0 26 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></DateIcon>
                  <g filter="url(#filter0_d_4_1061)">
                    <svg>
                      <path
                        d="M10 11H8V13H10V11ZM14 11H12V13H14V11ZM18 11H16V13H18V11ZM20 4H19V2H17V4H9V2H7V4H6C4.89 4 4.01 4.9 4.01 6L4 20C4 21.1 4.89 22 6 22H20C21.1 22 22 21.1 22 20V6C22 4.9 21.1 4 20 4ZM20 20H6V9H20V20Z"
                        fill="#4A56E2"
                      /></svg>
                  </g>
              </DataPickerWrapper>
          </CalendarDiv>
          </InputSumWrapper>

        <TextForm as="label">
          <CommentInput
            as="input"
            name="comment"
            type="text"
            onChange={handleChange}
            value={comment}
            // title="Add comment"
            placeholder="Comment"
            autoComplete="off"
            maxLength="500"
            // resize= "none"
            // minRows={1}
            // maxRows={3}
            required={false}
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ]+([-'\s][a-zA-Zа-яА-ЯІіЇїҐґ]+)*$"
          ></CommentInput>
        </TextForm>
        {/* Two modal btns */}
        <TwoBtns as="div">
        <SubmitBtn btnText={'Add'}></SubmitBtn>
        <StyledNavLink onClick={onClose} btnText={'Cancel'}></StyledNavLink></TwoBtns>
      </TransactionAddForm>
    </Modal>
  );
};

ModalAddTransactions.propTypes = {
  onClose: PropTypes.func,
};

export default ModalAddTransactions;