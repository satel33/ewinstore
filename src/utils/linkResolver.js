const { defaultLanguage } = require("../../prismic-configuration")

exports.linkResolver = doc => {
  switch (doc.type) {
    case "homepage": {
      return doc.lang === defaultLanguage ? "/" : `/${doc.lang}`
    }

    default:
      return "/"
  }
}
