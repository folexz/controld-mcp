# Create Device

Create a new Endpoint. This endpoint will return DNS resolvers specific to this Device.

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
      "post": {
        "summary": "Create Endpoint",
        "deprecated": false,
        "description": "Create a new Endpoint. This endpoint will return DNS resolvers specific to this Device.",
        "tags": [
          "Endpoints"
        ],
        "parameters": [],
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "description": "Device name",
                    "example": "Bobs-Phone",
                    "type": "string"
                  },
                  "client_count": {
                    "description": "Number of devices using this Endpoint",
                    "example": "10",
                    "type": "string"
                  },
                  "profile_id": {
                    "description": "Primary key of main profile to enforce on this device",
                    "example": "abcd1234",
                    "type": "string"
                  },
                  "profile_id2": {
                    "description": "Primary key of a second profile to enforce",
                    "example": "wxyz6789",
                    "type": "string"
                  },
                  "icon": {
                    "description": "Device icon/type",
                    "example": "mobile-android",
                    "type": "string"
                  },
                  "stats": {
                    "description": "Set analytics level on device. 0 = off, 1 = basic, 2 = full",
                    "example": 2,
                    "type": "integer"
                  },
                  "legacy_ipv4_status": {
                    "description": "Set this to 1 to generate a legacy IPv4 (and IPv6) DNS resolver.",
                    "example": 1,
                    "type": "integer"
                  },
                  "learn_ip": {
                    "description": "Enable or disable automatic IP learning and logging. 0 to disable, 1 to enable.",
                    "example": 1,
                    "type": "integer"
                  },
                  "restricted": {
                    "description": "Make this device restricted, only previously authorized IPs will be able to query against it",
                    "example": 1,
                    "type": "integer"
                  },
                  "desc": {
                    "description": "Add a description or comment to the device",
                    "example": "Comment goes here",
                    "type": "string"
                  },
                  "ddns_status": {
                    "description": "Status of DDNS endpoint that exposes last used IP.",
                    "example": 1,
                    "type": "integer"
                  },
                  "ddns_subdomain": {
                    "description": "DDNS subdomain to expose the IP on",
                    "example": "subdomain-goes-here",
                    "type": "string"
                  },
                  "ddns_ext_status": {
                    "description": "Status of DDNS based IP learning",
                    "example": 1,
                    "type": "integer"
                  },
                  "ddns_ext_host": {
                    "description": "DDNS hostname to query to learn new IPs",
                    "example": "myhost.ddns.com",
                    "type": "string"
                  },
                  "remap_device_id": {
                    "description": "Remap source device + client ID to a new device",
                    "example": "qwerty1234",
                    "type": "string"
                  },
                  "remap_client_id": {
                    "description": "Remap source device + client ID to a new device",
                    "example": "hostname-01",
                    "type": "string"
                  }
                },
                "required": [
                  "name",
                  "client_count",
                  "profile_id",
                  "icon"
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
                        "icon": {
                          "type": "string"
                        },
                        "restricted": {
                          "type": "integer"
                        },
                        "learn_ip": {
                          "type": "integer"
                        },
                        "bump_tls": {
                          "type": "integer"
                        },
                        "desc": {
                          "type": "string"
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
                        "icon",
                        "restricted",
                        "learn_ip",
                        "bump_tls",
                        "desc",
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
                    "PK": "149grhplae4",
                    "ts": 1670354331,
                    "name": "bobs-phone",
                    "stats": 2,
                    "device_id": "149grhplae4",
                    "status": 0,
                    "icon": "mobile-android",
                    "restricted": 1,
                    "learn_ip": 1,
                    "bump_tls": 1,
                    "desc": "Comment goes here",
                    "resolvers": {
                      "uid": "149grhplae4",
                      "doh": "https://dns.controld.dev/149grhplae4",
                      "dot": "149grhplae4.dns.controld.dev",
                      "v4": [
                        "176.125.239.185",
                        "176.125.53.185"
                      ],
                      "v6": [
                        "2606:1a40:f000:e:8704:3bc8:74dc:0",
                        "2606:1a40:f001:e:8704:3bc8:74dc:0"
                      ]
                    },
                    "legacy_ipv4": {
                      "resolver": "176.125.239.185",
                      "status": 1
                    },
                    "profile": {
                      "PK": "4054dvb42i",
                      "updated": 1670294164,
                      "name": "Totally Not Default Profile"
                    }
                  },
                  "success": true,
                  "message": "Device has been added"
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