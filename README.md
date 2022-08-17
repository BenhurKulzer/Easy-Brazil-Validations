# Visão geral

Easy BR Validations é composta por funções para realizar a validação de documentos padrões no Brasil e mais.

# Instalação

Com npm:
```bash
npm install bsk-validations
``` 
Com yarn:
```bash
yarn add bsk-validations
```

# Como usar

## useValidationsBR

### Parâmetros

| Chave |                         Tipo                         |                         Descrição |
| :---- | :--------------------------------------------------: | --------------------------------: |
| type  | `cnpj \| cpf  \| cpf_cnpj  \| cep \| email \| pis \| phone \| uf` | Tipo de dados que serão validados |
| value |                       `string`                       |           Valor que será validado |

```js
import { useValidationsBR } from 'bsk-validations';
// const { useValidationsBR } = require('bsk-validations');

const cnpj = '09.015.844/0001-80';
const isValid = useValidationsBR('cnpj', cnpj);
```

## Validar CNPJ

```js
import { validateCNPJ } from 'bsk-validations';
// const { validateCNPJ } = require('bsk-validations');


const cnpj = '09.015.844/0001-80';
const isValid = validateCNPJ(cnpj);
```

## Validar CPF

```js
import { validateCPF } from 'bsk-validations';
// const { validateCPF } = require('bsk-validations');

const cpf = '370.785.180-04';
const isValid = validateCPF(cpf);
```

## Validação de CPF e CNPJ no mesmo input

```js
import { validateCPFCNPJ } from 'bsk-validations';
// const { validateCPFCNPJ } = require('bsk-validations');


const cpf_cnpj = '09.015.844/0001-80';
const isValid = validateCPFCNPJ(cpf_cnpj);
```

## Validar Inscrição Estadual

```js
import { validateIE } from 'bsk-validations';
// const { validateIE } = require('bsk-validations');

const ie = '535.371.880.779';
const isValid = validateIE(ie, 'sp');
```

## Validar PIS/PASEP

```js
import { validatePIS } from 'bsk-validations';
// const { validatePIS } = require('bsk-validations');

const pis = '833.28281.34-7';
const isValid = validatePIS(pis);
```

## Validar Telefone

```js
import { validatePhone } from 'bsk-validations';
// const { validatePhone } = require('bsk-validations');

const phone = '(14) 99767-9472';
const isValid = validatePhone(phone);
```

## Validar CEP

```js
import { validateCEP } from 'bsk-validations';
// const { validateCEP } = require('bsk-validations');

const cep = '17280-000';
const isValid = validateCEP(cep);
```

## Validar UF

```js
import { validateUF } from 'bsk-validations';
// const { validateUF } = require('bsk-validations');

const uf = 'SP';
const isValid = validateUF(uf);
```

## Validar E-mail

```js
import { validateEmail } from 'bsk-validations';
// const { validateEmail } = require('bsk-validations');

const email = 'johndoe@gmail.com';
const isValid = validateEmail(email);
```

# Integrações

## Yup

```js
import { validateCNPJ } from "bsk-validations";
import * as Yup from "yup";

try {
  const schema = Yup.string().test(
    "is-cnpj",
    "CNPJ is not valid",
    (value) => validateCNPJ(value)
  );
  
  await schema.validate(cnpj);
} catch(err) {
  console.log(err.message);
}
```

## Joi

```js
import { validateCNPJ } from "bsk-validations";
import Joi from "joi";

try {
  const schema = Joi.string().custom(validateCNPJ, "Validate CNPJ");

  const { value } = schema.validate(cnpj);

  if (!value) {
    throw Error("CNPJ is not valid");
  }
} catch(err) {
  console.log(err.message);
}
```
