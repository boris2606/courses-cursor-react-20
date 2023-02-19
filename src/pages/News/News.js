import React from 'react';
import styles from "./../News/News.module.scss"

const News = (props) => {
    return (
        <div className={styles.wrapper_news}>
            {props.posts.map((elem , index)=> {
                if (elem){
                    return <div key={index} className={styles.wrapper_post}>
                                <div className={styles.wrapper_info_autor}>
                                    <p className={styles.post_tit}>{elem.title}</p>
                                    <p>Автор: {elem.author}</p>
                                    <p>{elem.date}</p>
                                </div>
                                <p className={styles.post_discr}>{elem.descr}</p>
                            </div>
                }
            })}
        </div>
    );
};

export default News;