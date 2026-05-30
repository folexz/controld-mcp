# Services - List

This returns services that have any kind of rule associated with it.

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
    "/profiles/{profile_id}/services": {
      "get": {
        "summary": "Services - List",
        "deprecated": false,
        "description": "This returns services that have any kind of rule associated with it.",
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
                        "services": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "locations": {
                                "type": "array",
                                "items": {
                                  "type": "string"
                                }
                              },
                              "name": {
                                "type": "string"
                              },
                              "unlock_location": {
                                "type": "string"
                              },
                              "warning": {
                                "type": "string"
                              },
                              "category": {
                                "type": "string"
                              },
                              "PK": {
                                "type": "string"
                              },
                              "action": {
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
                                  }
                                },
                                "required": [
                                  "do",
                                  "status"
                                ]
                              }
                            },
                            "required": [
                              "category",
                              "unlock_location",
                              "name",
                              "PK",
                              "action",
                              "locations"
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
                        "locations": [
                          "SYD"
                        ],
                        "name": "10play",
                        "unlock_location": "SYD",
                        "warning": "You'll need to change your device's time zone to Australia. Enabling this service will allow certain Google ad and tracking domains to be loaded in order for it to function.",
                        "category": "video",
                        "PK": "10play",
                        "action": {
                          "do": 1,
                          "status": 0
                        }
                      },
                      {
                        "category": "gaming",
                        "unlock_location": "JFK",
                        "name": "Battle.net",
                        "PK": "blizzard",
                        "action": {
                          "do": 1,
                          "status": 0
                        }
                      },
                      {
                        "name": "Discord",
                        "unlock_location": "JFK",
                        "category": "social",
                        "PK": "discord",
                        "action": {
                          "do": 1,
                          "status": 0
                        }
                      },
                      {
                        "category": "video",
                        "name": "Discovery+",
                        "unlock_location": "JFK",
                        "PK": "discoveryplus",
                        "action": {
                          "do": 1,
                          "status": 0
                        }
                      },
                      {
                        "name": "Disney Plus",
                        "unlock_location": "JFK",
                        "category": "video",
                        "PK": "disney",
                        "action": {
                          "do": 0,
                          "status": 0
                        }
                      },
                      {
                        "unlock_location": "JFK",
                        "category": "shop",
                        "name": "EBay",
                        "PK": "ebay",
                        "action": {
                          "do": 3,
                          "via": "JFK",
                          "status": 0
                        }
                      },
                      {
                        "category": "video",
                        "name": "ESPN+",
                        "unlock_location": "JFK",
                        "PK": "espn",
                        "action": {
                          "do": 3,
                          "via": "JFK",
                          "status": 0
                        }
                      },
                      {
                        "name": "Facebook",
                        "unlock_location": "JFK",
                        "category": "social",
                        "PK": "facebook",
                        "action": {
                          "do": 0,
                          "status": 0
                        }
                      },
                      {
                        "category": "tools",
                        "name": "Google",
                        "unlock_location": "JFK",
                        "PK": "google",
                        "action": {
                          "do": 0,
                          "status": 0
                        }
                      },
                      {
                        "category": "video",
                        "name": "Hulu",
                        "locations": [
                          "RES_ORD",
                          "JFK",
                          "LAX"
                        ],
                        "unlock_location": "RES_ORD",
                        "PK": "hulu",
                        "action": {
                          "do": 3,
                          "via": "RES_ORD",
                          "status": 0
                        }
                      },
                      {
                        "unlock_location": "JFK",
                        "category": "social",
                        "name": "Instagram",
                        "PK": "instagram",
                        "action": {
                          "do": 3,
                          "via": "JFK",
                          "status": 0
                        }
                      },
                      {
                        "unlock_location": "JFK",
                        "category": "tools",
                        "name": "Skype",
                        "PK": "skype",
                        "action": {
                          "do": 0,
                          "status": 0
                        }
                      },
                      {
                        "category": "tools",
                        "unlock_location": "JFK",
                        "name": "Zoom",
                        "PK": "zoom",
                        "action": {
                          "do": 0,
                          "status": 0
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