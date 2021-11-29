ARG VARIANT=17.1-bullseye

FROM node:${VARIANT}

ARG USERNAME=node
ENV PORT=3103

WORKDIR /usr/src/app

COPY package*.json ./
RUN chown -R ${USERNAME} /usr/src/app \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

USER ${USERNAME}

RUN npm install
COPY . .

CMD [ "npm", "run", "start" ]
