// CourseCard.jsx
import React from 'react';
import styles from './CourseCard.module.css';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    return (
        <div className={styles.courseCard}>
            <h3 className={styles.title}>{course.title}</h3>
            <img src={course.image} alt={course.title} className={styles.courseImage} />
            <p className={styles.description}>{course.description}</p>
            <p className={`${styles.status} ${course.status === 'Đang mở' ? styles.open : styles.comingSoon}`}>
                {course.status}
            </p>
            <p>
            <Link to={`/courses/${course.id}`} className={styles.courseLink}>Xem chi tiết</Link>
            </p>
        </div>
    );
};

export default CourseCard;
