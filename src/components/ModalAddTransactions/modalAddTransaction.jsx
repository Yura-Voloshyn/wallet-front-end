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
  TwoBtns,
  MySwitch,
  // CalendarIcon,
  CalendarDiv,
  DataPickerWrapper,
  MyTimePicker,
  initialSelectStyles,
} from './modalAddTransaction.styled';
import { postTransaction } from 'redux/transaction/transactionOperation';
// import {
//   transOperations,
//   // transSelectors,
// } from '../../services/api/transactios';
import Modal from '../ModalAddTransactions/Modal';
// import Switch from 'react-switch';
import Select from 'react-select';
// import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { getFilteredCategories } from 'redux/categories/categories-selectors';
import { fetchCategories } from 'redux/categories/categories-operations';
import SubmitBtn from 'components/Button/SubmitBtn';
import StyledNavLink from 'components/Button/StyledNavLink';
// import styles from 'components/ModalAddTransactions/'

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
    date: '12.12.2022',
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
        const res = await dispatch(
          postTransaction({
            date: '12.12.2022',
            sum: Number(userSum),
            comment,
            type: !checked ? true : false,
            category,
          })
        );
        console.log(res);
      })();
      onClose();
    },
    [category, comment, sum, checked, onClose, dispatch]
  );

  return (
    <Modal onClose={onClose}>
      <CloseAddModal as="button" type="button" onClick={onClose}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M1 1L17 17" stroke="black" />
          <path d="M1 17L17 0.999999" stroke="black" />
        </svg>
      </CloseAddModal>

      <TitleMod as="h2">Add transaction</TitleMod>

      <TransactionAddForm onSubmit={handleSubmit}>
        <CheckboxWrapper as="div">
          <CheckboxSpan
            className={`${!checked && 'active-i'}`}
            style={{ marginRight: '20px' }}
          >
            Income
          </CheckboxSpan>
          <MySwitch
            // style={{backgroundColor: '#FFf', margin: '0 15px 20px 15px'}}
            styles={{ margin: '0 15px 20px 15px' }}
            onColor={'#fff'}
            offColor={'#fff'}
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
                height="20"
                viewBox="0 0 20 2"
                fill="none"
              >
                <path d="M0 1L20 0.999999" stroke="white" strokeWidth="2" />
              </AddTransIcon>
            }
            uncheckedHandleIcon={
              <AddExpsIcon
                as="svg"
                id="spend-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path d="M10 0V20" stroke="white" strokeWidth="2" />
                <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
              </AddExpsIcon>
            }
          />
          <CheckboxSpan
            className={`${checked && 'active-e'}`}
            style={{ marginLeft: '20px' }}
          >
            Expense
          </CheckboxSpan>
        </CheckboxWrapper>

        {checked && (
          <SelectWrapper as="div">
            <Select
              name="option"
              onChange={onChangeSelect}
              placeholder="Select a category"
              styles={initialSelectStyles}
              options={selection}
            />
            <ChooseIcon
              as="svg"
              id="arrow-icon"
              width="20"
              height="2"
              viewBox="0 0 20 11"
              fill="none"
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
                value={selectedDate}
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
              >
                <path
                  d="M10 11H8V13H10V11ZM14 11H12V13H14V11ZM18 11H16V13H18V11ZM20 4H19V2H17V4H9V2H7V4H6C4.89 4 4.01 4.9 4.01 6L4 20C4 21.1 4.89 22 6 22H20C21.1 22 22 21.1 22 20V6C22 4.9 21.1 4 20 4ZM20 20H6V9H20V20Z"
                  fill="#4A56E2"
                />
              </DateIcon>
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
          <StyledNavLink onClick={onClose} btnText={'Cancel'}></StyledNavLink>
        </TwoBtns>
      </TransactionAddForm>
    </Modal>
  );
};

ModalAddTransactions.propTypes = {
  onClose: PropTypes.func,
};

export default ModalAddTransactions;
