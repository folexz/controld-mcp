# Custom Rules - Modify

Modify an existing custom rule.

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
    "/profiles/{profile_id}/rules": {
      "put": {
        "summary": "Custom Rules - Modify",
        "deprecated": false,
        "description": "Modify an existing custom rule.",
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
          }
        ],
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "do": {
                    "description": "Rule type. 0 = BLOCK. 1 = BYPASS, 2 = SPOOF, 3 = REDIRECT.",
                    "example": 3,
                    "type": "integer"
                  },
                  "status": {
                    "description": "Status of the rule. ",
                    "example": 1,
                    "type": "integer"
                  },
                  "via": {
                    "description": "Spoof/Redirect target. If SPOOF, this can be an IP or hostname. If REDIRECT, this must be a valid proxy identifier. <<glossary:Via>>",
                    "example": "JFK",
                    "type": "string"
                  },
                  "via_v6": {
                    "description": "If SPOOF this can be a valid IPv6 address (AAAA record)",
                    "example": "a:b:c:d:e:f::",
                    "type": "string"
                  },
                  "group": {
                    "description": "ID of the folder to create this rule in. ",
                    "example": 2,
                    "type": "integer"
                  },
                  "hostnames[]": {
                    "description": "Array of hostnames",
                    "example": "domain1.com",
                    "type": "array"
                  }
                },
                "required": [
                  "do",
                  "status",
                  "hostnames[]"
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