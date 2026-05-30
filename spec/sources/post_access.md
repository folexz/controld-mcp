# Learn New IP

Supply an array of IPs to authorize on the device. These IPs will be able to use the Legacy DNS IPv4 resolver and have access to proxies. If this is a restricted device, then only these IPs will be able to communicate with it.

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
      "post": {
        "summary": "Learn New IP",
        "deprecated": false,
        "description": "Supply an array of IPs to authorize on the device. These IPs will be able to use the Legacy DNS IPv4 resolver and have access to proxies. If this is a restricted device, then only these IPs will be able to communicate with it.",
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
                      "1.2.3.4",
                      "a:b:c:d:e:f::"
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