# Delete Learned IP

Deauthorize an IP from a device. Only useful for restricted devices, or devices that have Legacy Resolvers.

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
      "name": "Access"
    }
  ],
  "paths": {
    "/access": {
      "delete": {
        "summary": "Delete Learned IP",
        "deprecated": false,
        "description": "Deauthorize an IP from a device. Only useful for restricted devices, or devices that have Legacy Resolvers.",
        "tags": [
          "Access"
        ],
        "parameters": [],
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "device_id": {
                    "description": "Primary key of the device.",
                    "example": "abcd1234",
                    "type": "string"
                  },
                  "ips[]": {
                    "description": "IPv4 or IPv6 addresses",
                    "example": [
                      "1.2.3.4"
                    ],
                    "type": "array"
                  }
                },
                "required": [
                  "device_id",
                  "ips[]"
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              }
            }
          }
        },
        "security": [
          {
            "bearerAuth": []
          }
        ]
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