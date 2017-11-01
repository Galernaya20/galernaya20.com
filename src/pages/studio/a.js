//@flow

import React from 'react'
import {Header, Presentation, Content} from '../../components'

const StudioAPage = () => (
  <div>
    <Header title="Аренда студия звукозаписи А" description="Небольшая студия для записи вокала" />
    <Content presentation={<Presentation background={{image: 'http://via.placeholder.com/600x600'}} />}>
      <h2>Оснащение студии</h2>
      <p>
        Студия А состоит из просторной контрольной комнаты и большого тон-зала, общая площадь студии составляет 56
        квадратных метров.
      </p>
    </Content>
    <Content>
      <h2>Стоимость аренды</h2>
      <p>Прайс...</p>
    </Content>
    <Content>
      <h2>Календарь</h2>
    </Content>
  </div>
)

export default StudioAPage
