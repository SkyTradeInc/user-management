FROM node:10

WORKDIR /user-management
ADD ./package.json /user-management/package.json
ADD ./package-lock.json /user-management/package-lock.json
ADD ./service.js /user-management/service.js
ADD ./lib /user-management/lib

RUN npm i

CMD ["node", "/user-management/service.js"]
