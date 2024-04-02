import characters from '../Authorization/Characters.svg';
import Form from '../../Components/Form/Form';
import './Authorization.css';

function Authorization(){
    return(
      <main className='AuthorizationMain'>
      <div className="Authorization-main">
        <h1 className='heading-main'>Для оформления подписки
          на тариф, необходимо авторизоваться.</h1>
        <img src={characters} className="characters" alt="characters" />
      
      </div>
      
      <Form />
      </main>
      
    )
}

export default Authorization;