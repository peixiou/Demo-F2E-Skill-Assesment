# JavaScript 測試第一題

### 題目說明

此題目會有三個小題，請依照下方題目說明寫出能回傳正確答案的方法

##### 第一小題：奇偶數確認

- 此方法會傳入一個參數 num，num 的範圍只會是正整數，不會有負數。如果傳入的參數是奇數回傳 **false**，若傳入參數是偶數則回傳 **true**

**傳入參數範例表**

| 傳入參數 num | 方法回傳值 |
| ------------ | ---------- |
| 100          | 偶數       |
| 1            | 奇數       |
| 0            | 偶數       |

##### 第二小題：陣列加總

- 此方法會傳入一個參數 arr，arr 中的數字可以假設為正整數，方法會回傳此陣列中所有數值的加總

- 若是傳入參數為空陣列，則回傳 0

- 若傳入參數的陣列值有遇到非數字，則要拋出 TypeError

**傳入參數範例表**

| 傳入參數 arr    | 方法回傳值     |
| --------------- | -------------- |
| [1, 2, 3]       | 6              |
| []              | 0              |
| [1,2,3, "test"] | 拋出 TypeError |

##### 第三小題：在陣列中的物件尋找值

- 此方法會傳入三個參數，分別是 arr, key 跟 value；此方法會去判斷傳入的陣列中（arr），裡面物件的鍵值（key）有沒有對應的數值 (value)，若無則回傳 null

- 可以假設傳入的 key 值一定會包含在資料裡面，不會發生陣列中的物件沒有傳入參數的鍵值，並且陣列中的所有物件的數值都是獨特的，不會有重複資料

**傳入參數範例表**

```js
let const testData = [
    { name: "john", age: 24 },
    { name: "kim", age: 27 },
    { name: "henry", age: 45 },
    { name: "russle", age: 18 },
    { name: "joe", age: 40 }]
```

| 傳入參數 arr | 傳入參數值 key | 傳入參數值 valye | 方法回傳值 |
| ------------ | -------------- | ---------------- | ---------- |
| `testData`   | "name"         | "john"           | "john"     |
| `testData`   | "age"          | 27               | 27         |
| `testData`   | "age"          | 99               | null       |

### 驗收標準

| 標準               | 說明                       |
| ------------------ | -------------------------- |
| 第一題通過單元測試 | 第一題的方法需通過單元測試 |
| 第二題通過單元測試 | 第二題的方法需通過單元測試 |
| 第三題通過單元測試 | 第三題的方法需通過單元測試 |