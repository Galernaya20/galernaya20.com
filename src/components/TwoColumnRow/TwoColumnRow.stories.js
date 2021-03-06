//@flow
import React from 'react'
import {storiesOf} from '@storybook/react'
import {TwoColumnRow} from './TwoColumnRow'
import studioData from '../../components/pages/Studio/fixture'

const {studioA, studioB} = studioData

storiesOf('TwoColumnRow', module).add('default', () => (
  <TwoColumnRow
    left={
      <div>
        <h2>{studioA.title}</h2>
        <p>{studioA.description.description}</p>
        <p>Стоимость от {studioA.price} в час</p>
        <p>
          <a href={studioA.link}>Подробности</a>
        </p>
      </div>
    }
    right={
      <div>
        <h2>{studioB.title}</h2>
        <p>{studioB.description.description}</p>
        <p>Стоимость от {studioB.price} в час</p>
        <p>
          <a href={studioB.link}>Подробности</a>
        </p>
      </div>
    }
  />
))
