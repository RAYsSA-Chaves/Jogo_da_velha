export default function Quadrado({ value, onClick, clicado, vencedor }) {

    return (
        <button 
            className={`quadrado ${clicado ? 'disabled' : vencedor ? 'disabled' : ''}`}
            onClick={onClick}
        >
            {value}
        </button>  
    )
}