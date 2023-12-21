import React from "react"

const Form = props => {
    return(
        <div className="formDiv">
            <div id="edycja">
            <div><label htmlFor="pesel">Podaj nr. pesel: </label>
            <input type="tel" id="pesel" name="pesel" maxlength="11"
                onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})} ></input></div>

            <div><label htmlFor="imie">Podaj Imie: </label>
            <input type="text" id="imie" name="imie"
                onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})} ></input></div>

            <div><label htmlFor="nazwisko">Podaj Nazwisko: </label>
            <input type="text" id="nazwisko" name="nazwisko"
                onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})} ></input></div>

            <div><label htmlFor="adres">Podaj adres zamieszkania: </label>
            <input type="text" id="adres" name="adres"
                onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})} ></input></div>

            <div><label htmlFor="tel">Podaj nr. telefonu: </label>
            <input type="tel" id="nrTel" name="nrTel" maxlength="9"
                onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})} ></input></div>

            <div><label htmlFor="email">Podaj adres email: </label>
            <input type="email" id="email" name="email"
                onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})} ></input></div>

            <div><label htmlFor="plec">Podaj płeć: </label>
            <select id="plec" name="plec" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}>
                <option>Kobieta</option>
                <option>Mężczyzna</option>
            </select>
            </div>
            </div>
            <button onClick={()=>props.onSave()}>OK</button>
        </div>
    )
}

export default Form;