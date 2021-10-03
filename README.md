# Programming Integration Project

## Getting started

### Clone the repo

- HTTPS

```bash
git clone https://github.com/Smithienious/CO3103-Proj.git -b dev --depth 1
```

- SSH

```bash
git clone git@github.com:Smithienious/CO3103-Proj.git -b dev --depth 1
```

In the case you have already cloned the repo, switch to the `dev` branch.

```bash
git switch dev
```

### Setup dev environment with VSCode

- Change working directory

```bash
cd CO3103-Proj
```

- Open VSCode

```bash
code .
```

- Install [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension
- Open command palette (F1, Ctrl Shift P) > `Remote-Containers: Rebuild and Reopen in Container`

## FAQ

### Why do we use devcontainer?

TODO

## Useful resources

- [wanago.io](https://wanago.io/2020/05/18/api-nestjs-postgresql-typeorm/)

<!--
## (Recommended) Initialize a virtual environment

```bash
python -m venv --upgrade-deps ./.venv
source ./.venv/bin/activate
```

## Install tools and dependencies

```bash
sudo apt update
sudo apt install -y postgresql
pip install pip-tools
pip-sync
```

## First-time setup

### Configure PostgreSQL server

```bash
sudo service postgresql start
sudo -u postgres psql \
-c "CREATE DATABASE tfc;" \
-c "CREATE ROLE tfc_admin WITH ENCRYPTED PASSWORD 'i-am-admin' LOGIN SUPERUSER;" \
-c "GRANT ALL PRIVILEGES ON DATABASE tfc TO tfc_admin;"
```

## Running the server

```bash
python manage.py <host>:<port>
```

`<host>` defaults to `127.0.0.1`\
`<port>` defaults to `8000`

## FAQ

### JWT token

On login, the access token is returned in the response body.
Take this token, put it in the header according to this format

```text
'Authorization': 'JWT <token>'
```

The space behind `JWT` is important.

### SECRET_KEY and JWT_KEY

By default, this program reads the keys from shell environment variables, i.e. `export SECRET_KEY=<key>`

You can generate the keys using the Django shell at `python manage.py shell`

```python
from django.core.management.utils import get_random_secret_key
get_random_secret_key()
```
 -->
