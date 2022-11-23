const dataMock = {
    absolutePath: "Prueba",
  validateFalse: [
    {
        file: 'C:\\Users\\MD-LINK-Proyecto-4\\BOG005-md-links\\Prueba\\Prueba.md',
        href: 'http://www.google.com',
        text: 'Google'
      },
      {
        file: 'C:\\Users\\MD-LINK-Proyecto-4\\BOG005-md-links\\Prueba\\Prueba.md',
        href: 'https://github.com/AlexaFuenmayor/BOG005-md-links',
        text: 'Github'
      },
      {
        file: 'C:\\Users\\MD-LINK-Proyecto-4\\BOG005-md-links\\Prueba\\Prueba.md',
        href: 'https://developer.mozilla.org/es/',
        text: 'MDN'
      },
      {
        file: 'C:\\Users\\MD-LINK-Proyecto-4\\BOG005-md-links\\Prueba\\Prueba.md',
        href: 'https://es.wikipedi.org/wiki/Markdown',
        text: 'wikipedi'
      }
  ],
  validateTrue: [
    {
        file: 'C:\\Users\\MD-LINK-Proyecto-4\\BOG005-md-links\\Prueba\\Prueba.md',
        href: 'http://www.google.com',
        text: 'Google',
        status: 200,
        message: 'Ok'
      },
      {
        file: 'C:\\Users\\MD-LINK-Proyecto-4\\BOG005-md-links\\Prueba\\Prueba.md',
        href: 'https://github.com/AlexaFuenmayor/BOG005-md-links',
        text: 'Github',
        status: 200,
        message: 'Ok'
      },
      {
        file: 'C:\\Users\\MD-LINK-Proyecto-4\\BOG005-md-links\\Prueba\\Prueba.md',
        href: 'https://developer.mozilla.org/es/',
        text: 'MDN',
        status: 200,
        message: 'Ok'
      },
      {
        file: 'C:\\Users\\MD-LINK-Proyecto-4\\BOG005-md-links\\Prueba\\Prueba.md',
        href: 'https://es.wikipedi.org/wiki/Markdown',
        text: 'wikipedi',
        status: 404,
        message: 'Fail'
      }
  ],
};

module.exports = { dataMock }