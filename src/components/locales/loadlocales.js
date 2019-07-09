import intl from 'react-intl-universal';

export default (lang) =>{

    return new Promise((resolve,reject)=>{

        const locales = {
            "zh_CN": require('./zh_CN.js'),
            "en_US": require('./en_US.js')
        }

        // init method will load CLDR locale data according to currentLocale
        // react-intl-universal is singleton, so you should init it only once in your app
        intl.init({
          currentLocale: lang || 'zh_CN', // TODO: determine locale here
          locales,
        })
        .then(() => {
          // After loading CLDR locale data, start to render
          resolve('success')
        });
    })
}