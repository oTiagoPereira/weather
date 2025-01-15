# Clima com Node.js

## Descrição
Este é um projeto simples em Node.js que utiliza as APIs do OpenWeatherMap para buscar a temperatura atual de uma cidade fornecida pelo usuário via terminal.

O projeto está estruturado para:
- Obter as coordenadas geográficas (latitude e longitude) de uma cidade.
- Buscar os dados climáticos dessa localização.
- Exibir os resultados de forma clara no terminal.

---

## Como Configurar o Projeto

### **1. Requisitos**
Certifique-se de que você possui:
- Node.js instalado.
- NPM (gerenciador de pacotes do Node.js).
- Uma chave de API do OpenWeatherMap.

### **2. Instalação**
1. Clone o repositório:
   ```bash
   git clone https://github.com/oTiagoPereira/Weather.git
   ```

2. Entre no diretório do projeto:
   ```bash
   cd weather
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API:
   ```env
   API_KEY=sua_chave_api
   ```

### **3. Executando o Projeto**
No terminal, execute o comando:
```bash
node app.js
```
Siga as instruções para inserir o nome da cidade e aguarde o retorno da temperatura e outras informações climáticas.

---

## Como Funciona

1. **Entrada do Usuário:**
   - O programa solicita o nome da cidade no terminal.

2. **Busca de Coordenadas:**
   - A API de geocodificação (“Geo API”) do OpenWeatherMap é usada para obter a latitude e longitude da cidade fornecida.

3. **Dados Climáticos:**
   - Com as coordenadas, o programa consulta a API de clima do OpenWeatherMap para obter:
     - Temperatura atual.
     - Sensação térmica.

4. **Exibição:**
   - Os dados são formatados e exibidos no terminal.

---

## Estrutura do Projeto

```
weather/
├── .env                # Contém a chave de API (não incluído no repositório)
├── .gitignore          # Ignora o arquivo .env e outros arquivos sensíveis
├── app.js              # Arquivo principal do projeto
├── package.json        # Gerencia dependências e scripts
└── node_modules/       # Dependências instaladas pelo NPM
```

---

## Exemplo de Uso

### **Entrada:**
```
Insira o nome da cidade: São Paulo
```

### **Saída:**
```
Buscando dados da cidade, por favor aguarde...
-------------------------------------------------
Cidade: Salvador, Bahia 
Temperatura: 25.3°C
Sensação térmica: 27.0°C
-------------------------------------------------
```

---

## Possíveis Erros e Soluções

1. **Erro: “Cidade não encontrada”**
   - Verifique se o nome da cidade foi digitado corretamente.

2. **Erro: “Não foi possível conectar à API”**
   - Certifique-se de que você está conectado à internet.

3. **Erro: “Chave de API inválida”**
   - Confirme que você adicionou a chave corretamente no arquivo `.env`.

---

## Dependências
- `axios`: Para realizar requisições HTTP.
- `dotenv`: Para carregar variáveis de ambiente do arquivo `.env`.

---

## Autor
Projeto desenvolvido por <a href="https://github.com/oTiagoPereira">Tiago Pereira</a>.

