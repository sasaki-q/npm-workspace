## 別パッケージに切り出したtypeorm及びクエリをapiサーバーから利用するサンプル

## npmライブラリを各パッケージにインストールする
・ $ npm install -w packages/name --save library

## AパッケージにBパッケージをインストールする
・ $ npm install -w package/A --save package/B

## 留意点
・ 各パッケージ配下にpackage-lock.jsonが生成されないようにする  
※ ライブラリをインストールする際はルートディレクトリで-wオプションを使用してインストールするようにする  