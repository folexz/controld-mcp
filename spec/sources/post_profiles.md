# Profiles - Create

Create a new blank profile, or clone an existing one.

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
    "/profiles": {
      "post": {
        "summary": "Profiles - Create",
        "deprecated": false,
        "description": "Create a new blank profile, or clone an existing one.",
        "tags": [
          "Profiles"
        ],
        "parameters": [
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
                  "name": {
                    "description": "Name of the new profile",
                    "example": "My Profile Name",
                    "type": "string"
                  },
                  "clone_profile_id": {
                    "description": "Primary key of profile to clone. If ommited, a blank profile is created.",
                    "example": "abcd1234",
                    "type": "string"
                  }
                },
                "required": [
                  "name"
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