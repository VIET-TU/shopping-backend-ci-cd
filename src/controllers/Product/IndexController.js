const { products } = require('../../products.json');

class ProductIndexController {
    constructor(redisClientService) {
        this.redisClientService = redisClientService;
    }

    async index(req, res) {
        const productKeys = await this.redisClientService.scan('product:*'); // Lưu ý rằng việc sử dụng SCAN là một cách hiệu quả để duyệt qua các key trong Redis mà không ảnh hưởng đến hiệu suất của server, đặc biệt là trong các cơ sở dữ liệu có nhiều key.
        const productList = [];

        console.log(productKeys);

        if (productKeys.length) {
            for (const key of productKeys) {
                const product = await this.redisClientService.jsonGet(key);
                console.log('product :>> ', product);
                productList.push(JSON.parse(product));
            }
            return res.send(productList);
        }

        for (const product of products) {
            const { id } = product;

            await this.redisClientService.jsonSet(`product:${id}`, '.', JSON.stringify(product));

            productList.push(product);
        }

        return res.send(productList);
    }
}

module.exports = ProductIndexController;
