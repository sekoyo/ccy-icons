import { useMemo } from 'react'
import cx from 'clsx'

import './Stack.scss'

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  layout?: 'vertical' | 'horizontal'
  itemSpacing?: number
  itemMinSize?: string
  marginTop?: number
  marginBottom?: number
  marginY?: number
}

export function Stack({
  className,
  layout = 'vertical',
  itemSpacing = 1,
  itemMinSize = '300px',
  marginTop,
  marginBottom,
  marginY,
  style = {},
  ...attrs
}: StackProps) {
  const finalTopMargin = marginY ?? marginTop
  const finalBottomMargin = marginY ?? marginBottom
  const composedStyles = useMemo(
    () => ({
      '--stack-itemSpacing': itemSpacing && `${itemSpacing}rem`,
      '--stack-itemMinSize': itemMinSize,
      '--stack-marginTop': finalTopMargin && `${finalTopMargin}rem`,
      '--stack-marginBottom': finalBottomMargin && `${finalBottomMargin}rem`,
      ...style,
    }),
    [style, itemSpacing, itemMinSize, finalTopMargin, finalBottomMargin]
  )
  return (
    <div
      className={cx('xx-stack', className)}
      {...attrs}
      style={composedStyles}
      data-layout={layout}
    />
  )
}
