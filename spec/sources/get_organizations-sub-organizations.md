# View Sub-Organizations

View sub-organizations and their details.

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
    "/organizations/sub_organizations": {
      "get": {
        "summary": "View Sub-Organizations",
        "deprecated": false,
        "description": "View sub-organizations and their details.",
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
                        "sub_organizations": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "contact_name": {
                                "type": "string"
                              },
                              "stats_endpoint": {
                                "type": "string"
                              },
                              "max_legacy_resolvers": {
                                "type": "integer"
                              },
                              "max_profiles": {
                                "type": "integer"
                              },
                              "max_routers": {
                                "type": "integer"
                              },
                              "max_users": {
                                "type": "integer"
                              },
                              "parent_org": {
                                "type": "object",
                                "properties": {
                                  "name": {
                                    "type": "string"
                                  },
                                  "PK": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "name",
                                  "PK"
                                ]
                              },
                              "twofa_req": {
                                "type": "integer"
                              },
                              "contact_email": {
                                "type": "string"
                              },
                              "status": {
                                "type": "integer"
                              },
                              "date": {
                                "type": "string"
                              },
                              "name": {
                                "type": "string"
                              },
                              "parent_profile": {
                                "type": "object",
                                "properties": {
                                  "PK": {
                                    "type": "string"
                                  },
                                  "updated": {
                                    "type": "integer"
                                  },
                                  "name": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "PK",
                                  "updated",
                                  "name"
                                ]
                              },
                              "website": {
                                "type": "string"
                              },
                              "address": {
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
                              "contact_name",
                              "stats_endpoint",
                              "max_legacy_resolvers",
                              "max_profiles",
                              "max_routers",
                              "max_users",
                              "parent_org",
                              "twofa_req",
                              "contact_email",
                              "status",
                              "date",
                              "name",
                              "PK",
                              "members",
                              "profiles",
                              "users",
                              "routers",
                              "sub_organizations"
                            ]
                          }
                        }
                      },
                      "required": [
                        "sub_organizations"
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
                    "sub_organizations": [
                      {
                        "contact_name": "Mr Manager",
                        "stats_endpoint": "america",
                        "max_legacy_resolvers": 10,
                        "max_profiles": 100,
                        "max_routers": 1,
                        "max_users": 50,
                        "parent_org": {
                          "name": "Main Inc",
                          "PK": "77dvawsb"
                        },
                        "twofa_req": 0,
                        "contact_email": "me@manager.com",
                        "status": 1,
                        "date": "2023-08-03",
                        "name": "Managed Inc",
                        "parent_profile": {
                          "PK": "5083dvaa2l",
                          "updated": 1693941369,
                          "name": "Main Policy"
                        },
                        "website": "managed.inc",
                        "address": "123 Whatever Ave",
                        "PK": "79dvapdo",
                        "members": {
                          "count": 1
                        },
                        "profiles": {
                          "count": 2,
                          "max": 100
                        },
                        "users": {
                          "count": 2,
                          "max": 50,
                          "price": 2
                        },
                        "routers": {
                          "count": 1,
                          "max": 1,
                          "price": 10
                        },
                        "sub_organizations": {
                          "count": 0,
                          "max": 0
                        }
                      },
                      {
                        "contact_name": "wefef",
                        "stats_endpoint": "ams-org01",
                        "max_legacy_resolvers": 10,
                        "max_profiles": 100,
                        "max_routers": 0,
                        "max_users": 10,
                        "parent_org": {
                          "name": "Main Inc",
                          "PK": "77dvawsb"
                        },
                        "twofa_req": 1,
                        "contact_email": "wefwe@fewef.com",
                        "status": 1,
                        "date": "2023-08-04",
                        "name": "123 DNS Ave",
                        "PK": "87dva6xy",
                        "members": {
                          "count": 0
                        },
                        "profiles": {
                          "count": 1,
                          "max": 100
                        },
                        "users": {
                          "count": 0,
                          "max": 10,
                          "price": 2
                        },
                        "routers": {
                          "count": 0,
                          "max": 0,
                          "price": 10
                        },
                        "sub_organizations": {
                          "count": 0,
                          "max": 0
                        }
                      },
                      {
                        "contact_name": "rgeerg",
                        "stats_endpoint": "america",
                        "max_legacy_resolvers": 10,
                        "max_profiles": 100,
                        "max_routers": 3,
                        "max_users": 30,
                        "parent_org": {
                          "name": "Main Inc",
                          "PK": "77dvawsb"
                        },
                        "twofa_req": 1,
                        "contact_email": "rger@efwef.com",
                        "status": 1,
                        "date": "2023-08-04",
                        "name": "Team Bravo",
                        "PK": "90dva6tf",
                        "members": {
                          "count": 0
                        },
                        "profiles": {
                          "count": 0,
                          "max": 100
                        },
                        "users": {
                          "count": 0,
                          "max": 30,
                          "price": 2
                        },
                        "routers": {
                          "count": 0,
                          "max": 3,
                          "price": 10
                        },
                        "sub_organizations": {
                          "count": 0,
                          "max": 0
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