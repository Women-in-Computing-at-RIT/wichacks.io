# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## Getting Started

TODO: `git pull`...

1. Download & install [Docker](https://www.docker.com/community-edition#/download)
2. Open/start Docker
3. Once docker is started, build & bring up the website:
```bash
docker-compose up --build
```
4. **In a new terminal window,** setup the database:
```bash
docker-compose run web rails db:setup
```
5. You should now be able to access the website at [http://localhost:3000](http://localhost:3000)

## Tooling

* If you need to restart the Rails server:
```bash
rm tmp/pids/server.pid
docker-compose restart web
```
* If you need to restart Sidekiq, the background job worker that handles emails:
```bash
docker-compose restart sidekiq
```

You can follow the same format for `db` and `redis`, though you shouldn't ever need to restart those.
