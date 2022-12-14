import lume from "lume/mod.ts";

const site = lume({
    src: "./src",
});

site.copy('css');
site.copy('javascript');
site.copy('images');

export default site;
