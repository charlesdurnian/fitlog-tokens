// style-dictionary.config.js

module.exports = {
    source: ["tokens/**/*.json"],
    platforms: {
        web: {
            transformGroup: "web",
            buildPath: "dist/web/",
            files: [
              {
                destination: "tailwind.tokens.js",
                format: "javascript/module-flat" 
              }]
          },
          
      ios: {
        transformGroup: "ios",
        buildPath: "dist/ios/",
        files: [{
          destination: "StyleDictionary.swift",
          format: "ios-swift/class.swift",
          className: "StyleDictionary"
        }]
      },
      android: {
        transformGroup: "android",
        buildPath: "dist/android/",
        files: [{
          destination: "tokens.xml",
          format: "android/resources"
        }]
      }      
    }
  }
  