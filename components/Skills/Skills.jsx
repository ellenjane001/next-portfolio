import { Space } from 'antd'
import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/Skills.module.scss'
const Skills = () => {
    const imgLinks = [
        {
            link: "https://img.icons8.com/color/144/000000/html-5--v1.png", label: 'HTML',
        },
        {
            link: "https://img.icons8.com/color/144/000000/css3.png",
            label: 'CSS',
        },
        {
            link: "https://img.icons8.com/color/144/000000/wordpress.png",
            label: 'Wordpress',
        },
        {
            link: "https://img.icons8.com/color/144/000000/javascript--v1.png",
            label: 'Javascript',
        },
        {
            link: "https://img.icons8.com/color/144/000000/nodejs.png",
            label: 'NodeJS',
        },
        {
            link: "https://img.icons8.com/color/144/000000/adobe-photoshop--v1.png",
            label: 'Adobe Photoshop',
        },
        {
            link: "https://img.icons8.com/color/144/000000/autodesk-autocad.png",
            label: 'AutoCAD',
        },
        {
            link: "https://img.icons8.com/color/144/000000/figma--v1.png",
            label: 'Figma',
        },
        {
            link: "https://img.icons8.com/color/144/000000/microsoft-excel-2019--v1.png",
            label: 'MS Excel',
        },
        {
            link: "https://img.icons8.com/color/144/000000/my-sql.png",
            label: 'MySQL',
        },
        {
            link: "https://img.icons8.com/color/144/000000/woocommerce.png",
            label: 'Woocommerce',
        },
        {
            link: "https://img.icons8.com/color/144/000000/bitbucket.png",
            label: 'Bitbucket',
        },
        {
            link: "https://img.icons8.com/color/144/000000/c-sharp-logo.png",
            label: 'Csharp',
        },
        {
            link: "https://img.icons8.com/color/144/000000/git.png",
            label: 'Git',
        },
        {
            link: "https://img.icons8.com/color/144/000000/nextjs.png",
            label: 'NextJS',
        },
        {
            link: "https://img.icons8.com/color/144/000000/python--v1.png",
            label: 'Python',
        },
        {
            link: "https://img.icons8.com/color/144/000000/sass.png",
            label: 'Sass',
        },
        {
            link: "https://img.icons8.com/color/144/000000/shopify.png",
            label: 'Shopify',
        },
        {
            link: "https://img.icons8.com/dusk/128/000000/php-logo.png",
            label: 'PHP',
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
                <span>icons8.com</span>
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