# Delete Device

Delete an Endpoint. This will break DNS on any physical gadget that uses this Device's unique DNS resolvers.

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
      "name": "Endpoints"
    }
  ],
  "paths": {
    "/devices/{device_id}": {
      "delete": {
        "summary": "Delete Endpoint",
        "deprecated": false,
        "description": "Delete an Endpoint. This will break DNS on any physical gadget that uses this Device's unique DNS resolvers.",
        "tags": [
          "Endpoints"
        ],
        "parameters": [
          {
            "name": "device_id",
            "in": "path",
            "description": "Device/Resolver ID",
            "required": true,
            "example": "abcdefg",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "body": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "success": {
                      "type": "boolean"
                    },
                    "message": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "body",
                    "success",
                    "message"
                  ]
                },
                "example": {
                  "body": [],
                  "success": true,
                  "message": "Device has been deleted"
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