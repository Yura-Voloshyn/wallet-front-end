import { useSelector, useDispatch } from 'react-redux';
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';

import { signup } from '../../redux/auth/authOperation';

// import { getAuthError } from '../../redux/auth/auth-selectors';

const RegistrationPage = () => {
  //   const dispatch = useDispatch();
  //   //   const { status, message } = useSelector(getAuthError);

  //   const onRegister = data => {
  //     console.log('data', data);
  //     dispatch(signup(data));
  //   };
  //   Notify.init({
  //     width: '200px',
  //     position: 'center-top',
  //     distance: '50px',
  //     opacity: 1,
  //     borderRadius: '4px',
  //     timeout: 3000,
  //     // ...
  //   });

  return (
    <div className="container">
      <RegistrationForm />
      {/* {status && Notify.warning(`${message}`)} */}
    </div>
  );
};

export default RegistrationPage;
