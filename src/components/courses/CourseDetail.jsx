import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LessonDetail from './detail/LessonDetail';
import Header from '../headerComponent/Header';
import styles from './CourseDetail.module.css';

const CourseDetail = () => {
    const { courseId } = useParams();
    const [courseDetail, setCourseDetail] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [expandedChapters, setExpandedChapters] = useState({});

    // Fetch course details when courseId changes
    useEffect(() => {
        const fetchCourseDetail = async () => {
            try {
                const response = await fetch(`/public/data/details/${courseId}.json`);
                const data = await response.json();
                setCourseDetail(data);

                // Set default lesson to the first lesson in the first chapter
                if (data && data.chapters && data.chapters[0] && data.chapters[0].lessons) {
                    setSelectedLesson(data.chapters[0].lessons[0]); // Select the first lesson by default
                }
            } catch (error) {
                console.error('Error fetching course detail:', error);
            }
        };

        fetchCourseDetail();
    }, [courseId]);

    const handleSelectLesson = (lesson) => {
        setSelectedLesson(lesson);
    };

    const toggleChapter = (chapterIndex) => {
        setExpandedChapters((prev) => ({
            ...prev,
            [chapterIndex]: !prev[chapterIndex],
        }));
    };

    if (!courseDetail) {
        return (
        <div>
            <Header/>
            Thông tin khoá học chưa cập nhật ... Hãy trở về 
            <a href='/'> trang chủ</a>
            </div>
        )
    }

    return (
        <>
        <Header />
        <div className={styles.courseDetail}>

            {/* Sidebar */}
            <div className={styles.sidebar}>
                <h2>{courseDetail.title}</h2>
                {courseDetail.chapters.map((chapter, chapterIndex) => (
                    <div key={chapterIndex} className={styles.chapter}>
                        <h3 onClick={() => toggleChapter(chapterIndex)} className={styles.chapterTitle}>
                            {chapter.title}
                            <span className={styles.toggleIcon}>
                                {expandedChapters[chapterIndex] ? '▲' : '▼'}
                            </span>
                        </h3>
                        {expandedChapters[chapterIndex] && (
                            <ul className={styles.lessonList}>
                                {chapter.lessons.map((lesson, lessonIndex) => (
                                    <li
                                        key={lessonIndex}
                                        className={styles.lesson}
                                        onClick={() => handleSelectLesson(lesson)}
                                    >
                                        {lesson.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            {/* Content - Lesson Detail */}
            <div className={styles.content}>
                {selectedLesson && <LessonDetail lesson={selectedLesson} />}
            </div>
        </div>
        </>
    );
};

export default CourseDetail;
