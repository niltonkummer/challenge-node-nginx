FROM node:15

WORKDIR /usr/src/app

# Add wait-for-it
COPY wait-for-it.sh wait-for-it.sh 
RUN chmod +x wait-for-it.sh

COPY package.json .
COPY index.js .
RUN npm install express mysql --save

EXPOSE 3000

CMD ["./wait-for-it.sh", "db:3306", "--strict","--timeout=30", "--", "node", "index.js"]