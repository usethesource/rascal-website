// A JavaScript function that returns an object.
// `context` is provided by Docusaurus. Example: siteConfig can be accessed from context.
// `opts` is the user-defined options.
async function rascalPlugin(context, opts) {
    return {
      // A compulsory field used as the namespace for directories to cache
      // the intermediate data for each plugin.
      // If you're writing your own local plugin, you will want it to
      // be unique in order not to potentially conflict with imported plugins.
      // A good way will be to add your own project name within.
      name: 'rascal-plugin',
  
      async loadContent() {
        // The loadContent hook is executed after siteConfig and env has been loaded.
        // You can return a JavaScript object that will be passed to contentLoaded hook.
      },
  
      async contentLoaded({content, actions}) {
        // The contentLoaded hook is done after loadContent hook is done.
        // `actions` are set of functional API provided by Docusaurus (e.g. addRoute)
      },
  
      getPathsToWatch() {
        // Paths to watch.
        return []
      },
  
      getClientModules() {
        // Return an array of paths to the modules that are to be imported
        // in the client bundle. These modules are imported globally before
        // React even renders the initial UI.
        return []
      },
  
      injectHtmlTags({content}) {
        // Inject head and/or body HTML tags.
      },
    };
  }
  
  module.exports = rascalPlugin;