import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import Agua from '../images/gota.png';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Result = styled.div`

    
    width: 40%;
    @media(max-width: 768px){
        width: 100%;
        padding: 10px;
    }

    h1{
        text-align: center;
    }

    h2{
        font-size: 16px;
        font-weight: 100;
        width: 100%;
    }

    h3{
        font-weight: 700;
        text-align: center;

        span{
            color: #f0424e;
        }
    }

`;

const Painel = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;

    span{
        display: flex;
        align-items: center;
        font-size: 40px;
    }
`;

const Manutencao = styled.div`
    background-color: #fdf6e5;
    height: 290px;
    width: 300px;
    border-radius: 20px;
    border: 1px solid #ede7bb;

    span {
        font-size: 60px;
        font-weight: 900;
    }
`;

const ManutencaoDia = styled.div`
    height: 50%;
    width: 300px;
    border-bottom: 3px solid #ede7bb;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ManutencaoSemanal = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TabelaAtividade = styled.table`
    border-spacing: 0;

    td{
        border-bottom: 1px solid grey;
        padding: 20px;
        font-weight: 100;
    }

    & tbody  tr:nth-child(${props => props.objetivo}) td{
        font-weight: 900;
        color: #f0424e;
    }
    
`;

const TabelaIMC = styled.table`
    border-spacing: 0;

    td{
        border-bottom: 1px solid grey;
        padding: 20px;
        font-weight: 100;
    }

    & tbody tr:nth-child(${props => props.imc}) td{
        font-weight: 900;
        color: #f0424e;
    }
    
`;

const Resultado = (props) => {

    let params = props.history.location.state;
    let calorias = (params.manutencao).toFixed(0);
    let basal = (params.basal).toFixed(0);

    let perder = (params.objetivoPerder).toFixed(0);
    let manter = (params.objetivoManter).toFixed(0);
    let ganhar = (params.objetivoGanhar).toFixed(0);

    let objetivo = (params.goal);
    let imc = params.imcChoice;
    let agua = params.water;

    return(
        <>  
            <NavBar cor="vermelho"></NavBar>
            <Container>
                <Result>
                    <h1>RESULTADO</h1>
                    <h2>CALORIAS DE MANUTENÇÃO</h2>
                    <Painel>
                        <Manutencao>
                            <ManutencaoDia>
                                <span>{calorias}</span>
                                <p>calorias por dia</p>
                            </ManutencaoDia>
                            <ManutencaoSemanal>
                                <span>{calorias * 7}</span>
                                <p>calorias por semana</p>
                            </ManutencaoSemanal>
                        </Manutencao>
                    </Painel>
                    <h2>CALORIAS DE ACORDO COM OBJETIVO</h2>
                    <Painel>
                        <TabelaAtividade objetivo={objetivo}>
                            <tbody>
                                <tr>
                                    <td>Taxa metabólica basal</td>
                                    <td>{basal} calorias por dia</td>
                                </tr>
                                <tr>
                                    <td>Emagrecer</td>
                                    <td>{perder} calorias por dia</td>
                                </tr>
                                <tr>
                                    <td>Manter</td>
                                    <td>{manter} calorias por dia</td>
                                </tr>
                                <tr>
                                    <td>Ganhar</td>
                                    <td>{ganhar} calorias por dia</td>
                                </tr>
                                
                            </tbody>
                        </TabelaAtividade>
                    </Painel>
                    <h2>ÍNDICE DE MASSA CORPÓREA (IMC)</h2>
                    <Painel>
                        <TabelaIMC imc={imc}>
                            <tbody>
                                <tr>
                                    <td>18.5 ou menor</td>
                                    <td>Desnutrido</td>
                                </tr>
                                <tr>
                                    <td>18.6 - 24.99</td>
                                    <td>Peso normal</td>
                                </tr>
                                <tr>
                                    <td><strong>25 - 29.99</strong></td>
                                    <td><strong>Sobrepeso</strong></td>
                                </tr>
                                <tr>
                                    <td>30 ou mais</td>
                                    <td>Obeso</td>
                                </tr>
                            </tbody>
                        </TabelaIMC>
                    </Painel>
                    <h2>QUANTIDADE DE ÁGUA RECOMENDADA</h2>
                    <Painel>
                        <img src={Agua} alt="água" width="200"/>
                        <span>{agua.toFixed(2)} litros</span>
                    </Painel>
                    <h3>QUER APRENDER MAIS SOBRE DIETA E FICAR POR DENTRO DE TUDO? ME SIGA NO INSTAGRAM! <span>@felipehentz</span></h3>
                </Result>
            </Container>
        </>
        
    );
}

export default Resultado;