##前期工作

1. 安裝NPM
    > https://nodejs.org/zh-tw/download/

2. 檢查npm版本
    > npm -v

3. 安裝docker desktop
    > https://docs.docker.com/get-docker/

4. 安裝VSCODE(選擇性)
    > https://code.visualstudio.com/download

5. 創造一個環境
    > 在自己的電腦裡面創造一個資料夾，進入目錄夾

6. 安裝express套件
    >npm install
    >express -g

7. 快速生成express環境
    > express -e
    > npm install

8. 啟動expres web server
    > npm run start




##Docker的開始...create a web server
1. 專寫Dockerfile

2. 把程式包成image
    > docker build .

3. 檢查包出來的image(顯示所有的images)
    > docker images

4. 替image取名字
    > docker build .
    > docker build -t my-first-web . 

5. 產生container讓服務跑起來
    > docker run my-first-web
    > docker run -p 3000:3000 --name web my-first-web
6. 瀏覽器打入下面網址，看到Express，大功告成
    > locahost:3000
7. 停止Container
    > docker stop <container id or name>

8. push image to docker hub
   1. 註冊docker hub
   2. tage image
    > docker tag my-frist-web art0428/my-first-web
   3. push image
    > docker push art0428/my-first-web


9. 增加一個volume綁在host path上面
    > docker run --name web -v "$(pwd)"/target:/app/target my-first-web
windows 把$(pwd)改成%cd%







