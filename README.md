# Teste Back End Ewally

O teste consiste em escrever um programa em Node.js que expõe uma API na qual é dada como entrada uma linha digitada de um boleto e que retorna:
- Se a linha digitada é válida
- O valor do boleto, se existir
- A data de vencimento do boleto, se existir
- Os 44 dígitos correspondentes ao código de barras desse boleto

É essencial que seja feita a validação dos dígitos verificadores.

Existem 2 tipos de boletos que seguem regras diferentes: títulos bancários e pagamentos de concessionárias. O código deve funcionar corretamente para ambos.

## Passos

### 1. Iniciar o projeto Local
### 2. Endpoint
### 3. Retornos

## 1. Iniciar o projeto Local

Ao clonar o projeto você deve executar o comando **npm install** na parte raiz do projeto. Logo após instalar as dependências execute o comando **npm start** para rodar a API local.

## 2. Endpoint

A API está direcionada para o endpoint **localhost:3000/** você deve adicionar a linha digitável no Endpoint como no exemplo a seguir **localhost:3000/23793381286003502972174000063300383400000079000** sem pontos e espaços.

## 3. Retornos

Esse projeto foi projetado pra receber dois tipos títulos bancários ou pagamentos de concessionárias, sendo assim consegue as seguintes respostas:

### Primeira resposta

colocando um título bancário consegue a seguinte resposta:

Endpoint: http://localhost:3000/23793381286003502972174000063300383400000079000

```json
Resposta: {"result":
		{
		"value":79000,
		"expirateDate":"06-08-2020",
		"barcode":"23793834000000790003381260035029727400006330",
		"digitableLineValid":true
		}
	   } 
```

### Segunda resposta

colocando um pagamento de concessionária consegue a seguinte resposta:

Endpoint: http://localhost:3000/846100000013086000240209024081022634618270411027

```json
Resposta: {"result":
		{
		"barcode":"84610000001086000240200240810226361827041102",
		"digitableLineValid":true,
		"value":10860
		}
	   } 
```

### Terceira resposta

caso a linha digitável esteja incorreta tem a seguinte resposta:

Endpoint: http://localhost:3000/846100000013086000240209024081022634618270411027

```json
Resposta: {"result":
		{
		"digitableLineValid":false
		}
	  }
```
