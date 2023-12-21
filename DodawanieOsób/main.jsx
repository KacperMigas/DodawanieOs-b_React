import React, {Component} from 'react'
import "./main.css"
import Form from './form';
import Table from './table';
class Main extends Component{
    constructor(){
        super();
        this.state = {
            Osoby: [
                {pesel: "000000000", imie:"Filip", nazwisko: "Nowak", adres: "Warszawa", nrTel: "000 000 000", email: "filip@gmail.com", plec:"Mężczyzna"}
            ],
            dodawaneOs: {  
                pesel: "",
                imie: "",
                nazwisko: "",
                adres: "",
                nrTel: "",
                email: "",
                plec: ""
            }
        };
    }

    dodanieOs(val){
        this.setState(prevState => {
            return{
                dodawaneOs: Object.assign(prevState.dodawaneOs, val)
            }
        })
    }
    zapisanieOs(){
        this.setState(prevState => ({
            Osoby: [...prevState.Osoby, prevState.dodawaneOs],
            dodawaneOs: {  
                pesel: "",
                imie: "",
                nazwisko: "",
                adres: "",
                nrTel: "",
                email: "",
                plec: ""
            }
        }));
    }
    render(){
        const Osoby = this.state.Osoby.map(element => {
            return <Table pesel={element.pesel} imie={element.imie} nazwisko={element.nazwisko} adres={element.adres} 
                nrTel={element.nrTel} email={element.email} plec={element.plec}/>
        })
        return(
            <div>
            <table>
                <tr>
                    <th>Pesel</th>
                    <th>Imie</th>
                    <th>Nazwisko</th>
                    <th>Adres</th>
                    <th>Nr tel</th>
                    <th>Email</th>
                    <th>Płeć</th>
                </tr>
                {Osoby}
            </table>
            <Form
                onInputChange = {
                    val => this.dodanieOs(val)
                }
                onSave ={() => this.zapisanieOs()}
            />
            </div>
            
        );
    }
}

export default Main;