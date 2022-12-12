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
      {/* <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title='Users'
        fontIcon='bi-app-indicator'
      /> */}
      <SidebarMenuItemWithSub
        to='/users'
        icon='/media/icons/duotune/communication/com006.svg'
        title='Users'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/dashboard' title='User Update' />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/settings'
        icon='/media/icons/duotune/communication/com006.svg'
        title='Settings'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/config' title='Configuration' />
      </SidebarMenuItemWithSub>
      <SidebarMenuItem
        to='/audit'
        icon='/media/icons/duotune/art/art002.svg'
        title='Audit Trial'
        fontIcon='bi-app-indicator'
      />
    </>
  )
}

export { SidebarMenuMain }
