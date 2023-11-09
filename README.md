# Page Extensions Sample

next config には pageExtensionsというオプションがあるが、
Pages RouterとApp Routerどちらでも併用できるのかを試したサンプル。

- App版: localhost:3000/app
- App版DevOnlyなページ: localhost:3000/app/devonly
- Pages版: localhost:3000/pages
- Pages版DevOnlyなページ: localhost:3000/pages/devonly
- Pags版Componentな表示してはいけないページ: localhost:3000/pages/component

## 確認したこと
- [x] devの時
  - [x] componentは表示できないこと
  - [x] dev.tsx/page.tsxのみを表示できるようにできること
- [x] startの時
  - [x] .dev.tsxはバンドルに入っていないこと
  - [x] .dev.tsxブラウザからアクセスできないこと


```
Route (app)                                Size     First Load JS
┌ ○ /_not-found                            882 B          85.9 kB
└ ○ /app                                   0 B                0 B

Route (pages)                              Size     First Load JS
─ ○ /pages                                 265 B          80.7 kB
+ First Load JS shared by all              80.4 kB
```


## 備考

Next.js 14.0.1 で確認