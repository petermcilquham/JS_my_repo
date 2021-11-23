/* read HTML files */
//const fs = require("fs") //fs = file system. alt syntax: 'import { readFileSync } from "fs"'
import fs from "fs"
const nav = fs.readFileSync("./public/components/nav.html", "utf8")
const footer = fs.readFileSync("./public/components/footer.html", "utf8")

export function createPage(path, options) {
    return (nav + fs.readFileSync(`./public/pages/${path}`, "utf8") + footer)
    .replace("%%DOCUMENT_TITLE%%", options?.title || "Nodefolio")
    .replace("%%CSS_LINK_PLACEHOLDER%%", options?.css || "")
    .replace("%%SCRIPT_PLACEHOLDER%%", options?.scriptTag || "")
    //options?.title || ""  = hvis options, så options.title, ellers ""
}