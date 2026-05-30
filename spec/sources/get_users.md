# User Data

Returns all relevant account information of a Control account. 

# OpenAPI definition

```json
{
  "openapi": "3.0.1",
  "info": {
    "title": "Control D Public API",
    "description": "",
    "version": "1.0.1"
  },
  "tags": [
    {
      "name": "Account"
    }
  ],
  "paths": {
    "/users": {
      "get": {
        "summary": "User Data",
        "deprecated": false,
        "description": "Returns all relevant account information of a Control account. ",
        "tags": [
          "Account"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "body": {
                      "type": "object",
                      "properties": {
                        "last_active": {
                          "type": "integer"
                        },
                        "proxy_access": {
                          "type": "integer"
                        },
                        "email_status": {
                          "type": "integer"
                        },
                        "status": {
                          "type": "integer"
                        },
                        "email": {
                          "type": "string"
                        },
                        "date": {
                          "type": "string"
                        },
                        "PK": {
                          "type": "string"
                        },
                        "twofa": {
                          "type": "integer"
                        }
                      },
                      "required": [
                        "last_active",
                        "proxy_access",
                        "email_status",
                        "status",
                        "email",
                        "date",
                        "PK",
                        "twofa"
                      ]
                    },
                    "success": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "body",
                    "success"
                  ]
                },
                "example": {
                  "body": {
                    "last_active": 1669595046,
                    "proxy_access": 1,
                    "email_status": 1,
                    "status": 1,
                    "email": "username@email.com",
                    "date": "2022-11-27",
                    "PK": "4034dvb354",
                    "twofa": 0
                  },
                  "success": true
                }
              }
            }
          }
        },
        "security": []
      }
    }
  },
  "components": {
    "securitySchemes": {
      "bearerAuth": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  },
  "servers": [
    {
      "url": "https://api.controld.com",
      "description": "CD prod"
    }
  ],
  "security": [
    {
      "bearerAuth": []
    }
  ]
}
```