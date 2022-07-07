export const CONTRACT_ADDRESS = '0xF1d5914e314aB5EFCd1A4d1d5f4eC847738FA4af';
export const CONTRACT_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "reload",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "batch_count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "batchs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "unit",
            "type": "string"
          }
        ],
        "internalType": "struct Cosmetics.ProductInfo",
        "name": "product_info",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "create_at",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "finished_at",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "material_count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "materials",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "order_id",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "unit",
            "type": "string"
          }
        ],
        "internalType": "struct Cosmetics.ProductInfo",
        "name": "mat_info",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "order_count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "orders",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "internalType": "struct Cosmetics.Contact",
        "name": "supplier",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "internalType": "struct Cosmetics.Contact",
        "name": "customer",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "order_date",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "received_date",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "internalType": "struct Cosmetics.Contact",
        "name": "supplier",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "internalType": "struct Cosmetics.Contact",
        "name": "customer",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "unit",
            "type": "string"
          }
        ],
        "internalType": "struct Cosmetics.ProductInfo[]",
        "name": "order_list",
        "type": "tuple[]"
      },
      {
        "internalType": "uint256",
        "name": "rd",
        "type": "uint256"
      }
    ],
    "name": "createOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "internalType": "struct Cosmetics.Contact",
        "name": "supplier",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "internalType": "struct Cosmetics.Contact",
        "name": "customer",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "batch_id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          }
        ],
        "internalType": "struct Cosmetics.ProductOrderInfo[]",
        "name": "order_list",
        "type": "tuple[]"
      },
      {
        "internalType": "uint256",
        "name": "rd",
        "type": "uint256"
      }
    ],
    "name": "createPurchaseProductOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "order_id",
        "type": "uint256"
      },
      {
        "internalType": "enum Cosmetics.ORDER_STATUS",
        "name": "new_status",
        "type": "uint8"
      }
    ],
    "name": "changeOrderStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "order_id",
        "type": "uint256"
      }
    ],
    "name": "receiveMaterialOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isBySupplier",
        "type": "bool"
      }
    ],
    "name": "getOrderList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "internalType": "struct Cosmetics.Contact",
            "name": "supplier",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "internalType": "struct Cosmetics.Contact",
            "name": "customer",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "order_date",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "received_date",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "unit",
                "type": "string"
              }
            ],
            "internalType": "struct Cosmetics.ProductInfo[]",
            "name": "order_list",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "enum Cosmetics.ORDER_STATUS",
                "name": "status",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.OrderEvent[]",
            "name": "timeline",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "batch_id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.ProductOrderInfo[]",
            "name": "product_order_list",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Cosmetics.Order[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getOrderById",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "internalType": "struct Cosmetics.Contact",
            "name": "supplier",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "internalType": "struct Cosmetics.Contact",
            "name": "customer",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "order_date",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "received_date",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "unit",
                "type": "string"
              }
            ],
            "internalType": "struct Cosmetics.ProductInfo[]",
            "name": "order_list",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "enum Cosmetics.ORDER_STATUS",
                "name": "status",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.OrderEvent[]",
            "name": "timeline",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "batch_id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.ProductOrderInfo[]",
            "name": "product_order_list",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Cosmetics.Order",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getPurchaseOrderName",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMaterialList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "order_id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "unit",
                "type": "string"
              }
            ],
            "internalType": "struct Cosmetics.ProductInfo",
            "name": "mat_info",
            "type": "tuple"
          }
        ],
        "internalType": "struct Cosmetics.Material[]",
        "name": "",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "internalType": "struct Cosmetics.Contact",
            "name": "supplier",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "internalType": "struct Cosmetics.Contact",
            "name": "customer",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "order_date",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "received_date",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "unit",
                "type": "string"
              }
            ],
            "internalType": "struct Cosmetics.ProductInfo[]",
            "name": "order_list",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "enum Cosmetics.ORDER_STATUS",
                "name": "status",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.OrderEvent[]",
            "name": "timeline",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "batch_id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.ProductOrderInfo[]",
            "name": "product_order_list",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Cosmetics.Order[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "unit",
            "type": "string"
          }
        ],
        "internalType": "struct Cosmetics.ProductInfo",
        "name": "product_info",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "mat_id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "check_result",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "check_timestamp",
            "type": "uint256"
          }
        ],
        "internalType": "struct Cosmetics.ProductMaterial[]",
        "name": "mat_list",
        "type": "tuple[]"
      },
      {
        "internalType": "uint256",
        "name": "sd",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ed",
        "type": "uint256"
      }
    ],
    "name": "createProductBatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batch_id",
        "type": "uint256"
      },
      {
        "internalType": "enum Cosmetics.BATCH_STATUS",
        "name": "new_status",
        "type": "uint8"
      }
    ],
    "name": "changeProductBatchStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batch_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "check_result",
        "type": "string"
      }
    ],
    "name": "addProductMaterialCheck",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batch_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "addProduceInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batch_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "finishProduce",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batch_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "result",
        "type": "string"
      }
    ],
    "name": "addProductCheck",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "enum Cosmetics.BATCH_STATUS",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "bool",
        "name": "isByStatus",
        "type": "bool"
      }
    ],
    "name": "getProductBatchList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "unit",
                "type": "string"
              }
            ],
            "internalType": "struct Cosmetics.ProductInfo",
            "name": "product_info",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "create_at",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "finished_at",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "mat_id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "check_result",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "check_timestamp",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.ProductMaterial[]",
            "name": "mat_list",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "started_at",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "finished_at",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.ProduceInfo[]",
            "name": "produce_list",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "result",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.ProductCheck[]",
            "name": "check_list",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "enum Cosmetics.BATCH_STATUS",
                "name": "status",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.BatchEvent[]",
            "name": "timeline",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Cosmetics.ProductBatch[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "batch_id",
        "type": "uint256"
      }
    ],
    "name": "getProductBatch",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "unit",
                "type": "string"
              }
            ],
            "internalType": "struct Cosmetics.ProductInfo",
            "name": "product_info",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "create_at",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "finished_at",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "mat_id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "check_result",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "check_timestamp",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.ProductMaterial[]",
            "name": "mat_list",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "started_at",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "finished_at",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.ProduceInfo[]",
            "name": "produce_list",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "result",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.ProductCheck[]",
            "name": "check_list",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "enum Cosmetics.BATCH_STATUS",
                "name": "status",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.BatchEvent[]",
            "name": "timeline",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Cosmetics.ProductBatch",
        "name": "",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "order_id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "unit",
                "type": "string"
              }
            ],
            "internalType": "struct Cosmetics.ProductInfo",
            "name": "mat_info",
            "type": "tuple"
          }
        ],
        "internalType": "struct Cosmetics.Material[]",
        "name": "",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "internalType": "struct Cosmetics.Contact",
            "name": "supplier",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "internalType": "struct Cosmetics.Contact",
            "name": "customer",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "order_date",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "received_date",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "unit",
                "type": "string"
              }
            ],
            "internalType": "struct Cosmetics.ProductInfo[]",
            "name": "order_list",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "enum Cosmetics.ORDER_STATUS",
                "name": "status",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.OrderEvent[]",
            "name": "timeline",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "batch_id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              }
            ],
            "internalType": "struct Cosmetics.ProductOrderInfo[]",
            "name": "product_order_list",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Cosmetics.Order[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];