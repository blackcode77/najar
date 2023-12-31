FROM node:16-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ .
RUN npm run build
CMD ["npm", "run", "start"]

FROM nginx as production-stage
RUN mkdir /app
COPY ./ /app
COPY nginx.conf /etc/nginx/nginx.conf
