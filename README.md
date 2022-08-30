# form submit demo

## このコードについて

HTML Form から 標準サポートされていない delete, patch リクエストを送信するためのコードです。

[Zen]()

## 使用しているライブラリ

- backend: express, knex, **method-override**
- database: postgres
- package manager: yarn

express の ミドルウェアである method-override を使用しています。

## セットアップ

このアプリを動かすためには、以下の手順で環境のセットアップを行なってください。

### Downloading and installing steps

repository を clone します。

```
$ git clone https://github.com/kotaro-caffeinism/form-submit-demo.git
```

repository に移動します。

```
$ cd form-submit-demo
```

dependencies をインストールします。

```
$ npm install
または
$ yarn install
```

以下のコマンドでビルドを実行してください。

```
yarn run build
または
npm run build
```

以下のコマンドでサーバーを立ち上げてください。

```
yarn run start
または
npm run start
```

[localhost:9000](localhost:9000) で確認できます。
