var CONFIG = {
 "data": {
  "_lastModified": 1537713406779,
  "assetsPath": "F:\\Gapminder\\Gapminder Offline\\resources\\/preview-data/",
  "ddfPath": "./data/ddf--gapminder--systema_globalis",
  "lastModified": 1537713406779,
  "path": "./data/ddf--gapminder--systema_globalis",
  "reader": "ddf"
 },
 "locale": {
  "filePath": "assets/translation/",
  "id": "en"
 },
 "state": {
  "entities": {
   "dim": "geo",
   "filter": {
    "geo": {
     "un_state": true
    }
   },
   "opacityRegular": 0.7,
   "opacitySelectDim": 0.3,
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "entities_colorlegend": {
   "dim": "world_4region",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "marker": {
   "allowSelectMultiple": true,
   "axis_s": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "linear",
    "use": "indicator",
    "which": "gapminder_gini",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "axis_x": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "data": "data",
    "domainMax": 500,
    "domainMin": 0.11,
    "fixBaseline": null,
    "scaleType": "log",
    "tailCutX": 0.2,
    "tailFade": 0.7,
    "tailFatX": 1.85,
    "use": "indicator",
    "which": "income_per_person_gdppercapita_ppp_inflation_adjusted",
    "xScaleFactor": 1.039781626,
    "xScaleShift": -1.127066411,
    "zoomedMax": null,
    "zoomedMin": null
   },
   "axis_y": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "linear",
    "use": "indicator",
    "which": "population_total",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "color": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow",
      "ordinal"
     ]
    },
    "data": "data",
    "palette": {
     "_default": [
      "#ffb600",
      "#ffaa14",
      "#ffc500",
      "#fb6d19",
      "#ffb600",
      "#9b4838"
     ],
     "africa": [
      "#00d5e9",
      "#00c8ec",
      "#00e1ec",
      "#0098df",
      "#77dff7",
      "#0586c6"
     ],
     "americas": [
      "#7feb00",
      "#5de200",
      "#81f201",
      "#00b900",
      "#b5ea32",
      "#008d36"
     ],
     "asia": [
      "#ff5872",
      "#ff5178",
      "#ff658a",
      "#da0025",
      "#fa4e73",
      "#b2043a"
     ],
     "europe": [
      "#ffe700",
      "#fbdd00",
      "#fff400",
      "#fbaf09",
      "#ffe700",
      "#b17f4a"
     ]
    },
    "paletteLabels": null,
    "scaleType": "ordinal",
    "syncModels": [
     "marker_colorlegend",
     "stack",
     "group"
    ],
    "use": "property",
    "which": "world_4region"
   },
   "group": {
    "data": "data",
    "manualSorting": [
     "asia",
     "africa",
     "americas",
     "europe"
    ],
    "merge": false,
    "scaleType": "ordinal",
    "spaceRef": "entities",
    "use": "property",
    "which": "world_4region"
   },
   "highlight": [],
   "label": {
    "data": "data",
    "scaleType": "ordinal",
    "use": "property",
    "which": "name"
   },
   "limit": 1000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 0.8,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities",
    "time"
   ],
   "stack": {
    "data": "data",
    "merge": false,
    "spaceRef": null,
    "use": "constant",
    "which": "all"
   },
   "superHighlight": []
  },
  "marker_colorlegend": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_geoshape": {
    "data": "data",
    "scaleType": "ordinal",
    "use": "property",
    "which": "shape_lores_svg"
   },
   "hook_rank": {
    "data": "data",
    "scaleType": "linear",
    "use": "property",
    "which": "rank"
   },
   "label": {
    "data": "data",
    "scaleType": "ordinal",
    "use": "property",
    "which": "name"
   },
   "limit": 1000,
   "opacityHighlightDim": 0.3,
   "opacityRegular": 0.8,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities_colorlegend"
   ],
   "superHighlight": []
  },
  "time": {
   "delay": 100,
   "delayThresholdX2": 50,
   "delayThresholdX4": 25,
   "dim": "time",
   "end": "2015",
   "endOrigin": null,
   "endSelected": "2015",
   "format": {
    "data": null,
    "ui": null
   },
   "immediatePlay": true,
   "loop": false,
   "offset": 0,
   "playable": true,
   "playing": false,
   "record": false,
   "round": "round",
   "start": "1800",
   "startOrigin": null,
   "startSelected": "1800",
   "step": 1,
   "unit": "year",
   "value": "2015"
  }
 },
 "ui": {
  "buttons": [
   "colors",
   "find",
   "stack",
   "moreoptions",
   "fullscreen",
   "presentation"
  ],
  "chart": {
   "directMu": false,
   "directSigma": false,
   "manualSortingEnabled": true,
   "preload": "income_mountains",
   "preloadKey": "world",
   "probeX": 1.85,
   "showProbeX": true,
   "xLogStops": [
    1,
    2,
    5
   ],
   "xPoints": 50,
   "yMaxMethod": "latest"
  },
  "datawarning": {
   "doubtDomain": [
    1800,
    1950,
    2015
   ],
   "doubtRange": [
    1,
    0.8,
    0.6
   ]
  },
  "dialogs": {
   "dialog": {
    "find": {
     "enableSelectShowSwitch": false
    }
   },
   "moreoptions": [
    "opacity",
    "speed",
    "stack",
    "axesmc",
    "colors",
    "presentation",
    "about"
   ],
   "popup": [
    "colors",
    "find",
    "stack",
    "moreoptions"
   ],
   "sidebar": [
    "colors",
    "find",
    "stack"
   ]
  },
  "presentation": false,
  "splash": false,
  "treemenu": {
   "folderStrategyByDataset": {
    "data": "spread",
    "data_wdi": "folder:other_datasets"
   }
  }
 },
 "chartType": "MountainChart"
};