# Rule Folders - LIst

Return all folders in a profile. These can be used to group custom rules.

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
    "/profiles/{profile_id}/groups": {
      "get": {
        "summary": "Rule Folders - LIst",
        "deprecated": false,
        "description": "Return all folders in a profile. These can be used to group custom rules.",
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
                        "groups": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "PK": {
                                "type": "integer"
                              },
                              "group": {
                                "type": "string"
                              },
                              "action": {
                                "type": "object",
                                "properties": {
                                  "status": {
                                    "type": "integer"
                                  },
                                  "do": {
                                    "type": "integer"
                                  }
                                },
                                "required": [
                                  "do",
                                  "status"
                                ]
                              },
                              "count": {
                                "type": "integer"
                              }
                            },
                            "required": [
                              "PK",
                              "group",
                              "action",
                              "count"
                            ]
                          }
                        }
                      },
                      "required": [
                        "groups"
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
                    "groups": [
                      {
                        "PK": 2,
                        "group": "Abc 123",
                        "action": {
                          "status": 1
                        },
                        "count": 3
                      },
                      {
                        "PK": 3,
                        "group": "Block Everything",
                        "action": {
                          "do": 0,
                          "status": 1
                        },
                        "count": 1
                      }
                    ]
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