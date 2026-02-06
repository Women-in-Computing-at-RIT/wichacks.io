## Table of Contents
- [Dev Setup](#dev-setup)
  - [System Requirements](#system-requirements)
  - [Making a Local Development Branch](#making-a-local-development-branch)
  - [Cloning the Repository](#cloning-the-repository)
- [Running React + Vite](#running-react--vite)


# Dev Setup

## System Requirements
- **Software Needed:**
  - node >= v22.14.0
  - npm >= 10.9.2
  - vite >= v7.1.9
```
nvm install 22.14.0
nvm use 22.14.0
node -v
npm -v
npm i -g npm@^10.9.2 # or for windows: npm install -g npm@^10.9.2
npm -v
npm i -D vite@^7.1.9
npm i -D @vitejs/plugin-react
npx vite --version
```

## Making a Local Development Branch
Always work on a user branch, not directly on `main`:
```bash
git fetch origin
git checkout main
git pull origin main
git checkout -b dev-<user>
```
Pull requests should be submitted to `main`.

## Cloning the Repository
```bash
git clone https://github.com/meghantomb/wichacks-development.git
```


# Running React + Vite
To test the current files, run ```npm run dev``` in your local terminal.
