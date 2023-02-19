import React from 'react';
import styles from "./../Gallery/Gallery.module.scss"

const Gallery = (props) => {
    return (
        <div className={styles.wrapper_images}>
            {props.gallary.map((photo, index)=> {
                if(photo.flag){
                    return <div key={index} className={styles.image_box}>
                                <img src={photo.image} alt={photo.alt}/>
                            </div>
                }
            })}
        </div>
    );
};

export default Gallery;