import React from 'react';

import ProgressBar from '@ramonak/react-progress-bar';

import style from '../ProgressBar/progress-bar.module.css';

const ProgressBarLine = value => {
  return (
    <ProgressBar
      completed={value}
      className={style.wrapper}
      barContainerClassName={style.container}
      completedClassName={style.barCompleted}
      labelClassName={style.label}
    />
  );
};

ProgressBarLine(80);

export default ProgressBarLine;
