# LIst All Services

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
    "/services/categories/{category}": {
      "get": {
        "summary": "LIst All Services",
        "deprecated": false,
        "description": "",
        "tags": [
          "Services"
        ],
        "parameters": [
          {
            "name": "category",
            "in": "path",
            "description": "Category name",
            "required": true,
            "example": "tools",
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
                        "services": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "category": {
                                "type": "string"
                              },
                              "name": {
                                "type": "string"
                              },
                              "unlock_location": {
                                "type": "string"
                              },
                              "PK": {
                                "type": "string"
                              },
                              "locations": {
                                "type": "array",
                                "items": {
                                  "type": "string"
                                }
                              },
                              "warning": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "name",
                              "unlock_location",
                              "category",
                              "PK"
                            ]
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
                        "category": "tools",
                        "name": "Google",
                        "unlock_location": "JFK",
                        "PK": "google"
                      },
                      {
                        "name": "Long Warning Service",
                        "locations": [
                          "ADL"
                        ],
                        "unlock_location": "ADL",
                        "warning": "This service will not work unless you also spoof your GPS location to the chosen city. You can spoof your location services via a browser extension or a 3rd party app. ",
                        "category": "tools",
                        "PK": "longwarning"
                      },
                      {
                        "unlock_location": "JFK",
                        "category": "tools",
                        "name": "Skype",
                        "PK": "skype"
                      },
                      {
                        "category": "tools",
                        "unlock_location": "JFK",
                        "name": "Wikipedia",
                        "PK": "wikipedia"
                      },
                      {
                        "category": "tools",
                        "unlock_location": "JFK",
                        "name": "Zoom",
                        "PK": "zoom"
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