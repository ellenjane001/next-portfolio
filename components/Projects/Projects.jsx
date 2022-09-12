import { Space } from 'antd'
import React from 'react'
import Styles from '../../styles/Projects.module.scss'
const Projects = () => {
    const projects = [
        {
            project_name: 'Business Card - React',
            link: 'https://react-businesscard.pages.dev',
            description: 'Static business card created using react project from Scrimba course...'
        },
        {
            project_name: 'myWallet - Dashboard',
            link: 'https://ellenjane001.github.io/frontend',
            description: 'Static myWallet app sample dashboard...'
        },
        {
            project_name: 'Ecommerce - Dashboard',
            link: 'https://ellenjane001.github.io/csspractice',
            description: 'Static ecommerce dashboard...'
        },
        {
            project_name: 'Static Portfolio - HTML with SASS',
            link: 'https://ellenjane.cf',
            description: 'Static landing portfolio...'
        },

    ].map((proj, index) => {
        return <div className={Styles.div} key={index}>
            <span>{proj.link}</span>
            <a target="_blank" rel="noreferrer" href={proj.link}>{proj.project_name}</a>
            <p>{proj.description}</p>
        </div>
    })
    return (
        <Space direction='vertical' size={10}>
            {projects}
        </Space>
    )
}

export default Projects