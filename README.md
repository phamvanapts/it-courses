Để tạo một dự án React mới tại thư mục hiện hành sử dụng Vite, bạn có thể làm theo các bước dưới đây. Vite là một công cụ build hiện đại cho các dự án frontend, giúp khởi tạo dự án React nhanh chóng hơn so với Create React App.

### Bước 1: Cài đặt Vite và tạo dự án React
Trong thư mục hiện hành của bạn, hãy chạy các lệnh sau:

bash
Copy code
npm create vite@latest .
Sau đó, công cụ sẽ hỏi một số câu hỏi:
Project name: Nhấn Enter để sử dụng tên thư mục hiện tại.
Select a framework: Chọn React.
Select a variant: Chọn JavaScript hoặc TypeScript tùy theo nhu cầu của bạn. Ở đây, mình sẽ chọn JavaScript.
### Bước 2: Cài đặt các dependencies
Sau khi tạo xong, cài đặt các dependencies:

bash
Copy code
npm install
### Bước 3: Chạy dự án
Chạy dự án với lệnh:

bash
Copy code
npm run dev
Sau khi chạy, bạn sẽ thấy URL của máy chủ phát triển, ví dụ: http://localhost:5173. Truy cập vào địa chỉ này để xem dự án React mới của bạn.
### Bước 4: Cấu trúc thư mục
Vite sẽ tạo một cấu trúc thư mục đơn giản như sau:

css
Copy code
.
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
│
├── vite.config.js
└── node_modules/
### Bước 5: Tùy chỉnh dự án (Optional)
Bạn có thể tùy chỉnh App.jsx và tạo các component mới trong thư mục src/.

Ví dụ: src/App.jsx
jsx
Copy code
import React from 'react';

function App() {
    return (
        <div>
            <h1>Welcome to My Vite React App</h1>
            <p>This is a new project using Vite.</p>
        </div>
    );
}

export default App;
Lưu ý:
Vite cung cấp khả năng build nhanh hơn và trải nghiệm phát triển mượt mà hơn so với Create React App.
Để build dự án cho môi trường sản xuất, sử dụng lệnh:
bash
Copy code
npm run build
Để preview dự án sau khi build:
bash
Copy code
npm run preview