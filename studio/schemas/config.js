export default {
    "type": "document",
    "name": "config",
    "title": "config",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "baseURL",
            "title": "Base URL",
            "description": "Hostname (and path) to the root",
            "hidden": true,
            "validation": null
        },
        {
            "type": "object",
            "name": "params",
            "title": "Params",
            "description": "Site parameters",
            "validation": Rule => Rule.required(),
            "fields": [
                {
                    "type": "string",
                    "name": "landing_template",
                    "title": "Landing Template",
                    "hidden": false,
                    "initialValue": "home",
                    "validation": Rule => Rule.required(),
                    "options": {
                        "list": [
                            "home"
                        ]
                    }
                },
                {
                    "type": "string",
                    "name": "palette",
                    "title": "Color Palette",
                    "description": "The color palette used for the site.",
                    "initialValue": "blue",
                    "validation": Rule => Rule.required(),
                    "options": {
                        "list": [
                            "blue",
                            "green"
                        ]
                    }
                },
                {
                    "type": "object",
                    "name": "palettes",
                    "title": "Palettes",
                    "hidden": true,
                    "validation": null,
                    "fields": [
                        {
                            "type": "palette",
                            "name": "blue",
                            "title": "Blue",
                            "validation": null
                        },
                        {
                            "type": "palette",
                            "name": "green",
                            "title": "Green",
                            "validation": null
                        }
                    ]
                }
            ]
        },
        {
            "type": "site_menus",
            "name": "menu",
            "title": "Site Menus",
            "description": "Menu items not related to a specific page",
            "validation": null
        },
        {
            "type": "array",
            "name": "disableKinds",
            "title": "Disable Kinds",
            "description": "Enable disabling of all pages of the specified Kinds.",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ],
            "options": {
                "list": [
                    "page",
                    "home",
                    "section",
                    "taxonomy",
                    "taxonomyTerm",
                    "RSS",
                    "sitemap",
                    "robotsTXT",
                    "404"
                ]
            }
        },
        {
            "type": "boolean",
            "name": "uglyURLs",
            "title": "Ugly URLs",
            "description": "When enabled, creates URL of the form /filename.html instead of /filename/.",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config.yaml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true
}