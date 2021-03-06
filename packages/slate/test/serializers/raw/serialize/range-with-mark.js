/** @jsx h */

import h from '../../../helpers/h'

export const input = (
  <state>
    <document>
      <paragraph>
        o<b>n</b>e
      </paragraph>
    </document>
  </state>
)

export const output = {
  kind: 'state',
  document: {
    kind: 'document',
    data: {},
    nodes: [
      {
        kind: 'block',
        type: 'paragraph',
        isVoid: false,
        data: {},
        nodes: [
          {
            kind: 'text',
            ranges: [
              {
                kind: 'range',
                text: 'o',
                marks: [],
              },
              {
                kind: 'range',
                text: 'n',
                marks: [
                  {
                    kind: 'mark',
                    type: 'bold',
                    data: {},
                  }
                ]
              },
              {
                kind: 'range',
                text: 'e',
                marks: [],
              }
            ]
          }
        ]
      }
    ]
  }
}
