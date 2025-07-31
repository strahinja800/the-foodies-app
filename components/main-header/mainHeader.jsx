import Link from 'next/link'
import Image from 'next/image'

import classes from './mainHeader.module.css'
import LogoImage from '@/assets/logo.png'
import MainHeaderBg from './mainHeaderBackground'

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
              <Link href='/meals'>Browse Meals</Link>
            </li>
            <li>
              <Link href='/community'>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
