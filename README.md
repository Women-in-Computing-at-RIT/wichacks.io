# wichacks.io  [![Build Status](https://travis-ci.org/Women-in-Computing-at-RIT/wichacks.io.svg?branch=develop)](https://travis-ci.org/Women-in-Computing-at-RIT/wichacks.io) [![Code Climate](https://codeclimate.com/github/Women-in-Computing-at-RIT/wichacks.io/badges/gpa.svg)](https://codeclimate.com/github/Women-in-Computing-at-RIT/wichacks.io) [![Test Coverage](https://codeclimate.com/github/Women-in-Computing-at-RIT/wichacks.io/badges/coverage.svg)](https://codeclimate.com/github/Women-in-Computing-at-RIT/wichacks.io/coverage) [![security](https://hakiri.io/github/Women-in-Computing-at-RIT/wichacks.io/develop.svg)](https://hakiri.io/github/Women-in-Computing-at-RIT/wichacks.io/develop)

The public facing site for WiCHacks.

**Registration + management site: [hackathon_manager](https://github.com/codeRIT/hackathon_manager)**

## Getting Started

1. See [CONTRIBUTING.md](CONTRIBUTING.md) for details on cloning the repo.
2. Download & install [Docker](https://www.docker.com/community-edition#/download)
3. Open/start Docker
4. Once docker is started, build & bring up the website:
```bash
docker-compose up --build
```
5. You should now be able to access the website at http://localhost:3000
_**Windows users:** be sure to accept the security pop-ups - they might be hidden! The website will not start until you accept them._

## Tooling

* If you need to restart the Rails server:
```bash
docker-compose restart web
```
* If you need to make changes to the Gemfile:
```bash
# 1. Make your changes to Gemfile
# 2. Run a `bundle install` to update the Gemfile.lock
docker-compose run web bundle install
# 3. Update the "web" docker image
docker-compose build web
# 4. Start the new container.
#    If `docker-compose up` isn't already running, exclude "-d"
docker-compose up -d web
```

You can follow the same format for `redis`, though you shouldn't ever need to restart it.

## Gotchas

* If you try to `docker-compose run web` and get an error message along the lines of `Could not find foogem-x.y.z in any of the sources`, your local bundle is conflicting with Docker or you haven't run `bundle install`.
```bash
rm -rf .bundle
docker-compose up --build # This will rebuild the containers, install new dependencies, and start the website
```
