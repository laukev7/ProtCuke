exports.config = {

    specs: [
        'features/*.feature'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8081/',

    framework: 'cucumber',

    cucumberOpts: {
        require: 'features/steps_definitions/my_steps.js'
        //format: 'progress'
    }

};