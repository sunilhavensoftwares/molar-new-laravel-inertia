import { Link } from '@inertiajs/react'
import React from 'react'
import SidebarFunctions from './SidebarFunctions'
export const SidebarLink = ({ href, title, faClass = '' }) => {
  return (
    <Link className={SidebarFunctions.getMenuClass(href, 'link')} href={href}>
      {!faClass ?
        <span className="menu-bullet">
          <span className="bullet bullet-dot"></span>
        </span>
        :
        <span className="menu-icon">
          <i className={faClass}></i>
        </span>
      }

      <span className="menu-title">{title}</span>
    </Link>
  )
}
