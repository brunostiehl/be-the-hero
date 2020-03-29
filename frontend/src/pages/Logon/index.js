import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    // Cria um estado para armazenar o campo ID
    const [id, setId] = useState('');

    const history = useHistory();

    // Função para validar se a ONG existe
    async function handleLogin(e) {
        // Para desabilitar o envio do form e o refresh da página
        e.preventDefault();

        try {
            // Faz um POST para a rota de login, utilizando o módulo axios
            const response = await api.post('/sessions', { id });

            // Salva na sessão do navegador
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            // Direciona o usuário para a tela que contém a listagem dos casos
            history.push('/profile');
        } catch (error) {
           alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input type="text" 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />

                    <button type="submit" className="button">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}