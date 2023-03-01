import {React,useState} from 'react';
import { Link } from 'react-router-dom';
import styles from "./../Contacts/Contacts.module.scss"
import send from "../../img/send.png"

const Contacts = (props) => {
    const [inputValue,setInput] = useState('')
    return (
        <div className={styles.wrapper_contacts}>
            <input 
                className={styles.search_input}
                value={inputValue}
                onChange = {contact => setInput(contact.target.value)}
                placeholder='Пошук працівника'/>
            {props.contacts.map((person, index) => {
                for(let value of Object.values(person)){
                    if (value.toLowerCase().includes(inputValue.toLowerCase())){
                        return <div key={index} className={styles.contact_block}>
                                    <div className={styles.person_info}>
                                        <p className={styles.person_name}>{person.name} {person.secondName} {person.lastName}</p>
                                        <p className={styles.person_position}>{person.position}</p>
                                        <p className={styles.person_phone}>{person.phone}</p>
                                    </div>
                                    <Link className={styles.message_btn} to={'/contacts/'+ person.name}>
                                        <img src={send} alt='send'></img>
                                    </Link>
                                </div>
                    }
                }
            })}
        </div>
    );
};

export default Contacts;