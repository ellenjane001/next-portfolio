import { Avatar, Input } from 'antd';
import Image from 'next/image';
import React from 'react';

import Styles from '../../styles/Header.module.scss';
const { Search } = Input;

const Header = () => {
  return (
    <header className={Styles.header}>
    <div className={Styles.header__logo}>
        <Image src={'/logo.svg'} width={100} height={50} alt="logo" />
    </div>
    <div className={Styles.wrapper}>
        <div>
            <Search
                value='Ellen Jane Cababaro'
                style={{
                    width: 500,
                }}
            />
        </div>
        <div>
            <Avatar src="/avatar.png" />
        </div>
    </div>
</header>
  )
}

export default Header