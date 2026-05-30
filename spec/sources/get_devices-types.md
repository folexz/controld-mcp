# List Device Types

Return a list of allowed device types.

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
    "/devices/types": {
      "get": {
        "summary": "List Endpoint Types",
        "deprecated": false,
        "description": "Return a list of allowed device types.",
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
                        "types": {
                          "type": "object",
                          "properties": {
                            "os": {
                              "type": "object",
                              "properties": {
                                "name": {
                                  "type": "string"
                                },
                                "icons": {
                                  "type": "object",
                                  "properties": {
                                    "mobile-ios": {
                                      "type": "string"
                                    },
                                    "mobile-android": {
                                      "type": "string"
                                    },
                                    "desktop-windows": {
                                      "type": "string"
                                    },
                                    "desktop-mac": {
                                      "type": "string"
                                    },
                                    "desktop-linux": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "mobile-ios",
                                    "mobile-android",
                                    "desktop-windows",
                                    "desktop-mac",
                                    "desktop-linux"
                                  ]
                                }
                              },
                              "required": [
                                "name",
                                "icons"
                              ]
                            },
                            "browser": {
                              "type": "object",
                              "properties": {
                                "name": {
                                  "type": "string"
                                },
                                "icons": {
                                  "type": "object",
                                  "properties": {
                                    "browser-chrome": {
                                      "type": "string"
                                    },
                                    "browser-firefox": {
                                      "type": "string"
                                    },
                                    "browser-edge": {
                                      "type": "string"
                                    },
                                    "browser-brave": {
                                      "type": "string"
                                    },
                                    "browser-other": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "browser-chrome",
                                    "browser-firefox",
                                    "browser-edge",
                                    "browser-brave",
                                    "browser-other"
                                  ]
                                }
                              },
                              "required": [
                                "name",
                                "icons"
                              ]
                            },
                            "tv": {
                              "type": "object",
                              "properties": {
                                "name": {
                                  "type": "string"
                                },
                                "icons": {
                                  "type": "object",
                                  "properties": {
                                    "tv": {
                                      "type": "string"
                                    },
                                    "tv-apple": {
                                      "type": "string"
                                    },
                                    "tv-android": {
                                      "type": "string"
                                    },
                                    "tv-firetv": {
                                      "type": "string"
                                    },
                                    "tv-samsung": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "tv",
                                    "tv-apple",
                                    "tv-android",
                                    "tv-firetv",
                                    "tv-samsung"
                                  ]
                                }
                              },
                              "required": [
                                "name",
                                "icons"
                              ]
                            },
                            "router": {
                              "type": "object",
                              "properties": {
                                "name": {
                                  "type": "string"
                                },
                                "icons": {
                                  "type": "object",
                                  "properties": {
                                    "router": {
                                      "type": "string"
                                    },
                                    "router-openwrt": {
                                      "type": "string"
                                    },
                                    "router-ubiquiti": {
                                      "type": "string"
                                    },
                                    "router-asus": {
                                      "type": "string"
                                    },
                                    "router-ddwrt": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "router",
                                    "router-openwrt",
                                    "router-ubiquiti",
                                    "router-asus",
                                    "router-ddwrt"
                                  ]
                                },
                                "setup_url": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "name",
                                "icons",
                                "setup_url"
                              ]
                            }
                          },
                          "required": [
                            "os",
                            "browser",
                            "tv",
                            "router"
                          ]
                        }
                      },
                      "required": [
                        "types"
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
                    "types": {
                      "os": {
                        "name": "Desktop & Mobile",
                        "icons": {
                          "mobile-ios": "iOS",
                          "mobile-android": "Android",
                          "desktop-windows": "Windows",
                          "desktop-mac": "Mac",
                          "desktop-linux": "Linux"
                        }
                      },
                      "browser": {
                        "name": "Browsers",
                        "icons": {
                          "browser-chrome": "Chrome",
                          "browser-firefox": "Firefox",
                          "browser-edge": "Edge",
                          "browser-brave": "Brave",
                          "browser-other": "Other"
                        }
                      },
                      "tv": {
                        "name": "TV & Media",
                        "icons": {
                          "tv": "Generic TV",
                          "tv-apple": "Apple TV",
                          "tv-android": "Android TV",
                          "tv-firetv": "Fire TV",
                          "tv-samsung": "Samsung TV"
                        }
                      },
                      "router": {
                        "name": "Routers",
                        "icons": {
                          "router": "Generic Router",
                          "router-openwrt": "OpenWRT",
                          "router-ubiquiti": "Ubiquiti",
                          "router-asus": "Asus",
                          "router-ddwrt": "DD-WRT"
                        },
                        "setup_url": "https://github.com/Control-D-Inc/ctrld"
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