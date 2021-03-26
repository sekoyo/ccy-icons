import cx from 'clsx'

import './Spinner.scss'

export function Spinner({ className, ...attrs }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx('xx-spinner', className)} {...attrs}>
      <div className="xx-spinner-bounce xx-spinner-bounce-0" />
      <div className="xx-spinner-bounce xx-spinner-bounce-1" />
      <div className="xx-spinner-bounce xx-spinner-bounce-2" />
    </div>
  )
}
