import {configure} from '@storybook/react'
import '../src/layouts/index.css'

const req = require.context('../src/components', true, /\.stories\.js$/)

const loadStories = () => req.keys().forEach((filename) => req(filename))

configure(loadStories, module)
