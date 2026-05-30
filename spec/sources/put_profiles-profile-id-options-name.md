# Profiles - Modify Options

Set an option on a profile.

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
      "name": "Profiles"
    }
  ],
  "paths": {
    "/profiles/{profile_id}/options/{name}": {
      "put": {
        "summary": "Profiles - Modify Options",
        "deprecated": false,
        "description": "Set an option on a profile.",
        "tags": [
          "Profiles"
        ],
        "parameters": [
          {
            "name": "profile_id",
            "in": "path",
            "description": "Primary key (PK) of the profile",
            "required": true,
            "example": "abcd123",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "name",
            "in": "path",
            "description": "Option name",
            "required": true,
            "example": "block_rfc1918",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "Content-Type",
            "in": "header",
            "description": "",
            "required": true,
            "example": "application/x-www-form-urlencoded",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "status": {
                    "description": "Status of the Profile Option. 1 to enable, 0 to disable",
                    "example": 1,
                    "type": "integer"
                  },
                  "value": {
                    "description": "Optional value of the option to set",
                    "example": "something",
                    "type": "string"
                  }
                },
                "required": [
                  "status"
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