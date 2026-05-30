# Profiles - Modify

Modify an existing profile.

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
    "/profiles/{profile_id}": {
      "put": {
        "summary": "Profiles - Modify",
        "deprecated": false,
        "description": "Modify an existing profile.",
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
                    "description": "Rename profile to this name",
                    "example": "New Profile Name",
                    "type": "string"
                  },
                  "disable_ttl": {
                    "description": "Disable profile until specified unix timestamp. ttl = 0 disables previous deactivation.",
                    "example": 0,
                    "type": "integer"
                  },
                  "lock_status": {
                    "description": "Lock/unlock a profile from being edited. ",
                    "example": 1,
                    "type": "integer"
                  },
                  "lock_message": {
                    "description": "Optional message to error our with when locked profile is modified",
                    "example": "Don't touch this, no matter what",
                    "type": "string"
                  },
                  "password": {
                    "description": "Account password when unlocking a profile",
                    "example": "hunter2",
                    "type": "string"
                  }
                }
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