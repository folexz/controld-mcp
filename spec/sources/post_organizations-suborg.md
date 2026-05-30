# Create Sub-Organization

Create a new Sub-Organization.

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
    "/organizations/suborg": {
      "post": {
        "summary": "Create Sub-Organization",
        "deprecated": false,
        "description": "Create a new Sub-Organization.",
        "tags": [
          "Organization"
        ],
        "parameters": [],
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "description": "(Required) Organization name",
                    "example": "Managed Inc",
                    "type": "string"
                  },
                  "contact_email": {
                    "description": "(Required) Primary contact for this sub-organization",
                    "example": "contact@email.com",
                    "type": "string"
                  },
                  "twofa_req": {
                    "description": "(Required) Is 2FA/MFA required for memberts of this org. 0 = no, 1 = yes",
                    "example": 1,
                    "type": "integer"
                  },
                  "stats_endpoint": {
                    "description": "(Required) Primary key of desired storage region. See GET /analytics/endpoints",
                    "example": "jfk-org01",
                    "type": "string"
                  },
                  "address": {
                    "description": "(Optional) Physical address of this organization",
                    "example": "123 Real St",
                    "type": "string"
                  },
                  "website": {
                    "description": "(Optional) Website URL of this organization",
                    "example": "windscribe.com",
                    "type": "string"
                  },
                  "contact_name": {
                    "description": "(Optional) Contact name for the person responsible for this organization",
                    "example": "Sterling Archer",
                    "type": "string"
                  },
                  "contact_phone": {
                    "description": "(Optional) Phone number associated with this organization",
                    "example": "123-456-7890",
                    "type": "string"
                  },
                  "parent_profile": {
                    "description": "(Optional) Global Profile ID (PK) to enforce on all created Devices",
                    "example": "abcd1234",
                    "type": "string"
                  }
                },
                "required": [
                  "name",
                  "contact_email",
                  "twofa_req",
                  "stats_endpoint"
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
                        "organization": {
                          "type": "object",
                          "properties": {
                            "contact_phone": {
                              "type": "string"
                            },
                            "contact_name": {
                              "type": "string"
                            },
                            "website": {
                              "type": "string"
                            },
                            "address": {
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
                            "contact_phone",
                            "contact_name",
                            "website",
                            "address",
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
                      },
                      "required": [
                        "organization"
                      ]
                    },
                    "success": {
                      "type": "boolean"
                    },
                    "message": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "body",
                    "success",
                    "message"
                  ]
                },
                "example": {
                  "body": {
                    "organization": {
                      "contact_phone": "123-456-7890",
                      "contact_name": "Sterling Archer",
                      "website": "windscribe.com",
                      "address": "123 Real St",
                      "stats_endpoint": "jfk-org01",
                      "max_legacy_resolvers": 10,
                      "max_profiles": 100,
                      "max_routers": 1,
                      "max_users": 10,
                      "parent_org": {
                        "name": "Main Inc",
                        "PK": "77dvawsb"
                      },
                      "twofa_req": 1,
                      "contact_email": "contact@email.com",
                      "status": 1,
                      "date": "2023-09-12",
                      "name": "Managed Inc 2",
                      "PK": "173dvaonf",
                      "members": {
                        "count": 0
                      },
                      "profiles": {
                        "count": 0,
                        "max": 100
                      },
                      "users": {
                        "count": 0,
                        "max": 10,
                        "price": 2
                      },
                      "routers": {
                        "count": 0,
                        "max": 1,
                        "price": 10
                      },
                      "sub_organizations": {
                        "count": 0,
                        "max": 0
                      }
                    }
                  },
                  "success": true,
                  "message": "Sub-organization has been created."
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