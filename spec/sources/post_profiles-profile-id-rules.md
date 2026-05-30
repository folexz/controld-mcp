# Custom Rules - Create

Create one or more custom rules.

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
      "post": {
        "summary": "Custom Rules - Create",
        "deprecated": false,
        "description": "Create one or more custom rules.",
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
                    "description": "Rule type. 0 = BLOCK. 1 = BYPASS, 2 = SPOOF, 3 = REDIRECT. <<glossary:Do>>",
                    "example": 3,
                    "type": "integer"
                  },
                  "status": {
                    "description": "Status of the rule",
                    "example": 1,
                    "type": "integer"
                  },
                  "via": {
                    "description": "Spoof/Redirect target. If SPOOF, this can be an IPv4 or hostname. If REDIRECT, this must be a valid proxy identifier. <<glossary:Via>>",
                    "example": "JFK",
                    "type": "string"
                  },
                  "via_v6": {
                    "description": "If SPOOF this can be a valid IPv6 address (AAAA record)",
                    "example": "a:b:c:d:e:f::",
                    "type": "string"
                  },
                  "group": {
                    "description": "Optional ID of the folder to create this rule in, root folder if ommited",
                    "example": 2,
                    "type": "integer"
                  },
                  "hostnames[]": {
                    "description": "Array of hostnames",
                    "example": [
                      "domain1.com",
                      "domain2.com"
                    ],
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
                  "properties": {
                    "body": {
                      "type": "object",
                      "properties": {
                        "rules": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "do": {
                                "type": "integer"
                              },
                              "status": {
                                "type": "integer"
                              },
                              "via": {
                                "type": "string"
                              },
                              "group": {
                                "type": "integer"
                              },
                              "order": {
                                "type": "integer"
                              }
                            }
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
                        "do": 3,
                        "status": 1,
                        "via": "JFK",
                        "group": 0,
                        "order": 26
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