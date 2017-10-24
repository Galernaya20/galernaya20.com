import React from 'react'
import {Header, Presentation, Summary} from '../../components';

const StudioAPage = () => (
  <div>
    <Header>
      <h1>Аренда студия звукозаписи А</h1>
      <p>
        Небольшая студия для записи вокала
      </p>
    </Header>
    <Summary secondary={<Presentation background={{image: 'http://via.placeholder.com/600x600'}} />}>
      <h2>Оснащение студии</h2>
      <p>
        Студия А состоит из просторной контрольной комнаты и большого тон-зала,
        общая площадь студии составляет 56 квадратных метров.
      </p>
    </Summary>
    <Summary>
      <h2>Стоимость аренды</h2>
      <p>
        Прайс...
      </p>
    </Summary>
    <Summary>
      <h2>Календарь</h2>
    </Summary>
  </div>
)

export default StudioAPage
