/** @jsx h */

import h from '../../../helpers/h'

export const input = (
  <state>
    <document>
      <paragraph>
        <emoji />
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
                text: '',
                marks: [],
              }
            ]
          },
          {
            kind: 'inline',
            type: 'emoji',
            isVoid: true,
            data: {},
            nodes: [
              {
                kind: 'text',
                ranges: [
                  {
                    kind: 'range',
                    text: ' ',
                    marks: [],
                  }
                ]
              }
            ]
          },
          {
            kind: 'text',
            ranges: [
              {
                kind: 'range',
                text: '',
                marks: [],
              }
            ]
          },
        ]
      }
    ]
  }
}
