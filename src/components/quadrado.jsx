export default function Quadrado({ value, onClick, clicado }) {

    return (
        <button 
            className={`quadrado ${clicado ? 'clicado' : ''}`}
            onClick={onClick}
        >
            {value}
        </button>  
    )
}