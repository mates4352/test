import React, {ChangeEvent, FC, memo, useEffect, useRef, useState} from 'react';
import s from './Input-search.module.scss';
import classNames from 'classnames';
import {IconSearch} from '../../icons/icon-search/Icon-search';
import {PopupInput} from '../../ui/popup-input/Popup-input';
import {useOnClickOutside} from "../../../hooks/useOnClickOutside";
import {useAppSelector} from "../../../hooks/useAppSelector";

type InputSearchType = {
  type?: string
  placeholder: string
  value: string
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
  onFilterPopup: () => void
  className?: {
    inputSearch?: string
    wrap?: string
    input?: string
  }
};

export const InputSearch: FC<InputSearchType> = memo(({
  type = 'text',
  placeholder,
  value,
  onChangeInput,
  onFilterPopup,
  className,
}) => {
  const [isPopup, showPopup] = useState<boolean>(false);
  const {data} = useAppSelector(state => state.main)
  const refInputSearch = useRef(null);
  const onClickInputShowPopup = () => {
    showPopup(true)
  }
  const onClickInputClosePopup = () => {
    showPopup(false)
  }

  useOnClickOutside(refInputSearch, onClickInputClosePopup)

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      onFilterPopup()
    }, 300)
    return () => clearTimeout(idTimeout)
  }, [value])

  return (
    <div className={classNames(s.inputSearch, className?.inputSearch)} ref={refInputSearch}>
      <div className={classNames(s.wrap, className?.wrap)}>
        <input
          className={classNames(
            s.input,
            s.p3,
            value && s.inputValue,
            className?.input
          )}
          type={type}
          placeholder={placeholder}
          value={value}
          onClick={onClickInputShowPopup}
          onChange={onChangeInput}/>

        <IconSearch className={s.icon}/>
      </div>

      <PopupInput isPopup={isPopup} dataArray={data}/>
    </div>
  );
})
