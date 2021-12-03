import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'

import './styles.css'

const Home = () => {
    return(
        <>
            <Menu />
            <div className="home">
                <h1>Este é o projeto guiado proposto pela professora Simara Conceição.</h1>
                <p>A primeira página é uma Home</p>
                <p>A segunda é a atividade 'Minha Listinha'</p>
                <p>A terceira página redireciona para a página da atividade 'M de Maravilhosa'</p>
                </div>
            <Footer />
        </>
    )
}

export default Home