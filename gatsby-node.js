/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const { create } = require('domain')
const path = require('path')

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    if (page.path.match(/^\/projects/)) {
        createPage({
            path: "/projects",
            matchPath: "/projects/*",
            component: path.resolve(`src/pages/projects.js`)
        })
    }
}