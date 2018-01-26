//@flow
import React from 'react'
import {storiesOf} from '@storybook/react'
import {SoundCloud} from './SoundCloud'

const content = `<iframe
width="100%"
height="166"
scrolling="no"
frameborder="no"
allow="autoplay"
src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/345948473&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
/>`
storiesOf('SoundCloud', module).add('default', () => <SoundCloud content={content} />)
