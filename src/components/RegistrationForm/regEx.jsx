const email =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const name = /^[a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії0-9]+$/;
const password =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&-_])[A-Za-z\d@$!%*#?&]{8,12}$/;
const regEx = { email, name, password };

export default regEx;
