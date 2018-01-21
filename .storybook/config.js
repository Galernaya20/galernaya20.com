//@flow

import '../src/globalStyles'
import {configure} from '@storybook/react'

//$FlowIssue
const req = require.context('../src/components', true, /\.stories\.js$/)

const loadStories = () => req.keys().forEach(filename => req(filename))

configure(loadStories, module)
