/**
 * Generates an object from a given text and variables.
 *
 * @param {string} text - The text to parse and extract tags from.
 * @param {...*} vars - The variables to replace in the text.
 * @returns {Object} - The generated object.
 */
const convertToObject =
  (text, ...vars) =>
    (props) => {
      const parsedTags = text.reduce((acc, item, i) => {
        let v = vars[i] || ''

        // If it's a function, call it with props
        if (typeof v === 'function') v = v(props)

        // Merge with the rest
        return acc + item + v
      }, '')

      const rules = parsedTags
        .split(';')
        .map((item) => item.trim())
        .filter((item) => !!item)

      // Create and return the object
      return rules.reduce((acc, item) => {
        const [key, val] = item.split(':').map((i) => i.trim())
        return Object.assign(acc, { [key]: val })
      }, {})
    }

export default convertToObject
