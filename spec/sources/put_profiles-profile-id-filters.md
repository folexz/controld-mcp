# Filters - Batch Modify

Enable or disable multiple filters on a specified {profile}, which is the value of PK from the List endpoint.

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
    "/profiles/{profile_id}/filters": {
      "put": {
        "summary": "Filters - Batch Modify",
        "deprecated": false,
        "description": "Enable or disable multiple filters on a specified {profile}, which is the value of PK from the List endpoint.",
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
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "filters": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "filter": {
                          "type": "string",
                          "description": "Filter name from the List FIlters endpoint"
                        },
                        "status": {
                          "type": "integer",
                          "enum": [
                            0,
                            1
                          ],
                          "minimum": 0,
                          "maximum": 1,
                          "description": "Desired status of the filter. disabled (0) or enabled (1)"
                        }
                      },
                      "required": [
                        "filter",
                        "status"
                      ]
                    }
                  }
                },
                "required": [
                  "filters"
                ]
              },
              "example": {
                "filters": [
                  {
                    "filter": "ads",
                    "status": 1
                  },
                  {
                    "filter": "malware",
                    "status": 1
                  },
                  {
                    "filter": "porn_strict",
                    "status": 1
                  },
                  {
                    "filter": "gambling",
                    "status": 1
                  }
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
                        "filters": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        }
                      },
                      "required": [
                        "filters"
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
                "examples": {
                  "1": {
                    "summary": "Success",
                    "value": {
                      "body": {
                        "filters": {
                          "malware": {
                            "do": 0,
                            "status": 1
                          },
                          "gambling": {
                            "do": 0,
                            "status": 1
                          },
                          "fakenews": {
                            "do": 0,
                            "status": 1
                          },
                          "ads_small": {
                            "do": 0,
                            "status": 1
                          },
                          "porn_strict": {
                            "do": 0,
                            "status": 1
                          }
                        }
                      },
                      "success": true
                    }
                  },
                  "2": {
                    "summary": "Exception",
                    "value": {
                      "body": [],
                      "success": false,
                      "error": {
                        "date": "Wed, 11 Mar 2026 21:52:24 -0400",
                        "message": "Invalid filter name 'foo' at index 0",
                        "code": 40003
                      }
                    }
                  }
                }
              }
            },
            "headers": {}
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