import { Space } from 'antd'
import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/Skills.module.scss'
const Skills = () => {
    const imgLinks = [
        {
            link: "https://img.icons8.com/color/144/000000/html-5--v1.png", label: 'HTML',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/css3.png",
            label: 'CSS',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/wordpress.png",
            label: 'Wordpress',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/javascript--v1.png",
            label: 'Javascript',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/nodejs.png",
            label: 'NodeJS',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/adobe-photoshop--v1.png",
            label: 'Adobe Photoshop',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/autodesk-autocad.png",
            label: 'AutoCAD',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/figma--v1.png",
            label: 'Figma',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/microsoft-excel-2019--v1.png",
            label: 'MS Excel',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/my-sql.png",
            label: 'MySQL',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/woocommerce.png",
            label: 'Woocommerce',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/bitbucket.png",
            label: 'Bitbucket',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/c-sharp-logo.png",
            label: 'Csharp',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/git.png",
            label: 'Git',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/nextjs.png",
            label: 'NextJS',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/python--v1.png",
            label: 'Python',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/sass.png",
            label: 'Sass',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/color/144/000000/shopify.png",
            label: 'Shopify',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/dusk/128/000000/php-logo.png",
            label: 'PHP',
            source:"icons8.com",
        },
        {
            link: "https://img.icons8.com/fluency/144/000000/docker.png",
            label: 'Docker',
            source:"icons8.com",
        },
        {
            link: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
            label: 'Ant Design',
            source:"gw.alipayobjects.com",
        },
    ].map((img, i) => {
        return <span key={i} className={Styles.span}>
            <div className={Styles.div}>
                <Image
                    alt="The guitarist in the concert."
                    src={img.link}
                    width={100}
                    height={100}
                    layout="responsive"
                />
            </div>
            <div>
                <label>{img.label}</label>
                <span>{img.source}</span>
            </div>
        </span>
    })
    return (
        <div className={Styles.skills__wrapper}>
            <Space size={10} wrap>
                {imgLinks}
            </Space>
        </div>
    )
}
export default Skills