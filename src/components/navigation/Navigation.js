import React from 'react'
import './Navigation.scss'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import CustomIcons from '../custom-icons/CustomIcons';

export default function Navigation() {
  return (
    <nav className='sg-navigation'>
        <ul>
            <NavItem to="/">
                <CustomIcons icon='main-feed' altText='Main Feed' />
            </NavItem>
            <NavItem to="/new-post">
                <CustomIcons icon='new-post' altText='New Post' />
            </NavItem>
        </ul>
    </nav>
  )
}

function NavItem({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return  (
        <li className={`sg-navigation__item ${isActive ? 'sg-navigation__item--active' : '' }`}>
            <Link to={to} {...props} >{children}</Link>
        </li>
    )

}
