Add this to test UI
https://github.com/microsoft/playwright

Extract CartoDB Data
https://carto.com/help/tutorials/export-data-guide/
`https://<username>.carto.com/api/v2/sql?format=GPKG&q=SELECT * FROM table_name WHERE cartodb_id < 100000`

https://hbernberg.carto.com/me

Star Wars Fandom API
`https://starwars.fandom.com/api.php?action=query&prop=revisions&titles=Kidiet Olgo&rvprop=content&format=json`

**`WGS 84 / Pseudo-Mercator`**

WKT
```
PROJCS[ "WGS 84 / Pseudo-Mercator",
    GEOGCS[ "WGS 84",
        DATUM[ "WGS_1984",
            SPHEROID[ "WGS 84", 6378137, 298.257223563,
                AUTHORITY[ "EPSG", "7030" ]
            ],
            AUTHORITY[ "EPSG", "6326" ]
        ],
        PRIMEM[ "Greenwich", 0,
            AUTHORITY[ "EPSG", "8901" ]
        ],
        UNIT[ "degree", 0.0174532925199433,
            AUTHORITY[ "EPSG", "9122" ]
        ],
        AUTHORITY[ "EPSG", "4326" ]
    ],
    PROJECTION[ "Mercator_1SP" ],
    PARAMETER[ "central_meridian", 0 ],
    PARAMETER[ "scale_factor", 1 ],
    PARAMETER[ "false_easting", 0 ],
    PARAMETER[ "false_northing", 0 ],
    UNIT[ "metre", 1,
        AUTHORITY[ "EPSG", "9001" ]
    ],
    AXIS[ "X", EAST ],
    AXIS[ "Y", NORTH ],
    EXTENSION[
        "PROJ4",
        "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
    ],
    AUTHORITY[ "EPSG", "3857" ]
]
```

Proj4
```
+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs
```

Extent
```
-180.00, -85.06, 180.00, 85.06
```
