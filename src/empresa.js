import {LightningElement, api} from "lwc";


export default class Empresa extends LightningElement{
    /**
     * atribuição interna -  
     * 
     * nomeEmpresa = "Gorira LTDA";
     */
   

    /**
     * Propriedade permite receber valores externos
     * de um componente pai
     * 
     * Para definir uma propriedade, é preciso
     * importar a classe api
     */

    @api nome;
    //crie a propriedade publica
    @api cnpj;

    /**
     * Concluir o componente Empresa
     * 
     * preparar o componente para receber 
     * os dados  cidade, CEO e fundadoEm
     * 
     * Componente Produto
     * 
     * preparar o componentepara receber os dados 
     * de nome preco e estoque.
     */


}