import type { KnipConfig } from 'knip'

export default {
  ignoreDependencies: [
    // required by eslint-plugin-import but unused in config
    'eslint-import-resolver-typescript',
    // Peer deps
    'eslint',
    'prettier',
    // I just want it installed
    'eslint-formatter-pretty'
  ]
} satisfies KnipConfig
