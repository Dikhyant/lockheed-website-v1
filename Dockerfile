FROM node:21

WORKDIR /lockheed

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 7000-8000

RUN cd .\lockheed
CMD ["npm", "start"]