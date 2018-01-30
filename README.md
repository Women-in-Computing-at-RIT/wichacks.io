# wichacks.io  [![Build Status](https://travis-ci.org/Women-in-Computing-at-RIT/wichacks.io.svg?branch=develop)](https://travis-ci.org/Women-in-Computing-at-RIT/wichacks.io) [![Code Climate](https://codeclimate.com/github/Women-in-Computing-at-RIT/wichacks.io/badges/gpa.svg)](https://codeclimate.com/github/Women-in-Computing-at-RIT/wichacks.io) [![Test Coverage](https://codeclimate.com/github/Women-in-Computing-at-RIT/wichacks.io/badges/coverage.svg)](https://codeclimate.com/github/Women-in-Computing-at-RIT/wichacks.io/coverage) [![security](https://hakiri.io/github/Women-in-Computing-at-RIT/wichacks.io/develop.svg)](https://hakiri.io/github/Women-in-Computing-at-RIT/wichacks.io/develop)

The public facing site for WiCHacks.

* **Hacker applications:** Users sign up/in using [MyMLH](https://my.mlh.io/), which includes standard hackathon application info. This pre-fills the WiCHacks application, so hackers don't have to duplicate information!
* **Acceptance, RSVPs**: Manage applications & coordinate acceptance/waitlist/denials
* **Bus Lists:** Coordinate bus sign-ups during the RSVP process while communicating important information to riders & captains
* **Email communication**: Ensure hackers get consistent, timely information throughout their application process, while enabling the organizing team to communicate important information at any time.
* **Statistics & Visualization:** Surface key information about the application base, distribution of applicants, progress towards attendance, etc.


## Getting Started

1. See [CONTRIBUTING.md](CONTRIBUTING.md) for details on cloning the repo.
2. Download & install [Docker](https://www.docker.com/community-edition#/download)
3. Open/start Docker
4. Once docker is started, build & bring up the website:
```bash
docker-compose up --build
```
5. **In a new terminal window,** setup the database:
```bash
docker-compose run web rails db:setup
```
6. You should now be able to access the website at http://localhost:3000
_**Windows users:** be sure to accept the security pop-ups - they might be hidden! The website will not start until you accept them._

#### Admin Access

You'll want to make an account & promote yourself to an admin in order to access the entire website.

1. Visit http://localhost:3000/users/sign_up
2. Sign up for a regular account
4. Promote yourself to an admin:
```bash
docker-compose run web rails c
# Wait for the console to start...
Loading development environment (Rails 5.1.1)
irb(main):001:0> User.last.update_attribute(:admin, true)
```
5. You should now be able to visit http://localhost:3000/manage

## Tooling

* If you need to restart the Rails server:
```bash
docker-compose restart web
```
* If you need to restart Sidekiq, the background job worker that handles emails:
```bash
docker-compose restart sidekiq
```
* If you need to make changes to the Gemfile:
```bash
# 1. Make your changes to Gemfile
# 2. Run a `bundle install` to update the Gemfile.lock
docker-compose run web bundle install
# 3. Update the "web" and "sidekiq" docker images
docker-compose build web sidekiq
# 4. Start the new containers.
#    If `docker-compose up` isn't already running, exclude "-d"
docker-compose up -d web sidekiq
```

You can follow the same format for `db` and `redis`, though you shouldn't ever need to restart those.

## Gotchas

* If you try to `docker-compose run web` and get an error message along the lines of `Could not find foogem-x.y.z in any of the sources`, your local bundle is conflicting with Docker or you haven't run `bundle install`.
```bash
rm -rf .bundle
docker-compose up --build # This will rebuild the containers, install new dependencies, and start the website
```
