# Imagem base recomendada para Angular 9
FROM node:16

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY sustenta-mais/package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta padrão do Angular
EXPOSE 4200

# Comando para iniciar o servidor Angular
CMD ["npm", "start"]