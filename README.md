# Songle Sync Node.js向けslaveプロジェクト

## 一般的な使い方説明

以下のようにして実行してください。

```sh
$ npm install
$ node index.js
```

## ビルド方法の説明

`index.ts` はTypeScriptで書かれているので、 `tsc` コマンドを使ってビルドしてください。 `index.js` が上書きされます。

```sh
$ tsc
```

`tsc` がインストールされていない環境では、まず以下のようにしてインストールする必要があります。

```sh
$ npm install -g typescript
```
