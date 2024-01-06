import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Action } from '@reduxjs/toolkit';

import { IOptions } from '@constant/params';
import { GenreParams, FilterParams } from '@constant/enums';
import Arrow from './Arrow';

import classes from './select.module.css';

type TValue = GenreParams | FilterParams;
type TSelect = (name: string, value: TValue) => void;

interface IData {
  data: IOptions[];
  placeholder: string;
  onUpdateClb: (param: TValue) => Action;
}

interface ISelectData {
  name: string;
  value: TValue;
}

const SelectArea = ({ data, placeholder, onUpdateClb }: IData) => {
  const { name, value } = data[0];

  const [selectData, setSelectData] = useState<ISelectData>({ name, value });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLElement>(null);

  const dispatch = useDispatch();

  const handleSelectedData: TSelect = (name, value) => {
    setSelectData({ name, value });
    dispatch(onUpdateClb(value));
    setIsOpen((p) => !p);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { target } = e;
      if (target instanceof Node && !selectRef.current?.contains(target))
        setIsOpen(false);
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <section ref={selectRef} className={classes.wrapper}>
      <div className={classes.title} onClick={() => setIsOpen((p) => !p)}>
        <div className={classes.titleText}>
          <span>{placeholder} </span>
          <pre> </pre>
          {selectData.name}
        </div>
        <div className={isOpen ? classes.open : classes.close}>{<Arrow />}</div>
      </div>
      {isOpen && (
        <ul className={classes.select}>
          {data.map(({ id, name, value }: IOptions) => (
            <li
              key={id}
              value={value}
              onClick={() => handleSelectedData(name, value)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default SelectArea;
