import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {selectHealth, selectAttack, selectName} from '../../../features/npcs/goblin/goblinSlice';

export const Goblin = () => {
  const health = useAppSelector(selectHealth);
  const attack = useAppSelector(selectAttack);
  const name = useAppSelector(selectName);
  const dispatch = useAppDispatch();

  return (
    <div>
      <span>{name}</span>
      {health > 0 &&
        <span>Health: {health}</span>
      }
    </div>
  )
}