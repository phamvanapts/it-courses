// import React from 'react';
import Header from '../components/headerComponent/Header';
import CourseList from '../components/courses/CourseList';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
            <Header />
            {/* <div className={styles.header}>a
              <hr></hr>
            </div> */}
            <CourseList />

        </div>
  );
};

export default Home;
