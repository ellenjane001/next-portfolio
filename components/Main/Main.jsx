import { CalendarFilled, HomeFilled, ToolFilled } from '@ant-design/icons';
import { Tabs } from 'antd';
import Styles from '../../styles/Main.module.scss';
import Home from '../Home/Home';
import JobExp from '../JobExp/JobExp';
import Skills from '../Skills/Skills';
const { TabPane } = Tabs;
const Main = () => {
  const onChange = (key) => {
    console.log(key);
}
const items = [
    { label: 
    <span>
        <HomeFilled />
        Home
    </span>, 
    key: '1', 
    children:<Home /> },
    { label:  
    <span>
        <ToolFilled />
        Skills
    </span>,
    key: '2',
    children:  <Skills /> },
    { label:  
    <span>
        <CalendarFilled />
        Job Experiences
    </span>,
    key: '3',
    children: <JobExp /> },
  ];
return (
    <nav className={Styles.navigation}>
        <Tabs items={items} onChange={onChange} />
    </nav>
)
}

export default Main