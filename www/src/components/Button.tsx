import cx from 'clsx'
import { Spinner } from './Spinner'

import './Button.scss'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  decoratorLeft?: React.ReactNode
  decoratorRight?: React.ReactNode
  emphasis?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'buy' | 'sell'
  loading?: boolean
  size?: 'normal' | 'compact'
}

export function Button({
  className,
  children,
  decoratorLeft,
  decoratorRight,
  emphasis = 'primary',
  loading,
  size,
  ...attrs
}: ButtonProps) {
  return (
    <button
      className={cx('xx-button', `xx-button--${emphasis}`, className)}
      data-loading={loading}
      data-size={size}
      {...attrs}
    >
      <div className="xx-button-content">
        {decoratorLeft && <div className="xx-button-left-wrapper">{decoratorLeft}</div>}
        {children}
        {decoratorRight && <div className="xx-button-right-wrapper">{decoratorRight}</div>}
      </div>
      {loading && (
        <div className="xx-button-loading-container">
          <Spinner />
        </div>
      )}
    </button>
  )
}
