# Rule Folders - Modify

Modify an existing folder.

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
    "/profiles/{profile_id}/groups/{folder}": {
      "put": {
        "summary": "Rule Folders - Modify",
        "deprecated": false,
        "description": "Modify an existing folder.",
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
            "name": "folder",
            "in": "path",
            "description": "Folder ID",
            "required": true,
            "example": "2",
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
                    "description": "Rename the folder to this name",
                    "example": "New Folder Name",
                    "type": "string"
                  },
                  "do": {
                    "description": "Add a rule type to a folder. All rules inside will inherit rule type",
                    "example": 3,
                    "type": "integer"
                  },
                  "via": {
                    "description": "Add spoof IP or hostname, or proxy identifer if do=2 or do=3",
                    "example": "YYZ",
                    "type": "string"
                  },
                  "status": {
                    "description": "Status of the folder and all rules inside",
                    "example": 1,
                    "type": "integer"
                  }
                },
                "required": [
                  "do",
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