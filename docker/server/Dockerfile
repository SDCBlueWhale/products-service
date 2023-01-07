FROM node:lts-alpine3.17
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
RUN npm install && npm cache clean --force
COPY . ./
CMD npm run ts:build

## this is stage two , where the app actually runs
FROM node:lts-alpine3.17
WORKDIR /app
COPY package.json ./
RUN npm install --only=production
COPY --from=0 /app/build .
RUN npm install pm2 -g
EXPOSE 3000
CMD ["pm2-runtime","server/server.js"]