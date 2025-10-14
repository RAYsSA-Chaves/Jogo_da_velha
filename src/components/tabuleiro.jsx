// exibir confetes

import { useState } from "react";
import Quadrado from "./quadrado";

export default function Tabuleiro({ vez, setVez, vencedor, setVencedor, setVelha }) {
    const [quadrados, setQuadrados] = useState(Array(9).fill(""));
    const [clicado, setClicado] = useState(Array(9).fill(false));
    const vitoria = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8]
    ];

    function verificarVencedor(tabuleiro) {
        let xPontos = 0;
        let oPontos = 0;

        for (let i = 0; i < vitoria.length; i++) {
            for (let j = 0; j < vitoria[i].length; j++) {
                const posicao = vitoria[i][j]; 

                if (tabuleiro[posicao] === "X") {
                    xPontos += 1; 
                }
                else if (tabuleiro[posicao] === "O") {
                    oPontos += 1; 
                }

                if (xPontos === 3) {
                    setVencedor("X");
                    return;
                }
                else if (oPontos === 3) {
                    setVencedor("O");
                    return;
                }

            }
            xPontos = 0;
            oPontos = 0;
        }
    }

    function handleClick(i) {
        if (clicado[i] || vencedor !== "") return;

        const next = quadrados.slice();
        const novosClicados = clicado.slice();

        if (vez === "X") {
            next[i] = "X";
            setVez("O");
        }
        else {
            next[i] = "O";
            setVez("X");
        }

        novosClicados[i] = true;

        verificarVencedor(next);

        setQuadrados(next);
        setClicado(novosClicados);

        if (!vencedor && novosClicados.every(function(c) {
            return c === true;
        })) {
            setVelha(true);
        }
    }

    return (
        <main className="containerTabuleiro">
            <div className="fileira">
                <Quadrado value={quadrados[0]} onClick = {() => handleClick(0)} clicado={clicado[0]} vencedor={vencedor} />
                <Quadrado value={quadrados[1]} onClick = {() => handleClick(1)} clicado={clicado[1]} vencedor={vencedor} />
                <Quadrado value={quadrados[2]} onClick = {() => handleClick(2)} clicado={clicado[2]} vencedor={vencedor} />
            </div>
            <div className="fileira">
                <Quadrado value={quadrados[3]} onClick = {() => handleClick(3)} clicado={clicado[3]} vencedor={vencedor} />
                <Quadrado value={quadrados[4]} onClick = {() => handleClick(4)} clicado={clicado[4]} vencedor={vencedor} />
                <Quadrado value={quadrados[5]} onClick = {() => handleClick(5)} clicado={clicado[5]} vencedor={vencedor} />
            </div>
            <div className="fileira">
                <Quadrado value={quadrados[6]} onClick = {() => handleClick(6)} clicado={clicado[6]} vencedor={vencedor} />
                <Quadrado value={quadrados[7]} onClick = {() => handleClick(7)} clicado={clicado[7]} vencedor={vencedor} />
                <Quadrado value={quadrados[8]} onClick = {() => handleClick(8)} clicado={clicado[8]} vencedor={vencedor} />
            </div>
        </main>
    )
}
