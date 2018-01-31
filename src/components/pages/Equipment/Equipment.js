//@flow

import React from 'react'
// import styled from 'styled-components'
import {Header} from '../../Header/Header'
import type {PropsT as HeaderT} from '../../Header/Header'
import type {PropsT as TabsT} from '../../Tabs/Tabs'
import {Footer} from '../../Footer/Footer'
import {TabsComponent} from '../../Tabs/Tabs'

import {Layout} from '../styles'

type EquipmentT = {
  header: HeaderT,
} & TabsT

export const Equipment = ({header, tabs}: EquipmentT) => (
  <div>
    <Header {...header} />
    <Layout>
      <TabsComponent tabs={tabs} />
    </Layout>
    <Footer />
  </div>
)

const UnwrapPathContext = ({pathContext}: *) => {
  return <Equipment {...pathContext} />
}

export default UnwrapPathContext
