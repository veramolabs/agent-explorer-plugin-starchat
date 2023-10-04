/* eslint-disable */
//@ts-ignore
import Plugin from 'markdown-it-regexp'


const INITIAL_HASH_REGEX = /^#/
const DIR_SEPARATOR_REGEX = /[/\\]/g

export const wikilinks = () => {

  const options = {
    baseURL: '/',
    relativeBaseURL: './',
    makeAllLinksAbsolute: false,
    uriSuffix: '.html',
    htmlAttributes: {
    },
    generatePagePathFromLabel: (label: string) => {
      return label
    },
    postProcessPagePath: (pagePath: string) => {
      pagePath = pagePath.trim()
      pagePath = pagePath.split('/').join('/')
      pagePath = pagePath.replace(/\s+/g, '_')
      return pagePath
    },
    postProcessPageHash: (pageHash: string) => {
      pageHash = pageHash.trim()
      pageHash = pageHash.split('/').join('/')
      pageHash = pageHash.replace(/\s+/g, '_')
      return pageHash
    },
    postProcessLabel: (label: string) => {
      label = label.trim()
      if (label.match(INITIAL_HASH_REGEX)) {
        label = label.replace(INITIAL_HASH_REGEX, '')
      }
      else {
        label = label.replace(/#[^#]*$/, '')
      }
      return label
    }
  }



  function isAbsolute(pagePath: string) {
    return options.makeAllLinksAbsolute || pagePath.charCodeAt(0) === 0x2F/* / */
  }

  /**
   * Converts a path from the form '/path/to'
   * to an array of the form ['path', 'to']
   */
  function pathStrToArray(pathStr: string) {
    return (
      pathStr.split(DIR_SEPARATOR_REGEX)
        .filter(dirName => !!dirName)
    )
  }

  return Plugin(
    /\[\[([^|\]\n]+)(\|([^\]\n]+))?\]\]/,
    (match: any, utils: any) => {
      let label = ''
      let pagePath = null
      let htmlAttrs = []
      let htmlAttrsString = ''

      const absoluteBaseDirs = pathStrToArray(options.baseURL)
      const relativeBaseDirs = pathStrToArray(options.relativeBaseURL)

      const postProcessLabel = options.postProcessLabel
      const postProcessPagePath = (
        options.postProcessPagePath
      )
      const postProcessPageHash = options.postProcessPageHash
      const generatePagePathFromLabel = (
        options.generatePagePathFromLabel
      )

      const isSplit = !!match[3]
      if (isSplit) {
        label = match[3]
        pagePath = match[1]
      }
      else {
        label = match[1]
        pagePath = generatePagePathFromLabel(match[1])
      }
      
      
      const href = '/brainshare/' + pagePath
      const escapedHref = utils.escape(href)

      htmlAttrs.push(`href="${escapedHref}"`)
      htmlAttrsString = htmlAttrs.join(' ')

      return `<a ${htmlAttrsString}>${label}</a>`
    }
  )
}