# Calculadora-Com-JavaScript
Projeto de uma calculadora desenvolvida com Javascript utilizando programação orientada a objetos


## Arquivos Fornecidos

O projeto contém os seguintes arquivos:

1. `index.html`: Este é o arquivo HTML que define a estrutura da página da calculadora.
2. `style.css`: Este é o arquivo CSS que controla o estilo e a aparência da calculadora.
3. `script.js`: Este é o arquivo JavaScript que fornece a funcionalidade da calculadora.

## Funcionamento do Código

Aqui estão as principais funcionalidades e o funcionamento do código:

### HTML (`index.html`)

- O arquivo HTML define a estrutura da página, incluindo a calculadora, um campo de entrada, botões numéricos e operadores, e um campo de exibição de resultados.

- O botão "Switch Theme Dark/Light" permite alternar entre os temas escuro e claro da calculadora.

### CSS (`style.css`)

- O CSS define o estilo da calculadora e dos elementos da página.

- O estilo utiliza variáveis CSS personalizadas (variáveis da raiz, definidas em `:root`) para controlar as cores e outros estilos.

- Os estilos são aplicados para criar um tema escuro por padrão, mas podem ser alternados para um tema claro ao clicar no botão "Switch Theme Dark/Light".

### JavaScript (`script.js`)

- O JavaScript fornece a funcionalidade da calculadora.

- Os botões numéricos e operadores têm classes específicas ("charKey") e um atributo "data-value" que armazena os valores correspondentes.

- Os botões numéricos e operadores respondem a eventos de clique, permitindo que os valores sejam inseridos no campo de entrada.

- O botão "C" (clear) remove o conteúdo do campo de entrada.

- O campo de entrada também responde a eventos de teclado, permitindo que os valores sejam digitados e calculados.

- O botão "=" executa o cálculo da expressão no campo de entrada e exibe o resultado no campo de exibição de resultados.

- O botão "Copy" permite copiar o resultado para a área de transferência do sistema.

## Como Usar

Para usar a calculadora:

1. Abra o arquivo `index.html` em um navegador da web.

2. Insira valores e operadores no campo de entrada.

3. Clique no botão "=" para calcular o resultado.

4. Clique no botão "Copy" para copiar o resultado para a área de transferência.

5. Clique no botão "Switch Theme Dark/Light" para alternar entre temas claro e escuro.

Tenha em mente que esta calculadora é uma implementação básica para fins de demonstração e pode não cobrir todos os casos de uso. 

## Conclusão

Este projeto demonstra o uso de HTML, CSS e JavaScript para criar uma calculadora simples e interativa. Você pode personalizar o estilo e a funcionalidade de acordo com suas necessidades. Este README fornece uma visão geral do projeto e explica como usar a calculadora.
