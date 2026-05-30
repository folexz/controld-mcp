# List Known IPs

List up to latest 50 IPs that were used to query against a Device (resolver).

This endpoint returns a list of logged or authorized IPs on a specific device.

<br />

> 🚧 Organization Accounts
>
> If you have a organization account (ignore this if you do not), you can "impersonate" an admin of a child sub-organization, by supplying `X-Force-Org-Id: org_id_goes_here` HTTP header along with all API calls within this scope. This will allow you to view, and modify access IPs within the target sub-organization using the API token of the parent (main) Organization.

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
      "name": "Access"
    }
  ],
  "paths": {
    "/access": {
      "get": {
        "summary": "List Known IPs",
        "deprecated": false,
        "description": "List up to latest 50 IPs that were used to query against a Device (resolver).",
        "tags": [
          "Access"
        ],
        "parameters": [
          {
            "name": "device_id",
            "in": "query",
            "description": "(Required) Primary key of the device.",
            "required": true,
            "example": "abcd1234",
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
                  "properties": {}
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