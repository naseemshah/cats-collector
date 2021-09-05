import sqlite_utils

data = [
    { 
        "id": "id_1",
        "type": "bank-draft",
        "title": "Bank Draft", 
        "position": 0,
        "imageUrl": "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
    },
    { 
        "id": "id_2",
        "type": "bill-of-lading",
        "title": "Bill of Lading",
        "position": 1,
        "imageUrl": "https://images.unsplash.com/photo-1520315342629-6ea920342047?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
    },
    {
        "id": "id_3",
        "type": "invoice",
        "title": "Invoice",
        "position": 2,
        "imageUrl": "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
    },
    {
        "id": "id_4",
        "type": "bank-draft-2",
        "title": "Bank Draft 2",
        "position": 3,
        "imageUrl": "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
    },
    {
        "id": "id_5",
        "type": "bill-of-lading-2",
        "title": "Bill of Lading 2", 
        "position": 4,
        "imageUrl": "https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
    }
]


db = sqlite_utils.Database("cats.db")
db["Cats"].insert_all(data, pk="id")