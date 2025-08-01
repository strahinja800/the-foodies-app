// 'use client'

import Link from 'next/link'
import Image from 'next/image'
import classes from './mainHeader.module.css'
import LogoImage from '@/assets/logo.png'
import MainHeaderBg from './mainHeaderBackground'
import NavLink from './nav-link'

export default function MainHeader() {

  return (
    <>
      <MainHeaderBg />
      <header className={classes.header}>
        <Link
          href='/'
          className={classes.logo}
        >
          <Image
            src={LogoImage}
            alt='A plate with foor on it'
            priority
          />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
