
FROM node:14.15.3-alpine3.12

WORKDIR /usr/app

COPY package*.json ./

# Install dependencies
RUN yarn

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["yarn","dev"]