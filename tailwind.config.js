/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        midnightgreen: {
          '100':  '#C7EDFA',
          '200':  '#57CE9F',
          '300':  '#1FB7EA',
          '400':  '#11090BB',
          '500':  '#0C6583',
          '600':  '#073A4B',
          '700':  '#031D25'
        },
        gold: {
          '100': '#FAA307'
        }
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
