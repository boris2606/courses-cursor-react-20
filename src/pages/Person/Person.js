import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Person.module.scss'

const Person = (props) => {
    let {person} = useParams()
    console.log(props);
    return (
        <div className={styles.wrapper_person}>
            {props.contacts.map((currentPerson,index) => {
            
                if (currentPerson.name === person){
                    return <div key={index} className={styles.person_content}>
                                <div className={styles.person_info}>
                                    <img className={styles.photo_img} src={currentPerson.photo} alt='Photos'></img>
                                    <p className={styles.person_inform_contacts}> {currentPerson.name}<br/> {currentPerson.secondName} <br/>{currentPerson.lastName}<br/> Посада: {currentPerson.position}<br/> Телефон: {currentPerson.phone}</p>
                                </div>
                                <div className={styles.message_content}>
                                    {props.message.map((elem,index) => {
                                        return <div key={index} className={styles.message_text}>
                                            <p className={styles.message}>{person}: {elem.message}</p>
                                            <p className={styles.message_me}>{elem.unsver} :Я</p>
                                        </div>
                                    })}
                                </div>
                            </div>
                }
            })}
        </div>
    );
};

export default Person;