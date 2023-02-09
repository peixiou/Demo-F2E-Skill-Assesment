# HTML/CSS 測試第三題

### 題目說明

請根據已提供之素材，製作出與 [完整版網站](https://wucareer-f2e-js-test-3.netlify.app/) 相同的網頁。

### 規格說明

- 在網頁載入時，串接此 API 並透過 state 儲存此其 API 回傳資料 `https://randomuser.me/api/?results=12` 其 API 回傳其一資料範例如下（請留意該 API 會回傳多個如下方的資料）

  ```json
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Maya",
        "last": "Matthews"
      },
      "location": {
        "street": {
          "number": 7256,
          "name": "Oaks Cross"
        },
        "city": "City of London",
        "state": "Buckinghamshire",
        "country": "United Kingdom",
        "postcode": "VO6G 0LD",
        "coordinates": {
          "latitude": "-10.0881",
          "longitude": "51.6879"
        },
        "timezone": {
          "offset": "-2:00",
          "description": "Mid-Atlantic"
        }
      },
      "email": "maya.matthews@example.com",
      "login": {
        "uuid": "b9c6b831-ab59-427f-a6d2-c7907c788d88",
        "username": "blackrabbit503",
        "password": "stubby",
        "salt": "RwKjC96A",
        "md5": "3cddf871282632327f2f62ccacd62c5a",
        "sha1": "19a6dcfc03c9e4b1dbe3e8a99cb073229f9802ad",
        "sha256": "5b834dc79ec04e91b4a3de5bf0f2a10d8c641faeea870b551e9626c47a1ce5f7"
      },
      "dob": {
        "date": "1979-06-07T11:25:04.121Z",
        "age": 43
      },
      "registered": {
        "date": "2002-04-22T14:48:55.987Z",
        "age": 20
      },
      "phone": "015396 21132",
      "cell": "07316 260428",
      "id": {
        "name": "NINO",
        "value": "GY 49 84 39 Q"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/42.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/42.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/42.jpg"
      },
      "nat": "GB"
    }
  ],
  "info": {
    "seed": "9eaa1189d504f425",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
  ```

- 根據 API 回傳的資料(物件)數量，須印出相同數量之卡片

- 透過 API 的回傳資料， 將 API 資料帶入，詳細需要帶入的規範如下
  - 範例元件中的 `Mr John Doe` 須以 `results.name.title`、`results.name.first`、`results.name.last` 代替
  - 範例元件中的 `johndoe` 須以 `results.login.username` 代替
  - 範例元件中的方形照片須以 `results.picture.large` 代替
  - 範例元件中的 `Country` 須以 `location.location.country` 代替

### 驗收標準

| 標準         | 說明                           |
| ------------ | ------------------------------ |
| 元件互動效果 | 元件互動效果需與完整版網站一致 |
