# products-service

Products-service handles the ```/products``` API endpoint for the FEC Project Atelier.

## Technology Stack
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)

## Running Locally

Products-service consists of two parts, an API server and a postgres instance.

### Kubernetes

Requires a K8s cluster, we recommend using [minikube](https://github.com/kubernetes/minikube) for local development.

```bash
$ kubectl apply -f minikube.yaml
```

### Docker Compose

```bash
$ docker compose up
```

### From source

```
$ npm install
$ npm run ts:build      # compile TS files

$ ./download_csv.sh     # download csv files, warning: very large
$ ./load_db.sh          # load csv into postgres
```

## Endpoints

```GET /products```

```GET /products/:product_id```

```GET /products/:product_id/styles```

```GET /products/:product_id/related```