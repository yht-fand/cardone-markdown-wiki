# cardone markdown wiki

基于静态 markdown 文件的 wiki

```
访问 http://127.0.0.1/,默认读取 README.md 文件解析渲染到#region-main中。

访问 http://127.0.0.1/#abc,读取 abc/README.md 文件解析渲染到#region-main中。

访问 http://127.0.0.1/#abc.md,读取 abc.md 文件解析渲染到#region-main中。

访问 http://127.0.0.1/#aa/dd/ee/1,读取 aa/dd/ee/1/README.md 文件解析渲染到#region-main中。

访问 http://127.0.0.1/#aa/dd/ee/1.md,读取 aa/dd/ee/1.md 文件解析渲染到#region-main中。
```