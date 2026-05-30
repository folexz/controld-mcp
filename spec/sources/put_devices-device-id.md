# Modify Device

Modify an existing Endpoint and its settings.

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
    "/devices/{device_id}": {
      "put": {
        "summary": "Modify Endpoint",
        "deprecated": false,
        "description": "Modify an existing Endpoint and its settings.",
        "tags": [
          "Endpoints"
        ],
        "parameters": [
          {
            "name": "device_id",
            "in": "path",
            "description": "Device/Resolver ID",
            "required": true,
            "example": "abcdefg",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "description": "New Device name",
                    "example": "New-Name",
                    "type": "string"
                  },
                  "client_count": {
                    "description": "Number of devices using this Endpoint",
                    "example": "69",
                    "type": "string"
                  },
                  "profile_id": {
                    "description": "Primary key of main profile to enforce on this device",
                    "example": "123457qwerty",
                    "type": "string"
                  },
                  "profile_id2": {
                    "description": "Primary key of a second profile to enforce -1 to remove.",
                    "example": "wxyz6789",
                    "type": "string"
                  },
                  "stats": {
                    "description": "Set analytics level on device. 0 = off, 1 = basic, 2 = full",
                    "example": 0,
                    "type": "integer"
                  },
                  "legacy_ipv4_status": {
                    "description": "Set this to 1 to generate a legacy IPv4 (and IPv6) DNS resolver, 0 to remove existing one.",
                    "example": 1,
                    "type": "integer"
                  },
                  "learn_ip": {
                    "description": "Enable or disable automatic IP learning and logging. 0 to disable, 1 to enable.",
                    "example": 0,
                    "type": "integer"
                  },
                  "restricted": {
                    "description": "Make this device restricted. 0 to disable, 1 to enable.",
                    "example": 1,
                    "type": "integer"
                  },
                  "bump_tls": {
                    "description": "Enable or disable experimental ECH support and TLS bumping",
                    "example": 0,
                    "type": "integer"
                  },
                  "desc": {
                    "description": "Add a description or comment to the device",
                    "example": "Comment goes here",
                    "type": "string"
                  },
                  "ddns_status": {
                    "description": "Status of public DDNS endpoint. 1 = enabled, 0 = disable.",
                    "example": 1,
                    "type": "integer"
                  },
                  "ddns_subdomain": {
                    "description": "DDNS subdomain to expose the IP on",
                    "example": "my-private-subdomain",
                    "type": "string"
                  },
                  "ddns_ext_host": {
                    "description": "DDNS hostname to query to learn new IPs",
                    "example": "myhost.ddns.com",
                    "type": "string"
                  },
                  "ddns_ext_status": {
                    "description": "Status of DDNS based IP learning. 0 to disable, 1 to enable.",
                    "example": 1,
                    "type": "integer"
                  },
                  "status": {
                    "description": "Update device status. 0 - pending, 1 - active, 2 - soft disabled, 3 - hard disabled",
                    "example": 1,
                    "type": "integer"
                  },
                  "ctrld_custom_config": {
                    "description": "ctrld .toml config file to deploy",
                    "example": "toml config here",
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
                            "dot",
                            "v4",
                            "v6"
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
                        }
                      },
                      "required": [
                        "PK",
                        "ts",
                        "name",
                        "stats",
                        "device_id",
                        "status",
                        "restricted",
                        "learn_ip",
                        "desc",
                        "ddns",
                        "ddns_ext",
                        "resolvers",
                        "legacy_ipv4",
                        "profile"
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
                  "success": true,
                  "message": "Device has been updated"
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