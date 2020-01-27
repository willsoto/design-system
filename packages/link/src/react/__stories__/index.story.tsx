import React from 'react'
import { storiesOf } from '@storybook/react'

import Link from '../index'

const appearanceStory = storiesOf('appearance', module)

Object.entries(Link.appearances).forEach(entry => {
  const [, appearance] = entry

  appearanceStory.add(`${appearance}`, _ => (
    <p style={{ color: 'white' }}>
      <Link appearance={appearance}>
        <a href="http://duckduckgo.com">Click me</a>
      </Link>
    </p>
  ))
})

storiesOf('tagNames', module).add('button', _ => (
  <p style={{ color: 'white' }}>
    <Link>
      <button>Click me</button>
    </Link>
  </p>
))
