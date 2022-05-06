module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    // Xác định nơi bỏ các file testing
    // Thông thường ta sẽ bỏ các file typescript vào hết thư mục src
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    // Jest sẽ dựa vào định dạng này để phát hiện các file
    // cần được testing
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    // ts-jest sẽ xác định các file có dạng này
    // sau đó sẽ biến đổi về dạng nó có thể hiểu được
    // để chạy jest
    "verbose": true,
    // báo cáo các bài test lúc đang chạy
    "globals": {
        "ts-jest": {
            diagnostics: false
        }
    }
    // cái này để các hàm
    // của jest trở thành globals
    // không cần phải require hay import khi dùng nữa
}