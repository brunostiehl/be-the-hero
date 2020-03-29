import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    // Resgata o ID e nome da ONG salvos no storage do navegador
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    // A função useEffect() serve para disparar alguma função em algum determinado momento do componente
    useEffect(() => {
        api.get('profile', {
            // Envia o ID da ONG no cabeçalho da requisição
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        });
    }, [ongId]);

    // Função para deletar caso
    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                // Envia o ID da ONG no cabeçalho da requisição
                headers: {
                    Authorization: ongId
                }
            });

            // Para remover item excluído do DOM
            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (error) {
            alert('Erro ao deletar caso, tente novamente.');
        }
    }

    // Função para logout do usuário
    function handleLogout() {
        // Limpa os dados salvos no storage do navegador
        localStorage.clear();

        // Direciona o usuário para rota raíz do site
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}