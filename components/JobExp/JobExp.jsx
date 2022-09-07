import { Space, Timeline } from 'antd'
import React from 'react'
import Styles from '../../styles/JobExp.module.scss'
const JobExp = () => {
    const jobList = [
        {
            color: '#371B58',
            title: 'Junior Web Developer',
            company: 'IPP',
            duration: 'November 2021 - Latest'
        },
        {
            color: "#4C3575",
            title: 'Customer Service Associate',
            company: 'Errand Services',
            duration: 'May 2021 - October 2021'
        },
        {
            color: '#5B4B8A',
            title: 'Virtual Reality System Administrator',
            company: 'Vision Virtual Gaming Arena',
            duration: 'December 2020 - April 2021'
        },
        {
            color: '#7858A6',
            title: 'Assistant Game Master',
            company: 'Freeing Palawan',
            duration: 'April 2019 - November 2020'
        },
        {
            color: '#A66CFF',
            title: 'Cashier / Bookkeeper',
            company: 'Face and Body Wellness Salon and Spa',
            duration: 'December 2018 - March 2019'
        },
    ].map((job, i) => {
        return (<Timeline.Item color={job.color} key={i}>
            <h4>{job.title}</h4>
            <i>{job.company}</i>
            <p>{job.duration}</p>
        </Timeline.Item>)
    })

    return (
        <div className={Styles.main}>
            <Space direction='vertical' size={5}>
                <span className={Styles.link}> https://www.ellenjane.com <span className={Styles.span}> › experiences</span> </span>
                <Space direction='vertical' size={20}>
                    <h1>Job Experiences</h1>
                    <Timeline>
                        {jobList}
                    </Timeline>
                </Space>
            </Space>
        </div>
    )
}

export default JobExp