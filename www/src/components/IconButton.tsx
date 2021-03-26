import cx from 'clsx'

import './IconButton.scss'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function IconButton({ className, children, ...attrs }: IconButtonProps) {
  return (
    <button className={cx('xx-icon-button', className)} {...attrs}>
      {children}
    </button>
  )
}
