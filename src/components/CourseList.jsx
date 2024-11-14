import React, { useState, useEffect } from 'react';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    // Load dữ liệu từ JSON
    useEffect(() => {
        fetch('/data/courses.json')
            .then((response) => response.json())
            .then((data) => setCourses(data))
            .catch((error) => console.error("Lỗi khi tải dữ liệu: ", error));
    }, []);

    return (
        <div style={listStyle}>
            {courses.map((course) => (
                <div key={course.id} style={courseStyle}>
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <p><strong>Thời lượng:</strong> {course.duration}</p>
                </div>
            ))}
        </div>
    );
};

const listStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

const courseStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    margin: '10px 0',
    width: '80%',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
};

export default CourseList;
