# wichacks.io  [![Build Status](https://travis-ci.org/Women-in-Computing-at-RIT/wichacks.io.svg?branch=develop)](https://travis-ci.org/Women-in-Computing-at-RIT/wichacks.io) [![Code Climate](https://codeclimate.com/github/Women-in-Computing-at-RIT/wichacks.io/badges/gpa.svg)](https://codeclimate.com/github/Women-in-Computing-at-RIT/wichacks.io) [![Test Coverage](https://codeclimate.com/github/Women-in-Computing-at-RIT/wichacks.io/badges/coverage.svg)](https://codeclimate.com/github/Women-in-Computing-at-RIT/wichacks.io/coverage) [![security](https://hakiri.io/github/Women-in-Computing-at-RIT/wichacks.io/develop.svg)](https://hakiri.io/github/Women-in-Computing-at-RIT/wichacks.io/develop)

The public facing site for WiCHacks.

* **Hacker applications:** Users sign up/in using [MyMLH](https://my.mlh.io/), which includes standard hackathon application info. This pre-fills the BrickHack application, so hackers don't have to duplicate information!
* **Acceptance, RSVPs**: Manage applications & coordinate acceptance/waitlist/denials
* **Bus Lists:** Coordinate bus sign-ups during the RSVP process while communicating important information to riders & captains
* **Email communication**: Ensure hackers get consistent, timely information throughout their application process, while enabling the organizing team to communicate important information at any time.
* **Statistics & Visualization:** Surface key information about the application base, distribution of applicants, progress towards attendance, etc.


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
5. You should now be able to access the website at http://localhost:3000

You'll then want to make an account & promote yourself to an admin.

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
rm tmp/pids/server.pid
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

* If you see the error message `web_1 | A server is already running. Check /app/tmp/pids/server.pid`, and you don't have any other servers running, remove the PID file and try again.
```bash
rm tmp/pids/server.pid
```
* If you try to `docker-compose run web` and get an error message along the lines of `Could not find foogem-x.y.z in any of the sources`, your local bundle is conflicting with Docker or you haven't run `bundle install`.
```bash
rm -rf .bundle
docker-compose run web bundle install
```
