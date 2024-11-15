import React from 'react';
import styles from './LessonDetail.module.css';

const LessonDetail = ({ lesson }) => {
    if (!lesson) {
        return <div className={styles.emptyState}>Hãy chọn một bài học để xem nội dung</div>;
    }

    return (
        <div className={styles.lessonDetail}>
            <h2>{lesson.title}</h2>
            <div className={styles.videoContainer}>
                <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${lesson.videoId}`}
                    title={lesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={styles.docContainer}>
                <iframe
                    src={`${lesson.description}?embedded=true`}
                    width="100%"
                    height="600"
                    title="Google Docs"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>
        </div>
    );
};

export default LessonDetail;
