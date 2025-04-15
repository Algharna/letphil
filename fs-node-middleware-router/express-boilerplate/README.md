# Node Express Boilerplate

node express boilerplate to be reused

## packages

express
dotenv

## setup project

npm install

## start project

npm run dev

## stop project

ctrl + c

## steps

npm init -y
npm install express
npm install dotenv -D
touch index.js
update package.json to include:
"type": "module",
create .gitignore and add node_modules
"touch .gitignore && echo "node_modules" > .gitignore && echo ".env" >> .gitignore"
update package.json `scripts` key to include dev command:
"dev": "node --watch index.js"
