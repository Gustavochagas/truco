// Compiled using marko@4.18.27 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/base-projct$1.0.0/src/layouts/index.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><title>Truco</title><link rel=\"stylesheet\" href=\"/css/style.css\"><meta name=\"viewport\" content=\"width=device-width, user-scalable=no\"><meta name=\"theme-color\" content=\"#FFFFFF\"><meta name=\"mobile-web-app-capable\" content=\"yes\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\">");

  out.___renderAssets && out.___renderAssets()

  out.w("</head><body>");

  component_globals_tag({}, out);

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "9");

  out.w("</body><script src=\"/js/bundle.js\"></script></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/base-projct$1.0.0/src/layouts/index.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
