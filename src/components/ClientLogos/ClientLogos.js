//@flow

import React from 'react'
import cn from 'classnames'
import st from './ClientLogos.module.css'

export const ClientLogos = ({className}: {className?: string}) => {
  return (
    <div className={cn(st.self, className)}>
      <div className={st.logo}>
        <img className={st.logoImg} src="http://placehold.it/150x50" />
      </div>
      <div className={st.logo}>
        <img className={st.logoImg} src="http://placehold.it/150x70" />
      </div>
      <div className={st.logo}>
        <img className={st.logoImg} src="http://placehold.it/150x30" />
      </div>
      <div className={st.logo}>
        <img className={st.logoImg} src="http://placehold.it/150x80" />
      </div>
      <div className={st.logo}>
        <img className={st.logoImg} src="http://placehold.it/150x50" />
      </div>
    </div>
  )
}
