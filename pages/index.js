import { useState } from 'react';

function Home() {
    const [name, setName] = useState(''); // Estado para armazenar o nome digitado
    const [message, setMessage] = useState(''); // Estado para armazenar a mensagem a ser exibida

    const handleInputChange = (event) => {
        setName(event.target.value); // Atualiza o estado com o valor digitado
    };

    const handleButtonClick = () => {
        if (name.toLowerCase() === 'rafaela') {
            setMessage('Te amo');
        } else {
            setMessage(`Olá, ${name}`);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Digite um nome</h1>
            <input 
                type="text" 
                placeholder="Digite seu nome" 
                value={name} 
                onChange={handleInputChange} 
                style={{ padding: '10px', marginRight: '10px' }}
            />
            <button onClick={handleButtonClick} style={{ padding: '10px' }}>
                Enviar
            </button>
            <h2>{message}</h2>
        </div>
    );
}

export default Home;
