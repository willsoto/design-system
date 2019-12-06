import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Icon, { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const spin = css.keyframes(
  stylesheet['@keyframes psds-button__keyframes__spin']
)

const styles = {
  button: (themeName, props) => {
    const { appearance, disabled, icon, iconAlign, iconOnly, size } = props

    return compose(
      css(stylesheet['.psds-button']),
      css(stylesheet[`.psds-button--size-${size}`]),
      css(stylesheet[`.psds-button--appearance-${appearance}`]),
      css(
        stylesheet[
          `.psds-button--appearance-${appearance}.psds-theme--${themeName}`
        ]
      ),
      disabled &&
        compose(
          css(stylesheet[`.psds-button--disabled`]),
          css(stylesheet[`.psds-button--disabled.psds-theme--${themeName}`]),
          css(
            stylesheet[
              `.psds-button--disabled.psds-button--appearance-${appearance}`
            ]
          )
        ),
      icon &&
        !iconOnly &&
        compose(
          css(
            stylesheet[
              `.psds-button--iconAlign-${iconAlign}.psds-button--not-iconOnly`
            ]
          ),
          css(
            stylesheet[
              `.psds-button--iconAlign-${iconAlign}.psds-button--not-iconOnly.psds-button--size-${size}`
            ]
          )
        ),

      iconOnly &&
        compose(
          css(stylesheet[`.psds-button--iconOnly`]),
          css(stylesheet[`.psds-button--iconOnly.psds-button--size-${size}`])
        ),

      iconAlign === vars.iconAligns.right &&
        css(stylesheet[`.psds-button--iconAlign-${iconAlign}`])
    )
  },
  loading: (themeName, { appearance }) =>
    css(
      stylesheet[`.psds-button__loading`]({ spin }),
      stylesheet[`.psds-button__loading--appearance-${appearance}`],
      stylesheet[
        `.psds-button__loading--appearance-${appearance}.psds-button__loading--theme-${themeName}`
      ]
    ),
  icon: ({ iconAlign, iconOnly, isLoadingWithNoText }) =>
    css(
      stylesheet['.psds-button__icon'],
      stylesheet[`.psds-button__icon--iconAlign-${iconAlign}`],
      (iconOnly || isLoadingWithNoText) &&
        stylesheet['.psds-button__icon--iconOnly']
    ),
  text: _ => css(stylesheet[`.psds-button__text`])
}

const mapIconSize = props => {
  const btnToIconSizes = {
    [vars.sizes.xSmall]: iconSizes.small,
    [vars.sizes.small]: iconSizes.medium,
    [vars.sizes.medium]: iconSizes.medium,
    [vars.sizes.large]: iconSizes.medium
  }

  return btnToIconSizes[props.size]
    ? btnToIconSizes[props.size]
    : iconSizes.medium
}

/* eslint-disable react/prop-types */
const renderIcon = (themeName, props) => {
  const { loading, icon } = props

  if (loading)
    return (
      <div {...styles.icon(props)}>
        <Icon size={mapIconSize(props)}>
          <span {...styles.loading(themeName, props)} />
        </Icon>
      </div>
    )

  if (icon)
    return (
      <div {...styles.icon(props)}>
        {React.cloneElement(props.icon, { size: mapIconSize(props) })}
      </div>
    )

  return null
}
/* eslint-enable react/prop-types */

const Button = React.forwardRef((props, forwardedRef) => {
  const themeName = useTheme()

  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const nonLoadingWidth = React.useMemo(() => {
    if (props.loading && ref && ref.current) {
      return ref.current.offsetWidth
    }
  }, [props.loading, ref])

  const TagName = props.href ? 'a' : 'button'
  const isLoadingWithNoText = !!nonLoadingWidth

  const allProps = {
    ...props,
    isLoadingWithNoText,
    iconOnly: React.Children.count(props.children) <= 0
  }

  const isDisabledLink = allProps.disabled && allProps.href
  const filteredProps = filterReactProps(props, { tagName: TagName })
  delete filteredProps.icon
  if (isDisabledLink) delete filteredProps.onClick

  const style = props.style || {}
  if (isLoadingWithNoText) style.width = nonLoadingWidth

  return (
    <TagName
      {...styles.button(themeName, allProps)}
      {...filteredProps}
      disabled={props.disabled || props.loading}
      ref={ref}
      style={style}
    >
      {renderIcon(themeName, allProps)}

      {!isLoadingWithNoText && (
        <span {...styles.text(themeName, allProps)}>{allProps.children}</span>
      )}
    </TagName>
  )
})

Button.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  children: PropTypes.any,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.element,
  iconAlign: PropTypes.oneOf(Object.keys(vars.iconAligns)),
  loading: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(vars.sizes)),
  style: PropTypes.object
}

Button.defaultProps = {
  appearance: vars.appearances.primary,
  disabled: false,
  iconAlign: vars.iconAligns.left,
  loading: false,
  size: vars.sizes.medium
}

Button.appearances = vars.appearances
Button.iconAligns = vars.iconAligns
Button.sizes = vars.sizes

export const appearances = vars.appearances
export const iconAligns = vars.iconAligns
export const sizes = vars.sizes

export default Button
