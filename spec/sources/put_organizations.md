# Modify Organization

Modify Sub-Organization and all its details, including seats. 

> 📘 Billable Events
>
> Modifying `max_users` and `max_routers` is a billable event. If you increase your commitment, you will be charged a prorated difference from your last commitment to the new one. New amount will be rebilled subsequently.
>
> Reducing the commitment will update your future rebill amount.

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
    "/organizations": {
      "put": {
        "summary": "Modify Organization",
        "deprecated": false,
        "description": "Modify Sub-Organization and all its details, including seats. ",
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
                    "description": "Organization name",
                    "example": "Managed Inc",
                    "type": "string"
                  },
                  "contact_email": {
                    "description": "Primary contact for this sub-organization",
                    "example": "contact@email.com",
                    "type": "string"
                  },
                  "twofa_req": {
                    "description": "Is 2FA/MFA required for memberts of this org. 0 = no, 1 = yes",
                    "example": 1,
                    "type": "integer"
                  },
                  "stats_endpoint": {
                    "description": "Primary key of desired storage region. See GET /analytics/endpoints",
                    "example": "jfk-org01",
                    "type": "string"
                  },
                  "address": {
                    "description": "Physical address of this organization",
                    "example": "123 Real St",
                    "type": "string"
                  },
                  "website": {
                    "description": "Website URL of this organization",
                    "example": "windscribe.com",
                    "type": "string"
                  },
                  "contact_name": {
                    "description": "Contact name for the person responsible for this organization",
                    "example": "Sterling Archer",
                    "type": "string"
                  },
                  "contact_phone": {
                    "description": "Phone number associated with this organization",
                    "example": "123-456-7890",
                    "type": "string"
                  },
                  "parent_profile": {
                    "description": "Global Profile ID (PK) to enforce on all created Devices",
                    "example": "abcd1234",
                    "type": "string"
                  }
                }
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
                      "website": "windscribe.com",
                      "address": "123 Totally Real St, Toronto",
                      "max_profiles": 100,
                      "status": 1,
                      "stats_endpoint": "jfk-org01",
                      "max_users": 400,
                      "max_legacy_resolvers": 10,
                      "name": "Walrus",
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
                        "count": 4,
                        "max": 5
                      }
                    }
                  },
                  "success": true,
                  "message": "Organization has been updated."
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