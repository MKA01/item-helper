const cors = require('cors');
const express = require('express');
const oracledb = require('oracledb');

const app = express();

let corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};

let products = [
  {
    "id": 1,
    "name": "SSSSS",
    "amount": 4,
    "imageUrl": "https://bit.ly/2oxfCO3"
  },
  {
    "id": 1540751896898,
    "name": "GGGGG",
    "amount": 1,
    "imageUrl": "https://s9.dziennik.pl/pliki/10302000/10302387-maslo-900-553.jpg"
  },
  {
    "id": 1541426714847,
    "name": "BBBBB",
    "amount": 1,
    "imageUrl": "https://ciekawe.org/wp-content/uploads/2016/07/banan-728x546.jpg"
  }
];

app.use(cors(corsOptions));

app.listen(8000, () => {
  console.log('Server is running!!!');
  oracledb.getConnection(
    {
      user          : "msbd23",
      password      : "haslo2018",
      connectString : "155.158.112.45:1521:oltpstud"
    },
    function(err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }

      connection.execute(
        `SELECT manager_id, department_id, department_name FROM departments WHERE manager_id = :id`, [103],  // bind value for :id



        function(err, result) {
          if (err) {
            console.error(err.message);
            doRelease(connection);
            return;
          }
          console.log(result.rows);
          doRelease(connection);
        });
    });

  function doRelease(connection) {
    connection.close(
      function(err) {
        if (err)
          console.error(err.message);
      });
  }
});

app.route('/api/products').get((req, res) => {
  res.send(
    products
  );
});

app.route('/api/products/:id').get((req, res) => {
  const requestedProductId = req.params['id'];
  res.send(
    // products.find(el => el.id === requestedProductId)
    findProduct({requestedProductId})
  );
});

function findProduct(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      console.log(products[i]);
      return products[i];
    }
  }
}
