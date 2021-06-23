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
        font-size: 60px;
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

const Tabela = styled.table`
    border-spacing: 0;

    td{
        border-bottom: 1px solid grey;
        padding: 20px;
    }
`;

const Resultado = () => {

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
                                <span>{2260}</span>
                                <p>calorias por dia</p>
                            </ManutencaoDia>
                            <ManutencaoSemanal>
                                <span>{18621}</span>
                                <p>calorias por semana</p>
                            </ManutencaoSemanal>
                        </Manutencao>
                    </Painel>
                    <h2>CALORIAS DE ACORDO COM ATIVIDADE FÍSICA</h2>
                    <Painel>
                        <Tabela>
                            <tbody>
                                <tr>
                                    <td>Taxa metabólica basal</td>
                                    <td>{1731} calorias por dia</td>
                                </tr>
                                <tr>
                                    <td>Sedentário</td>
                                    <td>{2078} calorias por dia</td>
                                </tr>
                                <tr>
                                    <td><strong>Exercício leve</strong></td>
                                    <td><strong>{2380} calorias por dia</strong></td>
                                </tr>
                                <tr>
                                    <td>Exercício moderado</td>
                                    <td>{1731} calorias por dia</td>
                                </tr>
                                <tr>
                                    <td>Exercício pesado</td>
                                    <td>{1731} calorias por dia</td>
                                </tr>
                            </tbody>
                        </Tabela>
                    </Painel>
                    <h2>ÍNDICE DE MASSA CORPÓREA (IMC)</h2>
                    <Painel>
                        <Tabela>
                            <tbody>
                                <tr>
                                    <td>18.5 ou menor</td>
                                    <td>Desnutrido</td>
                                </tr>
                                <tr>
                                    <td>18.5 - 24.99</td>
                                    <td>Peso normal</td>
                                </tr>
                                <tr>
                                    <td><strong>25 - 25.99</strong></td>
                                    <td><strong>Sobrepeso</strong></td>
                                </tr>
                                <tr>
                                    <td>30 ou mais</td>
                                    <td>Obeso</td>
                                </tr>
                            </tbody>
                        </Tabela>
                    </Painel>
                    <h2>QUANTIDADE DE ÁGUA RECOMENDADA</h2>
                    <Painel>
                        <img src={Agua} alt="água" width="200"/>
                        <span>{3.4} litros</span>
                    </Painel>
                    <h3>QUER APRENDER MAIS SOBRE DIETA E FICAR POR DENTRO DE TUDO? ME SIGA NO INSTAGRAM! <span>@felipehentz</span></h3>
                </Result>
            </Container>
        </>
        
    );
}

export default Resultado;