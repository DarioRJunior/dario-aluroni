import filtros from './filtros.json';
import Styles from './Filtros.module.scss';
import classNames from 'classnames';

type IOpcao = typeof filtros[0]

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {

    function selecionarFiltro(opcao: IOpcao) {
        if (filtro === opcao.id) return setFiltro(null);
        return setFiltro(opcao.id);
    }
    return (
        <div className={Styles.filtros}>
            {filtros.map((opcao) => (
                <button className={classNames({
                    [Styles.filtros__filtro]: true,
                    [Styles['filtros__filtro--ativo']]: filtro === opcao.id
                })}
                    key={opcao.id}
                    onClick={() => selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))
            }
        </div >
    )
}