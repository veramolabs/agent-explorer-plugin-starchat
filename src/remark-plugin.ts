import {visit} from 'unist-util-visit'

export default function remarkPlugin() {

  return function (tree: any) {
    visit(tree, function (node) {
      if (node.type === 'link' && String(node.url).startsWith('did:')) {
        node.url = '/brainshare/' + node.url
      }
    })

  }
}