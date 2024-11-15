// CourseList.jsx
import { useEffect, useState } from 'react';
import styles from './CourseList.module.css';
import CourseCard from './CourseCard';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    // Sử dụng useEffect để lấy dữ liệu từ JSON khi component được mount
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('./public/data/courses.json');
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className={styles.courseList}>
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

export default CourseList;
