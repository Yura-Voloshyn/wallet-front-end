import React from 'react';
// import zxcvbn from 'zxcvbn';
import ProgressBar from '@ramonak/react-progress-bar';

import style from '../ProgressBar/progress-bar.module.css';

const ProgressBarLine = password => {
  // console.log(password);
  // const result = zxcvbn(password);
  // console.log('result', result);

  // const value = result.score;
  // console.log('value', value);

  // const width = (value * 100) / 4;
  // console.log('width', width);

  // if (value === 0) {
  //   console.log('0 too guessable: risky password');
  // } else if (value === 1) {
  //   console.log('1 protection from throttled online attacks');
  // } else if (value === 1) {
  //   console.log('2 protection from throttled online attacks');
  // }
  // const ooo = `${width}`;
  // console.log('ooo', ooo);
  // const res = ooo.typeOf();
  // console.log(res);
  // if (true) {
  //   const width = style.barCompletedWell;
  // }
  const pas = 4;
  if (pas === 0) {
    return (
      <ProgressBar
        completed={`${password}`}
        className={style.wrapper}
        barContainerClassName={style.container}
        completedClassName={style.barCompletedBad}
        labelClassName={style.label}
        isLabelVisible={false}
      />
    );
  }
  if (pas === 1) {
    return (
      <ProgressBar
        completed={`${password}`}
        className={style.wrapper}
        barContainerClassName={style.container}
        completedClassName={style.barCompletedNotBad}
        labelClassName={style.label}
        isLabelVisible={false}
      />
    );
  }
  if (pas === 2) {
    return (
      <ProgressBar
        completed={`${password}`}
        className={style.wrapper}
        barContainerClassName={style.container}
        completedClassName={style.barCompletedNormal}
        labelClassName={style.label}
        isLabelVisible={false}
      />
    );
  }
  if (pas === 3) {
    return (
      <ProgressBar
        completed={`${password}`}
        className={style.wrapper}
        barContainerClassName={style.container}
        completedClassName={style.barCompletedWell}
        labelClassName={style.label}
        isLabelVisible={false}
      />
    );
  }
  if (pas === 4) {
    return (
      <ProgressBar
        completed={`${password}`}
        className={style.wrapper}
        barContainerClassName={style.container}
        completedClassName={style.barCompletedVeryWell}
        labelClassName={style.label}
        isLabelVisible={false}
      />
    );
  }
};

export default ProgressBarLine;
