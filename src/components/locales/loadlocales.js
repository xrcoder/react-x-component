import intl from 'react-intl-universal';

export default (lang) =>{

    return new Promise((resolve)=>{

        const locales = {
            "zh_CN": require('./zh_CN.js'),
            "en_US": require('./en_US.js')
        }

        intl.init({
          currentLocale: lang || 'zh_CN', 
          locales,
        })
        .then(() => {
          resolve('success')
        });
    })
}