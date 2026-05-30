# Profiles - List Options

Get all profile options.

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
    "/profiles/options": {
      "get": {
        "summary": "Profiles - List Options",
        "deprecated": false,
        "description": "Get all profile options.",
        "tags": [
          "Profiles"
        ],
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "",
            "required": true,
            "example": "application/x-www-form-urlencoded",
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
                        "options": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "PK": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              },
                              "description": {
                                "type": "string"
                              },
                              "type": {
                                "type": "string"
                              },
                              "default_value": {
                                "type": "integer"
                              },
                              "info_url": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "PK",
                              "title",
                              "description",
                              "type",
                              "default_value",
                              "info_url"
                            ]
                          }
                        }
                      },
                      "required": [
                        "options"
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
                    "options": [
                      {
                        "PK": "block_rfc1918",
                        "title": "DNS Rebind Protection",
                        "description": "Blocks domains that point to RFC1918 addresses.",
                        "type": "toggle",
                        "default_value": 0,
                        "info_url": "https://kb.controld.com/en/profile-options#dns-rebind-protection"
                      },
                      {
                        "PK": "spoof_ipv6",
                        "title": "IPv4/IPv6 Compatibility Mode",
                        "description": "Redirect A records via IPv6 resolver and vice versa.",
                        "type": "toggle",
                        "default_value": 0,
                        "info_url": "https://kb.controld.com/en/profile-options#ipv4ipv6-compatibility-mode"
                      },
                      {
                        "PK": "no_dnssec",
                        "title": "Disable DNSSEC",
                        "description": "Turn off DNSSEC validation and ECS support for compatibility.",
                        "type": "toggle",
                        "default_value": 0,
                        "info_url": "https://kb.controld.com/en/profile-options#disable-dnssec"
                      },
                      {
                        "PK": "ml_filter",
                        "title": "AI Malware Filter",
                        "description": "EXPERIMENTAL - Blocks malicious domains using machine learning.",
                        "type": "toggle",
                        "default_value": 0,
                        "info_url": "https://kb.controld.com/en/profile-options#ai-malware-filter"
                      },
                      {
                        "PK": "ttl_blck",
                        "title": "Block TTL",
                        "description": "DNS record TTL (in seconds) when blocking.",
                        "type": "field",
                        "default_value": 10,
                        "info_url": "https://kb.controld.com/en/profile-options#block-ttl"
                      },
                      {
                        "PK": "ttl_spff",
                        "title": "Redirect TTL",
                        "description": "DNS record TTL (in seconds) when redirecting.",
                        "type": "field",
                        "default_value": 20,
                        "info_url": "https://kb.controld.com/en/profile-options#redirect-ttl"
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