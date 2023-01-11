import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../hooks';
import { selectHealth, selectName, selectAttack } from '../../features/cartographer/cartographerSlice';
import { decrementGoblinHealth } from '../../features/npcs/goblin/goblinSlice';

export const Cartographer = () => {
  const health = useAppSelector(selectHealth)
  const name = useAppSelector(selectName);
  const attack = useAppSelector(selectAttack);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>{name}</div>
      Health: {health}
      <button onClick={() => dispatch(decrementGoblinHealth(attack))}>Attack</button>
    </div>
  )
}