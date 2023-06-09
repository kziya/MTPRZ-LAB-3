FROM node:18-alpine
WORKDIR /opt/node-app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "run", "start:prod"]