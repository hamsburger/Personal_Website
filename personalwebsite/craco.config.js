const path = require("path");

module.exports = {
    // ...
    webpack: {
        configure: webpackConfig => {
          const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
            ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
          );
          // Remove webpack module scope (you can now import files from outside)
          webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
          webpackConfig.module.rules.push({
            test: /\.md$/i, // Matches Markdown files
            use: "raw-loader", // Use raw-loader for importing file contents as strings
          });
          return webpackConfig;
        },
        alias: {
          /* JSX-runtime is imported as module but webpack expects fully-specified path
             with appropriate extensions */
          "react/jsx-runtime": path.resolve(__dirname, "node_modules/react/jsx-runtime.js")
        }
   }
};
 