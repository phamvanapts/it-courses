import React from 'react';
import styles from './LessonList.module.css';

const LessonList = ({ chapters, onSelectLesson }) => {
    return (
        <div className={styles.lessonList}>
            {chapters.map((chapter, chapterIndex) => (
                <div key={chapterIndex} className={styles.chapter}>
                    <h2>{chapter.title}</h2>
                    <ul>
                        {chapter.lessons.map((lesson, lessonIndex) => (
                            <li
                                key={lessonIndex}
                                className={styles.lesson}
                                onClick={() => onSelectLesson(lesson)}
                            >
                                {lesson.title}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default LessonList;
