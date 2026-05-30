# Filters - List Native

Returns all Native filters for this profile and their states.

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
    "/profiles/{profile_id}/filters": {
      "get": {
        "summary": "Filters - List Native",
        "deprecated": false,
        "description": "Returns all Native filters for this profile and their states.",
        "tags": [
          "Profiles"
        ],
        "parameters": [
          {
            "name": "profile_id",
            "in": "path",
            "description": "Primary key (PK) of the profile",
            "required": true,
            "example": "abcd123",
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
                        "filters": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "PK": {
                                "type": "string"
                              },
                              "name": {
                                "type": "string"
                              },
                              "description": {
                                "type": "string"
                              },
                              "additional": {
                                "type": "string"
                              },
                              "sources": {
                                "type": "array",
                                "items": {
                                  "type": "string"
                                }
                              },
                              "options": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "title": {
                                      "type": "string"
                                    },
                                    "description": {
                                      "type": "string"
                                    },
                                    "type": {
                                      "type": "string"
                                    },
                                    "name": {
                                      "type": "string"
                                    },
                                    "status": {
                                      "type": "integer"
                                    }
                                  },
                                  "required": [
                                    "title",
                                    "description",
                                    "type",
                                    "name",
                                    "status"
                                  ]
                                }
                              },
                              "status": {
                                "type": "integer"
                              }
                            },
                            "required": [
                              "PK",
                              "name",
                              "description",
                              "additional",
                              "sources",
                              "options",
                              "status"
                            ]
                          }
                        }
                      },
                      "required": [
                        "filters"
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
                    "filters": [
                      {
                        "PK": "ads",
                        "name": "Ads & Trackers",
                        "description": "One of the most comprehensive ad and tracker blocking lists out there. Contains over 900,000 wildcard domains derived from over 2 dozen block lists, hand curated to remove thousands of false positives that plague most community maintained lists.",
                        "additional": "<p><strong>Relaxed Mode</strong></p>Filter will allow affiliate marketing links and email tracking links to work. <p><strong>Strict Mode</strong></p>Filter will block all tracking and ad domains, regardless of type.",
                        "sources": [],
                        "options": [
                          {
                            "title": "Allow Email Tracking and Affiliate Links",
                            "description": "This is useful to be able to click links and see images in newsletters.",
                            "type": "counterfilter",
                            "name": "cbl_tracking",
                            "status": 1
                          }
                        ],
                        "status": 1
                      },
                      {
                        "PK": "porn",
                        "name": "Adult Content",
                        "description": "This filter blocks sexually explicit content. Handy on kid-friendly networks and those morally opposed to pornography. Be sure to enable Safe Search via the gear icon to prevent search engines and Youtube from showing adult results.",
                        "additional": "<p><strong>Relaxed Mode</strong></p>Filter will only block domains that contain adult content. <p><strong>Strict Mode</strong></p>Filter will also prevent search engines and Youtube from showing mature content.",
                        "sources": [],
                        "options": [
                          {
                            "title": "Enable Safe Search",
                            "description": "Prevents search engines and Youtube from showing mature content.",
                            "type": "service",
                            "name": "safesearch",
                            "status": 1
                          }
                        ],
                        "status": 0
                      },
                      {
                        "PK": "fakenews",
                        "name": "Clickbait",
                        "description": "Sites that intentionally, but not necessarily exclusively, publish hoaxes and disinformation for purposes other than satire.",
                        "sources": [],
                        "status": 0
                      },
                      {
                        "PK": "cryptominers",
                        "name": "Crypto",
                        "description": "This filter blocks all cryptocurrency exchanges, crypto news sites and cryptomining services that mine cryptocurrency in your browser.",
                        "sources": [],
                        "status": 0
                      },
                      {
                        "PK": "dating",
                        "name": "Dating",
                        "description": "Not looking to meet local singles/bots in your area? This filter will help you achieve this goal.",
                        "sources": [],
                        "status": 0
                      },
                      {
                        "PK": "drugs",
                        "name": "Drugs",
                        "description": "This filter contains sites that legally and illegally sell drugs, alcohol, tobacco and vape products.",
                        "sources": [],
                        "status": 0
                      },
                      {
                        "PK": "gambling",
                        "name": "Gambling",
                        "description": "Blocks gambling sites. Prevent yourself, your employees or family members from gambling away their life savings.",
                        "sources": [],
                        "status": 0
                      },
                      {
                        "PK": "gov",
                        "name": "Government Sites",
                        "description": "This filter contains all government TLDs and various government websites in most countries. Enabling this filter will not prevent you from paying taxes.",
                        "sources": [],
                        "status": 0
                      },
                      {
                        "PK": "iot",
                        "name": "IoT Telemetry",
                        "description": "You know that smart TV/fridge/toaster you have? It's probably reporting on your activities to a bunch of servers in China. This filter prevents your Internet-of-Things/\"smart\" devices from sending tracking and telemetry data to the manufacturer. This can break some (terribly made) IoT devices that don't work without telemetry being sent.",
                        "sources": [],
                        "status": 0
                      },
                      {
                        "PK": "malware",
                        "name": "Malware",
                        "description": "Contain the worst of the worst. Sites that are known to distribute malware, launch phishing attacks or botnet command-and-control servers used to communicate with already infected machines. There is no reason to ever disable this list unless you’re doing malware research.",
                        "additional": "<p><strong>Relaxed Mode</strong></p>Filter will block only malicious domains. <p><strong>Strict Mode</strong></p>Filter will also block domains that resolve to malicious IP addresses.",
                        "sources": [],
                        "options": [
                          {
                            "title": "Block Malicious IPs",
                            "description": "Blocks domains that get resolved to malware distributing and botnet control IP addresses.",
                            "type": "ipfilter",
                            "name": "ip_malware",
                            "status": 1
                          }
                        ],
                        "status": 1
                      },
                      {
                        "PK": "nrd",
                        "name": "New Domains",
                        "description": "Contains new domains that were just registered. Many of these could be used for badware distribution, procedurally generated domains for malware command and control servers, etc. This could also cause collateral damage and block legitimate brand new domains.",
                        "sources": [],
                        "status": 0
                      },
                      {
                        "PK": "typo",
                        "name": "Phishing",
                        "description": "This list blocks phishing domains as well as domains that are similar to common websites you may be visiting. They are typically associated with phishing attacks that are meant to fool you into thinking that you're visit a website you're familiar with, in order to steal private information. For example playpal.com can look a lot like paypal.com, which you may not notice unless you're paying attention.",
                        "sources": [],
                        "status": 0
                      },
                      {
                        "PK": "social",
                        "name": "Social",
                        "description": "Social networks are one of the most pervasive privacy violators out there. This filter will block all social networks and their associated trackers. If you must use 1 of them, you can bypass it via a custom rule or a service rule.",
                        "sources": [],
                        "status": 0
                      },
                      {
                        "PK": "torrents",
                        "name": "Torrents",
                        "description": "This filter contains most common torrent trackers and indexing sites. This will have no impact on the actual torrent protocol, it will simply prevent access to the indexing/search sites and block common trackers that are used to discover peers.",
                        "sources": [],
                        "status": 0
                      },
                      {
                        "PK": "dnsvpn",
                        "name": "VPN & DNS",
                        "description": "This filter will block all common VPN and DNS-over-HTTPS providers (except CONTROL D). Some malware uses DoH to bypass network security systems. Or you may want to restrict VPN activity on your network.",
                        "sources": [],
                        "status": 0
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