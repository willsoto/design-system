import { storiesOf } from '@storybook/react'
import * as glamor from 'glamor'
import React, { Fragment } from 'react'

// import core from '@pluralsight/ps-design-system-core'
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
      fontSize: 10,
      lineHeight: '20px',
      marginBottom: 10,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: '#758799'
    })}
    {...props}
  />
)

const HeadingIpsum = () => 'Fromage edam cottage cheese 123'

const BodyIpsum = () =>
  'Goat cheese and wine cut the cheese. Fromage cheddar goat cheesecake mascarpone cottage.'

const Wrapper = props => {
  const themeName = useTheme()

  return (
    <div
      {...glamor.css({
        color:
          themeName === 'dark' ? 'rgba(255,255,255,.95)' : 'rgba(0,0,0,.90)',
        backgroundColor: themeName === 'dark' ? '#0D0F12' : '#ffffff',
        padding: '10px'
      })}
      {...props}
    />
  )
}
const variants = [
  {
    name: 'Gigantic 64px Medium',
    placements: ['Ginormous'],
    styles: glamor.css({ fontSize: 64, lineHeight: '72px', fontWeight: 500 })
  },
  {
    name: 'Gigantic 64px Book',
    placements: ['Ginormous'],
    styles: glamor.css({ fontSize: 64, lineHeight: '72px', fontWeight: 400 })
  },
  {
    name: 'Gigantic 64px Light',
    placements: ['Ginormous'],
    styles: glamor.css({ fontSize: 64, lineHeight: '72px', fontWeight: 300 })
  },
  {
    name: 'Gigantic 64px Extra Light',
    placements: ['Ginormous'],
    styles: glamor.css({ fontSize: 64, lineHeight: '72px', fontWeight: 200 })
  },
  {
    name: 'Jumbo 48px Medium',
    placements: ['Ginormous'],
    styles: glamor.css({ fontSize: 48, lineHeight: '56px', fontWeight: 500 })
  },
  {
    name: 'Jumbo 48px Book',
    placements: ['Ginormous'],
    styles: glamor.css({ fontSize: 48, lineHeight: '56px', fontWeight: 400 })
  },
  {
    name: 'Jumbo 48px Light',
    placements: ['Ginormous'],
    styles: glamor.css({ fontSize: 48, lineHeight: '56px', fontWeight: 300 })
  },
  {
    name: 'Jumbo 48px Extra Light',
    placements: ['Ginormous'],
    styles: glamor.css({ fontSize: 48, lineHeight: '56px', fontWeight: 200 })
  },
  {
    name: 'XX-Large 34px Bold',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 34, lineHeight: '40px', fontWeight: 600 })
  },
  {
    name: 'XX-Large 34px Medium',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 34, lineHeight: '40px', fontWeight: 500 })
  },
  {
    name: 'XX-Large 34px Book',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 34, lineHeight: '40px', fontWeight: 400 })
  },
  {
    name: 'XX-Large 34px Light',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 34, lineHeight: '40px', fontWeight: 300 })
  },
  {
    name: 'XX-Large 34px Extra Light',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 34, lineHeight: '40px', fontWeight: 200 })
  },
  {
    name: 'X-Large 24px Bold',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 24, lineHeight: '32px', fontWeight: 600 })
  },
  {
    name: 'X-Large 24px Medium',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 24, lineHeight: '32px', fontWeight: 500 })
  },
  {
    name: 'X-Large 24px Book',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 24, lineHeight: '32px', fontWeight: 400 })
  },
  {
    name: 'X-Large 24px Light',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 24, lineHeight: '32px', fontWeight: 300 })
  },
  {
    name: 'X-Large 24px Extra Light',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 24, lineHeight: '32px', fontWeight: 200 })
  },
  {
    name: 'Large 18px Bold',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 18, lineHeight: '20px', fontWeight: 600 })
  },

  {
    name: 'Large 18px Medium',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 18, lineHeight: '20px', fontWeight: 500 })
  },
  {
    name: 'Large 18px Book',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 18, lineHeight: '20px', fontWeight: 400 })
  },
  {
    name: 'Large 18px Light',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 18, lineHeight: '20px', fontWeight: 300 })
  },
  {
    name: 'Large 18px Extra Light',
    placements: ['Heading'],
    styles: glamor.css({ fontSize: 18, lineHeight: '20px', fontWeight: 200 })
  },
  {
    name: 'Medium 16px Bold',
    placements: ['Body'],
    styles: glamor.css({ fontSize: 16, lineHeight: '24px', fontWeight: 600 })
  },
  {
    name: 'Medium 16px Medium',
    placements: ['Body'],
    styles: glamor.css({ fontSize: 16, lineHeight: '24px', fontWeight: 500 })
  },
  {
    name: 'Medium 16px Book',
    placements: ['Body'],
    styles: glamor.css({ fontSize: 16, lineHeight: '24px', fontWeight: 400 })
  },
  {
    name: 'Small 14px Bold',
    placements: ['Body'],
    styles: glamor.css({ fontSize: 14, lineHeight: '20px', fontWeight: 600 })
  },
  {
    name: 'Small 14px Medium',
    placements: ['Body'],
    styles: glamor.css({ fontSize: 14, lineHeight: '20px', fontWeight: 500 })
  },
  {
    name: 'Small 14px Book',
    placements: ['Body'],
    styles: glamor.css({ fontSize: 14, lineHeight: '20px', fontWeight: 400 })
  },
  {
    name: 'X-Small 12px Bold',
    placements: ['Body'],
    styles: glamor.css({ fontSize: 12, lineHeight: '16px', fontWeight: 600 })
  },
  {
    name: 'X-Small 12px Medium',
    placements: ['Body'],
    styles: glamor.css({ fontSize: 12, lineHeight: '16px', fontWeight: 500 })
  },
  {
    name: 'X-Small 12px Book',
    placements: ['Body'],
    styles: glamor.css({ fontSize: 12, lineHeight: '16px', fontWeight: 400 })
  },
  {
    name: 'Eyebrow 12px Bold',
    placements: ['Body'],
    styles: glamor.css({
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      opacity: 0.55
    })
  },
  {
    name: 'Eyebrow 12px Medium',
    placements: ['Body'],
    styles: glamor.css({
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      opacity: 0.55
    })
  }
]

storiesOf('specimen sheets', module)
  .addDecorator(storyFn => <Wrapper>{storyFn()}</Wrapper>)
  .add('Ginormous', () => (
    <Fragment>
      {variants
        .filter(({ placements = [] }) => placements.includes('Ginormous'))
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
  .add('Ginormous w/font-smoothing', () => (
    <FontSmoothing>
      {variants
        .filter(({ placements = [] }) => placements.includes('Ginormous'))
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
  .add('Headings', () => (
    <Fragment>
      {variants
        .filter(({ placements = [] }) => placements.includes('Heading'))
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
  .add('Headings w/ font-smoothing', () => (
    <FontSmoothing>
      {variants
        .filter(({ placements = [] }) => placements.includes('Heading'))
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
  .add('Body & Caption', () => (
    <Fragment>
      {variants
        .filter(({ placements = [] }) => placements.includes('Body'))
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
  .add('Body & Caption w/ font-smoothing', () => (
    <FontSmoothing>
      {variants
        .filter(({ placements = [] }) => placements.includes('Body'))
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
