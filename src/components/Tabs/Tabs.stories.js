// @flow

import React from 'react'
import {storiesOf} from '@storybook/react'
import {TabsComponent} from './Tabs'
import {tabs} from '../pages/Equipment/fixture'
storiesOf('TabsComponent', module).add('default', () => <TabsComponent tabs={tabs} />)
