import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../hooks';
import { decrementHealth, selectHealth, selectName } from '../../features/cartographer/cartographerSlice';

export const Cartographer = () => {
  const health = useAppSelector(selectHealth)
  const name = useAppSelector(selectName);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>{name}</div>
      Health: {health}
    </div>
  )
}