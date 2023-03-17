
exports.linkResolver = doc => {
  switch (doc.type) {
    case "homepage": {
      return `/`
    }
    case "business_case": {
      return `/case/${doc.uid}`
    }
    case "news": {
      return `/news/${doc.uid}`
    }
    default:
      return "/"
  }
}
