import React, { useState } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const teamMembers = [
  {firstName: 'Milton', lastName: 'Ochoa', role: 'student developer', hobby: 'coding' },
  {firstName: 'Casey', lastName: 'Harding', role: 'Lead Developer', hobby: 'letting his team members take a year paid vacation to a beach somewhere on the Mediterranean.'}
]
//Why is this function name Capitalized??
function SimpleForm() {
  const [ formValues, setFormValues ] = useState( {firstName: '', lastName: '', role: '', hobby: '' } );
  const [ people, setPeople ] = useState(teamMembers);

  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues( { ...formValues, [name]:value } );
  }

  const submit = (evt) => {
    evt.preventDefault();
    setPeople(
      people.concat({
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        role: formValues.role,
        hobby: formValues.hobby
      }))
    setFormValues( {firstName: '', lastName: '', role: '', hobby: '' } );
  }

  return (
    <div className='container'>
      <h1>Welcome to our Team Members Page!</h1>
      <h3>These are our current members.</h3>
      {people.map( (person, idx) => {
        return <div key={idx}>{person.firstName} {person.lastName} is a {person.role} who likes {person.hobby}</div>
      })}
      <form onSubmit={submit}>
        <input
        type='text'
        onChange={change}
        name='firstName'
        value={formValues.firstName}
        />
        <input
        type='text'
        onChange={change}
        name='lastName'
        value={formValues.lastName}
        />
        <input
        type='text'
        onChange={change}
        name='role'
        value={formValues.role}
        />
        <input
        type='text'
        onChange={change}
        name='hobby'
        value={formValues.hobby}
        />
        <input type='submit' value='Enter Data' />
      </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleForm />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
