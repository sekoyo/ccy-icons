const fs = require('fs')
const path = require('path')
import svgtojsx from 'svg-to-jsx'

function makeComponent(componentName, svgJsx) {
  const svgJsxWithAttrs = svgJsx.replace('<svg', '<svg {...attrs}')
  return `export function ${componentName}(attrs: React.SVGAttributes<SVGElement> = {}) {
  return (
    ${svgJsxWithAttrs}
  )
}`
}

export function iconsToComponents() {
  return {
    name: 'iconsToComponents', // this name will show up in warnings and errors.
    async load(id) {
      if (id.endsWith('src/index.tsx')) {
        const iconsPath = path.join(__dirname, './icons/')
        const components = []
        const files = fs.readdirSync(iconsPath)

        for (var i = 0; i < files.length; i++) {
          var filename = path.join(iconsPath, files[i])
          if (files[i].endsWith('.svg')) {
            var contents = fs.readFileSync(filename)
            var jsx = await svgtojsx(contents)
            const upperName = path.parse(files[i]).name.toUpperCase()
            const firstChar = upperName.charAt(0)
            const isNumeric = firstChar >= '0' && firstChar <= '9'
            const componentName = isNumeric ? '_' + upperName : upperName
            components.push(makeComponent(componentName, jsx))
          }
        }

        return `import React from 'react'

${components.join('\n\n')}
        `
      }
      return null // other ids should be handled as usual.
    },
  }
}
