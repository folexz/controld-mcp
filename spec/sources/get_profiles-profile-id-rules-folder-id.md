# Custom Rules - List

Return custom rules in a folder. For root folder, omit the folder ID.

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
    "/profiles/{profile_id}/rules/{folder_id}": {
      "get": {
        "summary": "Custom Rules - List",
        "deprecated": false,
        "description": "Return custom rules in a folder. For root folder, omit the folder ID.",
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
            "name": "folder_id",
            "in": "path",
            "description": "Folder ID (0 or omit for root)",
            "required": true,
            "example": "0",
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
                        "rules": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "PK": {
                                "type": "string"
                              },
                              "order": {
                                "type": "integer"
                              },
                              "group": {
                                "type": "integer"
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
                                  "status"
                                ]
                              }
                            },
                            "required": [
                              "PK",
                              "order",
                              "group",
                              "action"
                            ]
                          }
                        }
                      },
                      "required": [
                        "rules"
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
                    "rules": [
                      {
                        "PK": "ipinfo.io",
                        "order": 8,
                        "group": 0,
                        "action": {
                          "do": 3,
                          "via": "BRU",
                          "status": 1
                        }
                      },
                      {
                        "PK": "wtfismyip.com",
                        "order": 9,
                        "group": 0,
                        "action": {
                          "do": 2,
                          "via": "www.google.com",
                          "status": 1
                        }
                      },
                      {
                        "PK": "test.com",
                        "order": 10,
                        "group": 0,
                        "action": {
                          "do": 0,
                          "status": 1
                        }
                      },
                      {
                        "PK": "derp123.com",
                        "order": 12,
                        "group": 0,
                        "action": {
                          "do": 2,
                          "via": "1.2.3.4",
                          "status": 1
                        }
                      },
                      {
                        "PK": "ads.com",
                        "order": 13,
                        "group": 0,
                        "action": {
                          "do": 1,
                          "status": 1
                        }
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