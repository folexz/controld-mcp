# Return IP

Returns current IP and datacenter that was used to handle the API request.

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
      "name": "Misc"
    }
  ],
  "paths": {
    "/ip": {
      "get": {
        "summary": "Return IP",
        "deprecated": false,
        "description": "Returns current IP and datacenter that was used to handle the API request.",
        "tags": [
          "Misc"
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
                        "ip": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        },
                        "org": {
                          "type": "string"
                        },
                        "country": {
                          "type": "string"
                        },
                        "handler": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "ip",
                        "type",
                        "org",
                        "country",
                        "handler"
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
                    "ip": "66.207.0.0",
                    "type": "v4",
                    "org": "Beanfield Technologies",
                    "country": "CA",
                    "handler": "dva-h01"
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