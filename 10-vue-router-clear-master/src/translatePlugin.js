export default {
  install (app, options) {
    console.log('app', app)
    console.log('options', options)

    let current = 'ru'

    const changeLanguage = name =>{
      current = name
      console.log('current',name)
    }


    app.config.globalProperties.$i18n = key => {
      // app.title -> [app, title] -> app[title]
      return key.split('.')
        .reduce((words, k) => {
          return words[k] || '===UNKNOWN==='
        }, options[current])
    }

    app.provide('changeI18N', changeLanguage)
  }
}