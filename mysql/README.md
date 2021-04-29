##開始準備後端的database

0. 開始之前，假設docker 環境很亂，清理一下
```
docker system prune
```
1. 首先，先把mysql image抓下來
```
docker pull mysql/mysql-server:8.0
docker images
```

2. 把mysql啟動看看
```
docker run --name=mysql8 -d -p 3306:3306 mysql/mysql-server:8.0
```
   - --name=mysql8 將 container 命名為 mysql8
   - -d 將 container 以背景(background)模式運行
   - -p 將 host 的 3306 port 導向至 container 的 3306 port, 如此一來，我們連線至 127.0.0.1:3306 便可直接連到 MySQL container
3. 用docker logs找出mysql產生的root密碼，並且用docker exec進入容器
```
docker logs mysql8 2>&1 | grep GENERATED
docker exec -it mysql8 sh
```
4. 進入mysql修改root密碼
```
mysql -uroot -p<密碼>
ALTER USER 'root'@'localhost' IDENTIFIED BY '<新密碼>';

```

5. 關閉容器並且重啟他
```
docker stop mysql8
docker start mysql8
```
檢查還可以用我們新改好的密碼進去

6. 假設我們刪除了container呢？
```
docker stop msyql8
docker rm mysql8
```
舊的mysql資料完全消失

7. 需要保存資料靠volume，並且檢查一下container刪除之後，volume是否還在
```
docker run -d -p 3306:3306 -v mysql:/var/lib/mysql --name mysql8 mysql/mysql-server:8.0
docker stop mysql8
docker rm mysql8
docker volume ls
docker inspect <volume name>
```
8. 用修改的密碼檢查一下是否還可以進入



Grant all privileges on *.* TO 'user'@'%'





