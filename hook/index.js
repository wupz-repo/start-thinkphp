async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`
    __  .__    .__        __           .__            
    _/  |_|  |__ |__| ____ |  | ________ |  |__ ______  
    \   __\  |  \|  |/    \|  |/ /\____ \|  |  \\____ \ 
     |  | |   Y  \  |   |  \    < |  |_> >   Y  \  |_> >
     |__| |___|  /__|___|  /__|_ \|   __/|___|  /   __/ 
               \/        \/     \/|__|        \/|__|         
                                        `)
    console.log(`\n    Welcome to the start-thinkphp application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
         ACR: https://cr.console.aliyun.com/
     This application can help you quickly deploy the ThinkPHP project:
         Full yaml configuration: https://github.com/devsapp/thinkphp
         ThinkPHP development docs : https://docs.topthink.com/think-api/1835085
     This application homepage: https://github.com/devsapp/start-thinkphp\n`)
}

module.exports = {
    postInit,
    preInit
}
