# React 測試第二題 - 路由

### 題目說明

請根據已提供之素材，製作出與 [完整版網站]() 相同的網頁。

### 規格說明

- 請使用 `react-router-dom` 套件，進行路由，路由資料如下
  | 路由 | 頁面 |
  | -------------------- | ---- |
  | / | Home | |
  | /products | Products |
  | /product/:id | SingleProduct |
  | /gated | Gated |
  | 其他路由 | Error |
- 透過 `Navbar` 元件來跳轉到不同頁面
- `SingleProduct` 頁面需要根據 url 的 `:id` 參數在頁面上印出對應的 id，如路由是 `/product/123` 則頁面須印出 ID: 123
- `Gated` 頁面需有 Protected Route 的功能，當用戶權限未包含 `admin` 時需要重新導向到首頁

### 驗收標準

| 標準                                                     | 說明 |
| -------------------------------------------------------- | ---- |
| 路由是否運作正確                                         | 如題 |
| SingleProduct 頁面是否能根據 url 參數不同而顯示不同的 id | 如題 |
