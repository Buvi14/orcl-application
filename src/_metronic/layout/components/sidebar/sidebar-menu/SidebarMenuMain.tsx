/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { KTSVG } from '../../../../helpers'
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub'
import { SidebarMenuItem } from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/roles'
        icon='/media/icons/duotune/art/art002.svg'
        title='Roles'
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/admin'
        icon='/media/icons/duotune/art/art002.svg'
        title='Administrations'
        fontIcon='bi-app-indicator'
      />
    </>
  )
}

export { SidebarMenuMain }
