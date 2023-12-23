
import { useState } from 'react';
import './App.css';

function App() {
  const [firstFio, setFirstFio] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const ageAsNumber = Number(age)

  return (
    <div className='authorization-wrapper'>
      <form className='authorization-form'>
        <h2>Регистрация</h2>
        <div className='entry-field'>
          <label>ФИО: <br/>
            <input type='text' 
                    name='fio' 
                    value={firstFio}
                    onChange={(e) => setFirstFio(e.target.value)}>
            </input>
          </label>
        </div>
        <div className='entry-field'>
          <label>Возраст: <br/>
            <input type='number' 
                    name='fio' 
                    value={age}
                    onChange={e => setAge(e.target.value)}>
            </input>
          </label>
        </div>
        <div className='entry-field'>
          <label>Электронный адрес: <br/>
            <input type='email' 
                    name='fio' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}>
            </input>
          </label>
        </div>
        <div className='entry-field'>
          <label>Телефон: <br/>
            <input type='number' 
                    name='fio' 
                    value={tel}
                    onChange={e => setTel(e.target.value)}>
            </input>
          </label>
        </div>
        <p>Вы уже зарегистрированы? <a href='#'>Войти</a></p>
      </form>
      <div className='authorization-content'>
        <ul>
          <li><span><i>Ваше ФИО:</i></span>{firstFio !== '' && <span>{firstFio}</span>}</li>
          <li><span><i>Ваш возраст:</i></span>{ageAsNumber > 0 && <span>{ageAsNumber}</span>}</li>
          <li><span><i>Ваш email:</i></span>{email !== '' && <span>{email}</span>}</li>
          <li><span><i>Ваше тел. номер:</i></span>{tel.toString().length > 0 && <span>{tel}</span>}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
