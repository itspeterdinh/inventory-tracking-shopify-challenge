# Inventory Tracking Application

### Step by step instruction
1/ Clone the project repository to your IDE\
2/ In the terminal, run "npm start"\
3/ Test the APIs:\
- Create new Item:\
POST 127.0.0.1:3000/api/v1/items\
{\
    "name": "TestItem2",\
    "productCode": "T2",\
    "price": 9.99,\
    "quantity": 50\
}
- Get all Item:\
GET 127.0.0.1:3000/api/v1/items\
- Get one item:
GET 127.0.0.1:3000/api/v1/items/:id\
- Update Item
PATCH 127.0.0.1:3000/api/v1/items/61ddece92853c34700f5b7a1\
{\
    "price": 1299,\
    "quantity": 50\
}
- Delete Item\
DELETE 127.0.0.1:3000/api/v1/items/:id\
