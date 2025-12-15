import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './Colaborador.css';

const Colaborador = ({ id, nome, cargo, imagem, favorito, corDestaques, aoDeletar, aoFavoritar }) => {
    const favoritar = () => {
        aoFavoritar(id);
    };
    
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
                        ? <AiFillHeart size={30} onClick={favoritar} /> 
                        : <AiOutlineHeart size={30} onClick={favoritar} />}
                </div>
            </div>
        </div>
    );
};

export default Colaborador;
