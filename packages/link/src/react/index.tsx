import { css } from 'glamor'
import React, { Children, cloneElement, isValidElement } from 'react'

import { useFeatureFlags } from '@pluralsight/ps-design-system-featureflags'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import { appearances } from '../vars/index'

import stylesheet from '../css/index'

const style = (
  themeName: string,
  {
    psds2020Colors,
    appearance
  }: { psds2020Colors: boolean; appearance: keyof typeof appearances }
) => {
  const flag = psds2020Colors ? '.psds-button--2020-colors' : ''

  return css(
    stylesheet[`.psds-link${flag}`],
    appearance === appearances.default
      ? stylesheet[
          `.psds-link--appearance-${appearance}.psds-theme--${themeName}${flag}`
        ]
      : stylesheet[`.psds-link--appearance-${appearance}`]
  )
}

type ILink = React.ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLAnchorElement>
> &
  Statics

interface Props {
  appearance?: keyof typeof appearances
  children: React.ReactNode
}

interface Statics {
  appearances: typeof appearances
}

const Link = React.forwardRef<HTMLAnchorElement, Props>(
  (props, _forwardedRef) => {
    const { appearance = appearances.default, children, ...rest } = props

    const { flags } = useFeatureFlags()
    const { psds2020Colors = false } = flags

    const themeName = useTheme()

    const child = Children.only(children)

    if (!isValidElement(child)) return null

    return cloneElement(child, {
      ...rest,
      ...style(themeName, { appearance, psds2020Colors })
    })
  }
) as ILink

Link.appearances = appearances

export { appearances }

export default Link
