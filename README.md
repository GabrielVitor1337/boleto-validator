# Validador de Boleto

## Introdução

O programa foi escrito em Node.js utilizando o [express](https://www.npmjs.com/package/express) para criar um API que pudesse validar os seguintes pontos:

1. Se a linha digitada é válida
2. O valor do boleto, se existir
3. A data de vencimento do boleto, se existir
4. Os 44 dígitos correspondentes ao código de barras desse boleto

Além desse pontos é feita a validação dos dígitos verificadores e distingue dois tipos de boletos: títulos bancários e pagamentos de concessionárias. O código deve funcionar corretamente para ambos.

## Instalação

Ao clonar o projeto você deve executar os comandos no seu terminal para rodar o programa corretamente.

$ **npm install** 

$ **npm start**

## Utilização

A API está direcionada para a url **localhost:3000/** você deve adicionar a linha digitável na url como no exemplo a seguir **localhost:3000/23793381286003502972174000063300383400000079000** sem pontos e espaços.

## Exemplo de utilização

Nesse exemplo é adicionado a seguinte linha digitavel ao Endpoint **23793381286003502972174000063300383400000079000** a mesma traz o seguinte resultado:

```json
Resposta: {
	"result":
		{
		"value":79000,
		"expirateDate":"06-08-2020",
		"barcode":"23793834000000790003381260035029727400006330",
		"digitableLineValid":true
		}
	   } 
```

Esse exemplo também funciona para o tipo de pagamentos de concessionárias basta colocar a linha digitável do mesmo conseguindo a mesma reposta.

Ao tentar adicionar uma linha digitável inválida o programa irá mostrar ***"digitableLineValid":false*** e irá parar o programa imediatamente.
