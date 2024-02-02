import './JournalForm.css'
import {useState} from "react";
import Button from "../Button/Button.jsx";

const JournalForm = () => {
    const [inputData, setInputData] = useState('')

    const inputChange = (e) => {
        setInputData(e.currentTarget.value)
        console.log(inputData)
    }

    const addJournalItem=(e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        console.log(formProps)
    }

    return (
            <form className={'journal_form'} onSubmit={addJournalItem}>
                <input type={'text'} name={'title'}/>
                <input type={'date'} name={'date'}/>
                <input  name={'tag'} value={inputData} onChange={inputChange}/>
                <textarea name={'post'}></textarea>
                <Button  text={'Сохранить'} onClick={()=>{
                    console.log('Click')}}/>
            </form>
    );
};

export default JournalForm;