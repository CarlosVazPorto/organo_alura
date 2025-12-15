import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './Colaborador.css';

const Colaborador = ({ id, nome, cargo, imagem, favorito, corDestaques, aoDeletar, aoFavoritar }) => {
    const favoritar = () => {
        aoFavoritar(id);
    };

    const propsfavorito = {
        size: 30,
        color: '#ff0000',
        onClick: favoritar
    }
    
    return (
        <div className='colaborador'>
            <AiFillCloseCircle
                className='deletar'
                size={25}
                onClick={() => aoDeletar(id)}
            />
            <div 
                className='cabecalho'
                style={ { backgroundColor: corDestaques } }
            >
                <img 
                    src={imagem} 
                    alt={nome} 
                />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favoritar'>
                    {favorito 
                        ? <AiFillHeart {...propsfavorito} /> 
                        : <AiOutlineHeart {...propsfavorito} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Colaborador;
