# 讓你的app連mysql(in container)

## 創建一個web server
```
express -e
npm i

npm start
```




## 安裝sequelize and mysql2
```
npm install sequelize --save
npm install mysql2 --save
```


## 撰寫ORM
看程式範例


## 弄一個docker file to build
```
docker build -t web2mysql .
docker run -p 3000:3000 --name web2mysql web2mysql
docker stop web2mysql
```


## 上了docker msyql連線失敗
修改url成host.docker.internal


## 其他標記
GRANT ALL PRIVILEGES ON `starwar`.* TO 'user'@'%'