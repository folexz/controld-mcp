# View Members

View organization membership

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
      "name": "Organization"
    }
  ],
  "paths": {
    "/organizations/members": {
      "get": {
        "summary": "View Members",
        "deprecated": false,
        "description": "View organization membership",
        "tags": [
          "Organization"
        ],
        "parameters": [],
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
                        "members": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "PK": {
                                "type": "string"
                              },
                              "email": {
                                "type": "string"
                              },
                              "last_active": {
                                "type": "integer"
                              },
                              "twofa": {
                                "type": "integer"
                              },
                              "status": {
                                "type": "integer"
                              },
                              "permission": {
                                "type": "object",
                                "properties": {
                                  "level": {
                                    "type": "integer"
                                  },
                                  "printable": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "level",
                                  "printable"
                                ]
                              }
                            },
                            "required": [
                              "PK",
                              "email",
                              "last_active",
                              "twofa",
                              "status",
                              "permission"
                            ]
                          }
                        }
                      },
                      "required": [
                        "members"
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
                    "members": [
                      {
                        "PK": "4754dvah8u",
                        "email": "yegors+o1@gmail.com",
                        "last_active": 1694570241,
                        "twofa": 0,
                        "status": 1,
                        "permission": {
                          "level": 100,
                          "printable": "Owner"
                        }
                      },
                      {
                        "PK": "4802dva5iv",
                        "email": "yegors+o2@gmail.com",
                        "last_active": 1692150100,
                        "twofa": 0,
                        "status": 1,
                        "permission": {
                          "level": 1,
                          "printable": "Viewer"
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