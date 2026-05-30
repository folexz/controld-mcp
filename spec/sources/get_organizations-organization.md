# View Organization Info

View details of an organization.

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
    "/organizations/organization": {
      "get": {
        "summary": "View Organization Info",
        "deprecated": false,
        "description": "View details of an organization.",
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
                        "organization": {
                          "type": "object",
                          "properties": {
                            "website": {
                              "type": "string"
                            },
                            "address": {
                              "type": "string"
                            },
                            "max_profiles": {
                              "type": "integer"
                            },
                            "status": {
                              "type": "integer"
                            },
                            "stats_endpoint": {
                              "type": "string"
                            },
                            "max_users": {
                              "type": "integer"
                            },
                            "max_legacy_resolvers": {
                              "type": "integer"
                            },
                            "name": {
                              "type": "string"
                            },
                            "price_users": {
                              "type": "integer"
                            },
                            "date": {
                              "type": "string"
                            },
                            "max_routers": {
                              "type": "integer"
                            },
                            "price_routers": {
                              "type": "integer"
                            },
                            "max_sub_orgs": {
                              "type": "integer"
                            },
                            "contact_email": {
                              "type": "string"
                            },
                            "PK": {
                              "type": "string"
                            },
                            "members": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "integer"
                                }
                              },
                              "required": [
                                "count"
                              ]
                            },
                            "profiles": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "integer"
                                },
                                "max": {
                                  "type": "integer"
                                }
                              },
                              "required": [
                                "count",
                                "max"
                              ]
                            },
                            "users": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "integer"
                                },
                                "max": {
                                  "type": "integer"
                                },
                                "price": {
                                  "type": "integer"
                                }
                              },
                              "required": [
                                "count",
                                "max",
                                "price"
                              ]
                            },
                            "routers": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "integer"
                                },
                                "max": {
                                  "type": "integer"
                                },
                                "price": {
                                  "type": "integer"
                                }
                              },
                              "required": [
                                "count",
                                "max",
                                "price"
                              ]
                            },
                            "sub_organizations": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "integer"
                                },
                                "max": {
                                  "type": "integer"
                                }
                              },
                              "required": [
                                "count",
                                "max"
                              ]
                            }
                          },
                          "required": [
                            "website",
                            "address",
                            "max_profiles",
                            "status",
                            "stats_endpoint",
                            "max_users",
                            "max_legacy_resolvers",
                            "name",
                            "price_users",
                            "date",
                            "max_routers",
                            "price_routers",
                            "max_sub_orgs",
                            "contact_email",
                            "PK",
                            "members",
                            "profiles",
                            "users",
                            "routers",
                            "sub_organizations"
                          ]
                        }
                      },
                      "required": [
                        "organization"
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
                    "organization": {
                      "website": "windscribe.com",
                      "address": "123 Totally Real St, Toronto",
                      "max_profiles": 100,
                      "status": 1,
                      "stats_endpoint": "jfk-org01",
                      "max_users": 400,
                      "max_legacy_resolvers": 10,
                      "name": "Main Inc",
                      "price_users": 2,
                      "date": "2023-08-03",
                      "max_routers": 10,
                      "price_routers": 10,
                      "max_sub_orgs": 5,
                      "contact_email": "yegors+o1@gmail.com",
                      "PK": "77dvawsb",
                      "members": {
                        "count": 2
                      },
                      "profiles": {
                        "count": 3,
                        "max": 100
                      },
                      "users": {
                        "count": 4,
                        "max": 400,
                        "price": 2
                      },
                      "routers": {
                        "count": 3,
                        "max": 10,
                        "price": 10
                      },
                      "sub_organizations": {
                        "count": 3,
                        "max": 5
                      }
                    }
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