# List Service Categories

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
      "name": "Services"
    }
  ],
  "paths": {
    "/services/categories": {
      "get": {
        "summary": "List Service Categories",
        "deprecated": false,
        "description": "",
        "tags": [
          "Services"
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
                        "categories": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "PK": {
                                "type": "string"
                              },
                              "name": {
                                "type": "string"
                              },
                              "description": {
                                "type": "string"
                              },
                              "count": {
                                "type": "integer"
                              }
                            },
                            "required": [
                              "PK",
                              "name",
                              "description",
                              "count"
                            ]
                          }
                        }
                      },
                      "required": [
                        "categories"
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
                    "categories": [
                      {
                        "PK": "audio",
                        "name": "Audio",
                        "description": "Audio streaming services and radio stations",
                        "count": 7
                      },
                      {
                        "PK": "gaming",
                        "name": "Gaming",
                        "description": "Gaming services and individual online games",
                        "count": 8
                      },
                      {
                        "PK": "shop",
                        "name": "Shop",
                        "description": "Shopping and auction websites",
                        "count": 2
                      },
                      {
                        "PK": "social",
                        "name": "Social",
                        "description": "Social networks and messaging tools",
                        "count": 19
                      },
                      {
                        "PK": "tools",
                        "name": "Tools",
                        "description": "Productivity tools and knowledge bases",
                        "count": 6
                      },
                      {
                        "PK": "video",
                        "name": "Video",
                        "description": "Video streaming services and live TV channels",
                        "count": 122
                      }
                    ]
                  },
                  "success": true
                }
              }
            }
          }
        },
        "security": []
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