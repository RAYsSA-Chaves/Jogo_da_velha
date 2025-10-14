// indicar vez
// mudar cor pra x e bolinha
// exibir quem ganhou e bloquear tudo
// exibir confetes
// resertar (botao jogar de novo)

import { useState } from "react";
import Quadrado from "./quadrado";

export default function Tabuleiro() {
    const [quadrados, setQuadrados] = useState(Array(9).fill(""));
    const [xProximo, setXProximo] = useState(true);
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
    let xPontos = 0;
    let oPontos = 0;

    function verificarVencedor() {
        for (let i = 0; i < vitoria[i].length; i++) {
            for (let j = 0; j <= vitoria[i].length; j++) {
                const posicao = vitoria[i][j]; 
                if (quadrados[posicao] === "X") {
                    xPontos += 1; 
                }
                else if (quadrados[posicao] === "O") {
                    oPontos += 1; 
                }
                if (xPontos === 3) {
                    alert("X venceu");
                    return;
                }
                else if (oPontos === 3) {
                    alert("O venceu");
                    return;
                }
            }
            xPontos = 0;
            oPontos = 0;
        }
    }

    function handleClick(i) {
        if (clicado[i]) return;

        const next = quadrados.slice();
        if (xProximo) {
            next[i] = "X";
            clicado[i] = true;
        }
        else {
            next[i] = "O";
            clicado[i] = true;
        }

        verificarVencedor();

        setQuadrados(next);
        setXProximo(!xProximo);
    }

    return (
            <main className="containerTabuleiro">
                <div className="fileira">
                    <Quadrado value={quadrados[0]} onClick = {() => handleClick(0)} clicado={clicado[0]} />
                    <Quadrado value={quadrados[1]} onClick = {() => handleClick(1)} clicado={clicado[1]} />
                    <Quadrado value={quadrados[2]} onClick = {() => handleClick(2)} clicado={clicado[2]} />
                </div>
                <div className="fileira">
                    <Quadrado value={quadrados[3]} onClick = {() => handleClick(3)} clicado={clicado[3]} />
                    <Quadrado value={quadrados[4]} onClick = {() => handleClick(4)} clicado={clicado[4]} />
                    <Quadrado value={quadrados[5]} onClick = {() => handleClick(5)} clicado={clicado[5]} />
                </div>
                <div className="fileira">
                    <Quadrado value={quadrados[6]} onClick = {() => handleClick(6)} clicado={clicado[6]} />
                    <Quadrado value={quadrados[7]} onClick = {() => handleClick(7)} clicado={clicado[7]} />
                    <Quadrado value={quadrados[8]} onClick = {() => handleClick(8)} clicado={clicado[8]} />
                </div>
            </main>
    )
}