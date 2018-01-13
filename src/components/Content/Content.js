//@flow

import React from 'react'
import cn from 'classnames'
import st from './Content.module.css'

export const Content = ({
  children,
  style,
  className,
  centered,
  presentation,
  inverted,
}: {|
  children: *,
  style?: Object,
  className?: string,
  centered?: boolean,
  presentation?: React$Element<any>,
  inverted?: boolean,
|}) => (
  <div
    style={style}
    className={cn(
      st.content,
      centered && st.content_centered,
      presentation && st.content_hasPresentation,
      presentation && inverted && st.content_inverted,
      className,
    )}>
    <div className={st.children}>{children}</div>
    {presentation && <div className={st.presentation}>{presentation}</div>}
  </div>
)
