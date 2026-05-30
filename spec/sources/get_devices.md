# List All Devices

List all Endpoints that are associated with an account or organization. 

> 🚧 Organization Accounts
>
> If you have a organization account (ignore this if you do not), you can "impersonate" an admin of a child sub-organization, by supplying `X-Force-Org-Id: org_id_goes_here` HTTP header along with all API calls within the Profiles scope. This will allow you to view, create and modify Devices within the target sub-organization using the API token of the parent (main) Organization.
>
> Additionally, to retrieve only User type devices, append `/users` to this API call, or `/routers` to retrieve only Router type devices.

<br />

> ❗️ Changes in the works
>
> We’re currently updating this API to streamline behavior and improve query performance. As part of this change, the `last_activity` and `clients` fields will be removed from the response soon. In the meantime, if you still need these two fields, please include the query parameter `last_activity=1` in your requests.

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
      "name": "Endpoints"
    }
  ],
  "paths": {
    "/devices": {
      "get": {
        "summary": "List All Endpoints",
        "deprecated": false,
        "description": "List all Endpoints that are associated with an account or organization. ",
        "tags": [
          "Endpoints"
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
                        "devices": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "PK": {
                                "type": "string"
                              },
                              "ts": {
                                "type": "integer"
                              },
                              "name": {
                                "type": "string"
                              },
                              "stats": {
                                "type": "integer"
                              },
                              "device_id": {
                                "type": "string"
                              },
                              "status": {
                                "type": "integer"
                              },
                              "restricted": {
                                "type": "integer"
                              },
                              "learn_ip": {
                                "type": "integer"
                              },
                              "desc": {
                                "type": "string"
                              },
                              "ddns": {
                                "type": "object",
                                "properties": {
                                  "status": {
                                    "type": "integer"
                                  },
                                  "subdomain": {
                                    "type": "string"
                                  },
                                  "hostname": {
                                    "type": "string"
                                  },
                                  "record": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "status",
                                  "subdomain",
                                  "hostname",
                                  "record"
                                ]
                              },
                              "ddns_ext": {
                                "type": "object",
                                "properties": {
                                  "status": {
                                    "type": "integer"
                                  },
                                  "host": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "status",
                                  "host"
                                ]
                              },
                              "resolvers": {
                                "type": "object",
                                "properties": {
                                  "uid": {
                                    "type": "string"
                                  },
                                  "doh": {
                                    "type": "string"
                                  },
                                  "dot": {
                                    "type": "string"
                                  },
                                  "v4": {
                                    "type": "array",
                                    "items": {
                                      "type": "string"
                                    }
                                  },
                                  "v6": {
                                    "type": "array",
                                    "items": {
                                      "type": "string"
                                    }
                                  }
                                },
                                "required": [
                                  "uid",
                                  "doh",
                                  "dot"
                                ]
                              },
                              "legacy_ipv4": {
                                "type": "object",
                                "properties": {
                                  "resolver": {
                                    "type": "string"
                                  },
                                  "status": {
                                    "type": "integer"
                                  }
                                },
                                "required": [
                                  "resolver",
                                  "status"
                                ]
                              },
                              "profile": {
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
                              "icon": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "PK",
                              "ts",
                              "name",
                              "device_id",
                              "status",
                              "learn_ip",
                              "resolvers",
                              "profile"
                            ]
                          }
                        },
                        "activity": {
                          "type": "boolean"
                        }
                      },
                      "required": [
                        "devices",
                        "activity"
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
                    "devices": [
                      {
                        "PK": "2bmen1byrpr",
                        "ts": 1669593191,
                        "name": "not-default-device",
                        "stats": 2,
                        "device_id": "2bmen1byrpr",
                        "status": 1,
                        "restricted": 0,
                        "learn_ip": 1,
                        "desc": "Comment goes here 2",
                        "ddns": {
                          "status": 1,
                          "subdomain": "my-private-subdomain2",
                          "hostname": "my-private-subdomain2.controld.xyz",
                          "record": "2607:f0c8:8000:8210:1c7b:b482:1c88:e893"
                        },
                        "ddns_ext": {
                          "status": 1,
                          "host": "test.com"
                        },
                        "resolvers": {
                          "uid": "2bmen1byrpr",
                          "doh": "https://dns.controld.dev/2bmen1byrpr",
                          "dot": "2bmen1byrpr.dns.controld.dev",
                          "v4": [
                            "176.125.239.187",
                            "176.125.53.187"
                          ],
                          "v6": [
                            "2606:1a40:f000:1e:2c0e:761:3fcf:0",
                            "2606:1a40:f001:1e:2c0e:761:3fcf:0"
                          ]
                        },
                        "legacy_ipv4": {
                          "resolver": "176.125.239.187",
                          "status": 1
                        },
                        "profile": {
                          "PK": "4054dvb42i",
                          "updated": 1670294164,
                          "name": "Totally Not Default Profile"
                        }
                      },
                      {
                        "PK": "hl7r34ku0f",
                        "ts": 1670036258,
                        "name": "test-01",
                        "device_id": "hl7r34ku0f",
                        "status": 1,
                        "icon": "desktop-windows",
                        "learn_ip": 1,
                        "resolvers": {
                          "uid": "hl7r34ku0f",
                          "doh": "https://dns.controld.dev/hl7r34ku0f",
                          "dot": "hl7r34ku0f.dns.controld.dev"
                        },
                        "profile": {
                          "PK": "4054dvb42i",
                          "updated": 1670294164,
                          "name": "Totally Not Default Profile"
                        }
                      }
                    ],
                    "activity": false
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