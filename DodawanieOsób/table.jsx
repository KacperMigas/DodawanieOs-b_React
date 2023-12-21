import React from "react";
import PropTypes from "prop-types";


const Table = props => (
    <tr>
    <td><text className="text">{props.pesel}</text></td>
    <td><text className="text">{props.imie}</text></td>
    <td><text className="text">{props.nazwisko}</text></td>
    <td><text className="text">{props.adres}</text></td>
    <td><text className="text">{props.nrTel}</text></td>
    <td><text className="text">{props.email}</text></td>
    <td><text className="text">{props.plec}</text></td>
    </tr>
);

Table.propTypes = {
    pesel: PropTypes.string,
    imie: PropTypes.string,
    nazwisko: PropTypes.string,
    adres: PropTypes.string,
    nrTel: PropTypes.string,
    email: PropTypes.string,
    plec: PropTypes.string,

    
};

export default Table;