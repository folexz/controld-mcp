# Profiles - List

List all profiles associated with an account.

Each Profile has a primary key (`PK` field). It needs to be supplied with all API calls that make modifications to a profile.

> 🚧 Organization Accounts
>
> If you have a organization account (ignore this if you do not), you can "impersonate" an admin of a child sub-organization, by supplying `X-Force-Org-Id: org_id_goes_here` HTTP header along with all API calls within the Profiles scope. This will allow you to view, create and modify Profiles within the target sub-organization using the API token of the parent (main) Organization.

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
    "/profiles": {
      "get": {
        "summary": "Profiles - List",
        "deprecated": false,
        "description": "List all profiles associated with an account.",
        "tags": [
          "Profiles"
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
                        "profiles": {
                          "type": "array",
                          "items": {
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
                              },
                              "stats": {
                                "type": "integer"
                              },
                              "profile": {
                                "type": "object",
                                "properties": {
                                  "flt": {
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
                                  "cflt": {
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
                                  "ipflt": {
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
                                  "rule": {
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
                                  "svc": {
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
                                  "grp": {
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
                                  "opt": {
                                    "type": "object",
                                    "properties": {
                                      "count": {
                                        "type": "integer"
                                      },
                                      "data": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "PK": {
                                              "type": "string"
                                            },
                                            "value": {
                                              "type": "integer"
                                            }
                                          },
                                          "required": [
                                            "PK",
                                            "value"
                                          ]
                                        }
                                      }
                                    },
                                    "required": [
                                      "count",
                                      "data"
                                    ]
                                  },
                                  "da": {
                                    "type": "array",
                                    "items": {},
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
                                    },
                                    "required": [
                                      "do",
                                      "via",
                                      "status"
                                    ]
                                  }
                                },
                                "required": [
                                  "flt",
                                  "cflt",
                                  "ipflt",
                                  "rule",
                                  "svc",
                                  "grp",
                                  "opt",
                                  "da"
                                ]
                              }
                            },
                            "required": [
                              "PK",
                              "updated",
                              "name",
                              "stats",
                              "profile"
                            ]
                          }
                        }
                      },
                      "required": [
                        "profiles"
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
                    "profiles": [
                      {
                        "PK": "52wtfl4k",
                        "updated": 1660958788,
                        "name": "Test Profile",
                        "stats": 0,
                        "profile": {
                          "flt": {
                            "count": 0
                          },
                          "cflt": {
                            "count": 0
                          },
                          "ipflt": {
                            "count": 0
                          },
                          "rule": {
                            "count": 0
                          },
                          "svc": {
                            "count": 0
                          },
                          "grp": {
                            "count": 0
                          },
                          "opt": {
                            "count": 0,
                            "data": []
                          },
                          "da": []
                        }
                      },
                      {
                        "PK": "44wtfuyd",
                        "updated": 1657322386,
                        "name": "Cloned Profile - 9u7",
                        "stats": 0,
                        "profile": {
                          "flt": {
                            "count": 3
                          },
                          "cflt": {
                            "count": 1
                          },
                          "ipflt": {
                            "count": 1
                          },
                          "rule": {
                            "count": 16
                          },
                          "svc": {
                            "count": 3
                          },
                          "grp": {
                            "count": 4
                          },
                          "opt": {
                            "count": 2,
                            "data": [
                              {
                                "PK": "block_rfc1918",
                                "value": 1
                              },
                              {
                                "PK": "spoof_ipv6",
                                "value": 1
                              }
                            ]
                          },
                          "da": {
                            "do": 3,
                            "via": "YYZ",
                            "status": 1
                          }
                        }
                      },
                      {
                        "PK": "8wtffms",
                        "updated": 1650919383,
                        "name": "Other Profile",
                        "stats": 0,
                        "profile": {
                          "flt": {
                            "count": 0
                          },
                          "cflt": {
                            "count": 0
                          },
                          "ipflt": {
                            "count": 0
                          },
                          "rule": {
                            "count": 10
                          },
                          "svc": {
                            "count": 0
                          },
                          "grp": {
                            "count": 6
                          },
                          "opt": {
                            "count": 0,
                            "data": []
                          },
                          "da": []
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