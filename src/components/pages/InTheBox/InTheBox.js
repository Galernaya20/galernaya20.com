//@flow

import React from 'react'
import {Header} from '../../Header/Header'
import type {PropsT as HeaderT} from '../../Header/Header'
import {Footer} from '../../Footer/Footer'
import {BlockLayout} from '../styles'

const smallBlockLayout = {
  minHeight: '0',
}

type IntroductionT = {
  introduction: {
    introduction: string,
  },
}

type AboutCourseT = {
  aboutCourse: {
    aboutCourse: string,
  },
}

type PricesAndContactsT = {
  pricesAndContacts: {
    pricesAndContacts: string,
  },
}

type InTheBoxT = {
  header: HeaderT,
  introduction: IntroductionT,
  aboutCourse: AboutCourseT,
  pricesAndContacts: PricesAndContactsT,
}

export const InTheBox = ({header, introduction, aboutCourse, pricesAndContacts}: InTheBoxT) => (
  <div>
    <Header {...header} />
    <BlockLayout
      dangerouslySetInnerHTML={{
        __html: introduction.introduction,
      }}
    />
    <BlockLayout
      dangerouslySetInnerHTML={{
        __html: aboutCourse.aboutCourse,
      }}
      style={smallBlockLayout}
    />
    <BlockLayout
      dangerouslySetInnerHTML={{
        __html: pricesAndContacts.pricesAndContacts,
      }}
      style={smallBlockLayout}
    />
    <Footer />
  </div>
)

const UnwrapPathContext = ({pathContext}: *) => {
  return <InTheBox {...pathContext} />
}

export default UnwrapPathContext
