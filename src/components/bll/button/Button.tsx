import React, {FC, memo} from 'react';
import s from './Button.module.scss';
import classNames from "classnames";

type ButtonType = {
  className?: string
  styleActive?: boolean
  children: string
  type?: 'button' | 'reset' | 'submit'
  buttonType?: 'button' | 'link'
  href?: string
  onClickButton?: () => void
};

export const Button: FC<ButtonType> = memo(({
  className,
  styleActive,
  children,
  type = 'button',
  buttonType = 'button',
  href,
  onClickButton,
  ...restProps
}) => {
  const classButton = classNames(
    s.button,
    s.p2,
    styleActive && s.buttonActive,
    className
  )

  return (
    <>
      {buttonType === 'button' ?
        <button
          className={classButton}
          type={type}
          onClick={onClickButton}
          {...restProps}>
          {children}
        </button>:
        <a
          className={classButton}
          href={href}
          target={'_blank'}
          {...restProps}>
          {children}
        </a>
      }


    </>
  );
})
