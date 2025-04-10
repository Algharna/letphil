# Node Express Boilerplate

express boilerpalte including middleware and routing

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
`scripts` key to include dev command:
"dev": "node --watch index.js"
create .gitignore and .env and add node_modules and .env
"touch .gitignore && echo "node_modules" > .gitignore && echo ".env" >> .gitignore"
