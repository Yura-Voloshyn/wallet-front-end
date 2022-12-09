import React from 'react';
import zxcvbn from 'zxcvbn';
import ProgressBar from '@ramonak/react-progress-bar';
import { ProgressText } from '../RegistrationForm/RegistrationForm.styled';

import style from '../ProgressBar/progress-bar.module.css';

const ProgressBarLine = ({ password }) => {
  const result = zxcvbn(password);
  const value = result.score;
  const width = (value * 100) / 4;

  if (value === 0 && password === '') {
    return (
      <ProgressBar
        completed={`${width}`}
        className={style.wrapper}
        barContainerClassName={style.container}
        completedClassName={style.barCompletedBad}
        labelClassName={style.label}
        isLabelVisible={false}
      />
    );
  }
  if (value === 0 && password !== '') {
    return (
      <>
        <ProgressBar
          completed={`${width}`}
          className={style.wrapper}
          barContainerClassName={style.container}
          completedClassName={style.barCompletedBad}
          labelClassName={style.label}
          isLabelVisible={false}
        />
        <ProgressText>Password must contain "123","AbC","?:%;"</ProgressText>
      </>
    );
  }
  if (value === 1) {
    return (
      <>
        <ProgressBar
          completed={`${password}`}
          className={style.wrapper}
          barContainerClassName={style.container}
          completedClassName={style.barCompletedNotBad}
          labelClassName={style.label}
          isLabelVisible={false}
        />
        <ProgressText>Simple password.</ProgressText>
      </>
    );
  }
  if (value === 2) {
    return (
      <>
        <ProgressBar
          completed={`${password}`}
          className={style.wrapper}
          barContainerClassName={style.container}
          completedClassName={style.barCompletedNormal}
          labelClassName={style.label}
          isLabelVisible={false}
        />
        <ProgressText>Normal password.</ProgressText>
      </>
    );
  }
  if (value === 3) {
    return (
      <>
        <ProgressBar
          completed={`${password}`}
          className={style.wrapper}
          barContainerClassName={style.container}
          completedClassName={style.barCompletedWell}
          labelClassName={style.label}
          isLabelVisible={false}
        />
        <ProgressText>Good password.</ProgressText>
      </>
    );
  }
  if (value === 4) {
    return (
      <>
        <ProgressBar
          completed={`${password}`}
          className={style.wrapper}
          barContainerClassName={style.container}
          completedClassName={style.barCompletedVeryWell}
          labelClassName={style.label}
          isLabelVisible={false}
        />
        <ProgressText>Great password.</ProgressText>
      </>
    );
  }
};

export default ProgressBarLine;
