## redis scan

// Lưu ý rằng việc sử dụng SCAN là một cách hiệu quả để duyệt qua các key trong Redis mà không ảnh hưởng đến hiệu suất của server, đặc biệt là trong các cơ sở dữ liệu có nhiều key.

const [newCursor, matchingKeys] = await this.redis.scan(cursor, 'MATCH', pattern);

-> Con trỏ mới (newCursor): "13"

-> Điều này chỉ ra rằng quá trình quét đã hoàn thành và không còn dữ liệu nào để quét nữa. Con trỏ "13" thường được sử dụng để báo hiệu rằng không có dữ liệu mới và quá trình quét đã kết thúc.

1. "product:97a19842-db31-4537-9241-5053d7c96239"
2. "product:6d6ca89d-fbc2-4fc2-93d0-6ee46ae97345"
3. "product:efe0c7a3-9835-4dfb-87e1-575b7d06701a"
4. "product:x341115a-63d2-42ce-8fe0-5f696ecdfca6"
5. "product:f9a6d214-1c38-47ab-a61c-c99a59438b12"
6. "product:e182115a-63d2-42ce-8fe0-5f696ecdfba6"
7. "product:42860491-9f15-43d4-adeb-0db2cc99174a"
