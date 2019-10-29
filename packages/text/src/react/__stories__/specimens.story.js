import { storiesOf } from '@storybook/react'
import * as glamor from 'glamor'
import React, { Fragment } from 'react'

import core from '@pluralsight/ps-design-system-core'
import { useTheme } from '@pluralsight/ps-design-system-theme/react'

const FontSmoothing = props => (
  <div
    {...glamor.css({
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale'
    })}
    {...props}
  />
)

const Specimen = props => <div {...glamor.css({ padding: 20 })} {...props} />
Specimen.Label = props => (
  <p
    {...glamor.css({
      fontSize: 14,
      lineHeight: '20px',
      marginBottom: 10,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: core.colors.gray02
    })}
    {...props}
  />
)

const HeadingIpsum = () => 'Fromage edam cottage cheese'

const BodyIpsum = () =>
  'Goat cheese and wine cut the cheese. Fromage cheddar goat cheesecake mascarpone cottage.'

const Wrapper = props => {
  const themeName = useTheme()

  return (
    <div
      {...glamor.css({
        color: themeName === 'dark' ? core.colors.bone : core.colors.gray06,
        padding: '10px'
      })}
      {...props}
    />
  )
}
const variants = [
  {
    name: 'Gigantic 64px Extra Light',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 64, lineHeight: '72px', fontWeight: 200 })
  },
  {
    name: 'Gigantic 64px Light',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 64, lineHeight: '72px', fontWeight: 300 })
  },
  {
    name: 'Gigantic 64px Book',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 64, lineHeight: '72px', fontWeight: 400 })
  },
  {
    name: 'Jumbo 48px Extra Light',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 48, lineHeight: '56px', fontWeight: 200 })
  },
  {
    name: 'Jumbo 48px Light',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 48, lineHeight: '56px', fontWeight: 300 })
  },
  {
    name: 'Jumbo 48px Book',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 48, lineHeight: '56px', fontWeight: 400 })
  },
  {
    name: 'XX-Large 24px Light',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 34, lineHeight: '40px', fontWeight: 300 })
  },
  {
    name: 'XX-Large 24px Extra Light',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 34, lineHeight: '40px', fontWeight: 200 })
  },
  {
    name: 'XX-Large 24px Book',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 34, lineHeight: '40px', fontWeight: 400 })
  },
  {
    name: 'X-Large 24px Bold',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 24, lineHeight: '32px', fontWeight: 600 })
  },
  {
    name: 'X-Large 24px Medium',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 24, lineHeight: '32px', fontWeight: 500 })
  },
  {
    name: 'X-Large 24px Book',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 24, lineHeight: '32px', fontWeight: 400 })
  },
  {
    name: 'Large 18px Bold',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 18, lineHeight: '20px', fontWeight: 600 })
  },
  {
    name: 'Large 18px Medium',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 18, lineHeight: '20px', fontWeight: 500 })
  },
  {
    name: 'Large 18px Book',
    placements: ['heading'],
    styles: glamor.css({ fontSize: 18, lineHeight: '20px', fontWeight: 400 })
  },
  {
    name: 'Medium 16px Bold',
    placements: ['body'],
    styles: glamor.css({ fontSize: 16, lineHeight: '24px', fontWeight: 600 })
  },
  {
    name: 'Medium 16px Medium',
    placements: ['body'],
    styles: glamor.css({ fontSize: 16, lineHeight: '24px', fontWeight: 500 })
  },
  {
    name: 'Medium 16px Book',
    placements: ['body'],
    styles: glamor.css({ fontSize: 16, lineHeight: '24px', fontWeight: 400 })
  },
  {
    name: 'Small 14px Bold',
    placements: ['body'],
    styles: glamor.css({ fontSize: 14, lineHeight: '20px', fontWeight: 600 })
  },
  {
    name: 'Small 14px Medium',
    placements: ['body'],
    styles: glamor.css({ fontSize: 14, lineHeight: '20px', fontWeight: 500 })
  },
  {
    name: 'Small 14px Book',
    placements: ['body'],
    styles: glamor.css({ fontSize: 14, lineHeight: '20px', fontWeight: 400 })
  },
  {
    name: 'X-Small 12px Bold',
    placements: ['body'],
    styles: glamor.css({ fontSize: 12, lineHeight: '16px', fontWeight: 600 })
  },
  {
    name: 'X-Small 12px Medium',
    placements: ['body'],
    styles: glamor.css({ fontSize: 12, lineHeight: '16px', fontWeight: 500 })
  },
  {
    name: 'X-Small 12px Book',
    placements: ['body'],
    styles: glamor.css({ fontSize: 12, lineHeight: '16px', fontWeight: 400 })
  }
]

storiesOf('specimen sheets', module)
  .addDecorator(storyFn => <Wrapper>{storyFn()}</Wrapper>)
  .add('heading', () => (
    <Fragment>
      {variants
        .filter(({ placements = [] }) => placements.includes('heading'))
        .map(({ name, styles }, key) => (
          <Specimen key={key}>
            <Specimen.Label>{name}</Specimen.Label>
            <h1 {...styles}>
              <HeadingIpsum />
            </h1>
          </Specimen>
        ))}
    </Fragment>
  ))
  .add('heading w/font-smoothing', () => (
    <FontSmoothing>
      {variants
        .filter(({ placements = [] }) => placements.includes('heading'))
        .map(({ name, styles }, key) => (
          <Specimen key={key}>
            <Specimen.Label>{name}</Specimen.Label>
            <h1 {...styles}>
              <HeadingIpsum />
            </h1>
          </Specimen>
        ))}
    </FontSmoothing>
  ))
  .add('body text', () => (
    <Fragment>
      {variants
        .filter(({ placements = [] }) => placements.includes('body'))
        .map(({ name, styles }, key) => (
          <Specimen key={key}>
            <Specimen.Label>{name}</Specimen.Label>
            <p {...styles}>
              <BodyIpsum />
            </p>
          </Specimen>
        ))}
    </Fragment>
  ))
  .add('body text w/font-smoothing', () => (
    <FontSmoothing>
      {variants
        .filter(({ placements = [] }) => placements.includes('body'))
        .map(({ name, styles }, key) => (
          <Specimen key={key}>
            <Specimen.Label>{name}</Specimen.Label>
            <p {...styles}>
              <BodyIpsum />
            </p>
          </Specimen>
        ))}
    </FontSmoothing>
  ))
