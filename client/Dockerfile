FROM node:16.13.2-slim 
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start:prod"]

