# Default Rule - Modify

Returns status of the Default Rule.

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
    "/profiles/{profile_id}/default": {
      "put": {
        "summary": "Default Rule - Modify",
        "deprecated": false,
        "description": "Returns status of the Default Rule.",
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
                    "description": "Rule type. 0 = BLOCK. 1 = BYPASS, 2 = SPOOF, 3 = REDIRECT",
                    "example": 3,
                    "type": "integer"
                  },
                  "via": {
                    "description": "Spoof/Redirect target. If SPOOF, this can be an IP or hostname. If REDIRECT, this must be a valid proxy identifier. ",
                    "example": "JFK",
                    "type": "string"
                  },
                  "status": {
                    "description": "Status of the rule. ",
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
                  "properties": {
                    "body": {
                      "type": "object",
                      "properties": {
                        "default": {
                          "type": "object",
                          "properties": {
                            "do": {
                              "type": "integer"
                            },
                            "via": {
                              "type": "string"
                            },
                            "status": {
                              "type": "integer"
                            }
                          },
                          "required": [
                            "do",
                            "via",
                            "status"
                          ]
                        }
                      },
                      "required": [
                        "default"
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
                    "default": {
                      "do": 3,
                      "via": "JFK",
                      "status": 1
                    }
                  },
                  "success": true
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