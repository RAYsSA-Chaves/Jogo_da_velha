import { useState } from 'react';
import './App.css'
import Tabuleiro from './components/tabuleiro'

function App() {
    const [vez, setVez] = useState("X");
    const [vencedor, setVencedor] = useState("");
    const [velha, setVelha] = useState(false);

    return (
        <>
            {velha ? (
                <p>🤦‍♀️ Deu velha! 🤦‍♀️</p>
            ) : vencedor === "" ? (
                <p>{vez} é a sua vez!</p>
            ) : (
                <p>🏆 {vencedor} venceu 🏆</p>
            )}
            <Tabuleiro 
                vez = {vez}
                setVez = {setVez}
                vencedor = {vencedor}
                setVencedor = {setVencedor}
                setVelha = {setVelha}
            />
        </>
    )
}

export default App