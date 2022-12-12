// import { useEffect } from 'react';
import CurrencyTable from 'components/CurrencyTable/CurrencyTable';
import { CurrencyWrapper } from './Currency.styled';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCategories } from 'redux/categories/categories-operations.js';
// import { getFilteredCategories } from 'redux/categories/categories-selectors.js';

const Currency = () => {
  // const categories = useSelector(getFilteredCategories);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, [dispatch]);

  return (
    <CurrencyWrapper>
      <CurrencyTable />
      {/* <ul>
        {categories.items.map(({ id, name, color }) => (
          <li key={id}>
            {name}, {color}
          </li>
        ))}
      </ul> */}
    </CurrencyWrapper>
  );
};

export default Currency;
