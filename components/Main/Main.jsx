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
return (
    <nav className={Styles.navigation}>
        <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab={
                <span>
                    <HomeFilled />
                    Home
                </span>
            } key="1">
                <Home />
            </TabPane>
            <TabPane tab={
                <span>
                    <ToolFilled />
                    Skills
                </span>
            } key="2">
                <Skills />
            </TabPane>
            <TabPane tab={
                <span>
                    <CalendarFilled />
                    Job Experiences
                </span>
            } key="3">
                <JobExp />
            </TabPane>
        </Tabs>
    </nav>
)
}

export default Main