# Rule Folders - Delete

Delete folder and all custom rules inside it.

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
      "delete": {
        "summary": "Rule Folders - Delete",
        "deprecated": false,
        "description": "Delete folder and all custom rules inside it.",
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
                    "description": "(Optional) Rename the folder.",
                    "example": "New Folder Name",
                    "type": "string"
                  },
                  "do": {
                    "description": "(Optional) Add a rule type to a folder. All rules inside will inherit rule type. ",
                    "example": "3",
                    "type": "string"
                  },
                  "via": {
                    "description": "(Optional) Add spoof IP or hostname, or proxy identiifer if do=2 or do=3. ",
                    "example": "YYZ",
                    "type": "string"
                  },
                  "status": {
                    "description": "Status of the folder and all rules inside.",
                    "example": "1",
                    "type": "string"
                  }
                },
                "required": [
                  "name",
                  "do",
                  "via",
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