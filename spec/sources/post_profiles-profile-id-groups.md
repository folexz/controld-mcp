# Rule Folders - Create

Create a new folder and assign it an optional rule.

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
      "post": {
        "summary": "Rule Folders - Create",
        "deprecated": false,
        "description": "Create a new folder and assign it an optional rule.",
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
                  "name": {
                    "description": "Name of your folder",
                    "example": "Folder Name",
                    "type": "string"
                  },
                  "do": {
                    "description": "Add a rule type to a folder. All rules inside will inherit rule type. 0 = BLOCK. 1 = BYPASS, 2 = SPOOF, 3 = REDIRECT",
                    "example": 3,
                    "type": "integer"
                  },
                  "via": {
                    "description": "Add spoof IP or hostname, or proxy identiifer if do=2 or do=3.",
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
                  "name",
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
                              },
                              "count": {
                                "type": "integer"
                              }
                            }
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
                        "PK": 5,
                        "group": "Folder Name 2",
                        "action": {
                          "do": 3,
                          "via": "YYZ",
                          "status": 1
                        },
                        "count": 0
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