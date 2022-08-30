# form submit demo

## このコードについて

HTML Form から 標準サポートされていない delete, patch リクエストを送信するためのコードです。

[Zen](https://zenn.dev/caffeinism/articles/a01ae1f5c59a77)

## 使用しているライブラリ

- backend: express, knex, dotenv, **method-override**
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

postgres を使用し、「form_submit_demo」という名前のデータベースを作成してください。

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
