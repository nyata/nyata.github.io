import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import base_path from "lume/plugins/base_path.ts";

const site = lume({
    src: "./src",
});

site.use(postcss());
site.use(terser());
site.use(base_path());

export default site;
