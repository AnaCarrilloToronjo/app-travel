FROM node:16.13.2-slim as build 
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install
RUN ["npm","run", "build"]

FROM nginx:1.21.6
COPY --from=build /app/dist /var/www/html/react/web

