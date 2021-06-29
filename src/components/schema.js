import * as Yup from 'yup';

export default Yup.object().shape({
    //gender, peso, altura, idade
    gender: Yup.string().required("O campo sexo é obrigatório"),
    peso: Yup.number("Digite um número válido").required("O campo peso é obrigatório").positive("Digite um número positivo"),
    altura: Yup.number("Digite um número válido").required("O campo altura é obrigatório").positive("O campo sexo é obrigatório"),
    idade: Yup.number("Digite um número válido").required("O campo idade é obrigatório").positive("Digite um número positivo").integer("Digite um número inteiro")
});