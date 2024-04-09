// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'For Russian',
        rules: [
          {
            description: 'Change grave accent (`) to ё in Russian layout',
            manipulators: [
              {
                conditions: [
                  {
                    type: 'input_source_if',
                    input_sources: [{ language: 'ru' }],
                  },
                ],
                type: 'basic',
                from: { key_code: 'grave_accent_and_tilde', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'non_us_backslash' }],
              },
            ],
          },
        ],
      },
      null,
      '  '
    )
  )
}

main()
