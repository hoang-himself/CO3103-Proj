# Backend

Using  NestJS and PostgreSQL

## Using the devcontainer

0. Install [Visual Studio Code](https://code.visualstudio.com/) and [Docker](https://docs.docker.com/get-docker/)
1. Install [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension
2. `File` -> `Open Folder` -> Choose the folder that ***contains*** the `.devcontainer` folder
3. Open command palette (F1 or Ctrl Shift P) -> `Remote-Containers: Reopen in Container`

## Running the backend as production

0. Install [Docker](https://docs.docker.com/get-docker/)
1. Use any shell; confirm Docker is available using `docker -v`
2. If needed, change the directory of your shell to **this folder**
3. `docker compose up`
