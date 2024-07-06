<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Run in dev

1. Clone the repo
2. Run

```
yarn install
```

3. Have Nest CLI installed

```
npm i -g @nestjs/cli
```

4. Set-up database

```
docker-compose up -d
```

5. Config env files clonning the `.env.template` and renaming it to `.env`

6. Run app in dev mode

```
yarn start:dev
```

6. Exec seed to populate DB

```
http://localhost:3000/api/v2/seed
```

## Stack used

- MongoDB
- Nest

# Production Build

1. Create file `.env.prod` clonning the `.env.template`

2. Create the new image

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build -d
```

3. Run the container with docker

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```

## Note

By default, docker-compose use the .env so, if you have the .env file with yours production configuration, just run

```
docker-compose -f docker-compose.prod.yaml up --build -d
```
