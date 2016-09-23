echo off
cls
call taskkill /F /IM node.exe
rd /s/q dist
rd /s/q node_modules
rd /s/q bower_components
call npm config set registry https://registry.npm.taobao.org
call npm install
call npm install -g gulp
call npm install -g bower
call bower install
cmd
