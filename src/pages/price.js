//@flow

import '../globalStyles'
import React from 'react'
import {Prices} from '../components/pages/Prices/Prices'
import pricesData from '../components/pages/Prices/fixture'

const PricePage = () => <Prices {...pricesData} />

export default PricePage
