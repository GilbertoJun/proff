import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import PageHeader from '../../components/PageHeader';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form action="" id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="subject"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="data:image/jpeg;base64,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" alt="Murilo Benito"/>
                        <div>
                            <strong>Murilo Benito</strong>    
                            <span>Quimica</span>
                        </div>    
                    </header>
                    <p>A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!
                        <br/>
                        <br/>No meu xinélo da humildade eu gostaria muito de ver o Neymar e o Ganso. Por que eu acho que.... 11 entre 10 brasileiros gostariam. Você veja, eu já vi, parei de ver. Voltei a ver, e acho que o Neymar e o Ganso têm essa capacidade de fazer a gente olhar.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 200,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                        
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;