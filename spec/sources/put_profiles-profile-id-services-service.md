# Services - Modify

Create or modify a rule for a {service} in a {profile}.

## do

* `0` - Block service domains
* `1` - Bypass service domains (to override Filter block)
* `2` - Spoof service domains to IP
* `3` - redirect service domains via proxy

## status

* `0` - rule is disabled
* `1` - rule is enabled

## via

* In `do=2` mode, this arg  supplies the `A` record or `CNAME`.
* In `do=3` mode, this arg supplies a 3 letter IATA code proxy identifier. View all options via [List Proxies](https://docs.controld.com/reference/get_proxies) .

## via\_v6

* In `do=2` mode, this arg  supplies the `AAAA` record
* No effect when `do=3`

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
    "/profiles/{profile_id}/services/{service}": {
      "put": {
        "summary": "Services - Modify",
        "deprecated": false,
        "description": "Create or modify a rule for a {service} in a {profile}.",
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
            "name": "service",
            "in": "path",
            "description": "Service name",
            "required": true,
            "example": "zoom",
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
                    "description": "Rule status. 0 = disable. 1 = enabled",
                    "example": 1,
                    "type": "integer"
                  },
                  "via": {
                    "description": "Spoof/Redirect target. If SPOOF, this can be an IPv4 or hostname. If REDIRECT, this must be a valid proxy identifier. <<glossary:Via>>",
                    "example": "YYZ",
                    "type": "string"
                  },
                  "via_v6": {
                    "description": "If SPOOF this can be a valid IPv6 address (AAAA record)",
                    "example": "a:bc:d:e:f::",
                    "type": "string"
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
                        "services": {
                          "type": "array",
                          "items": {
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
                            }
                          }
                        }
                      },
                      "required": [
                        "services"
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
                    "services": [
                      {
                        "do": 3,
                        "via": "YYZ",
                        "status": 1
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