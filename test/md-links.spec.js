const {mdLinks} = require('../index.js');
const {dataMock} = require('./Mock.js')


describe('Md-links', () => {
  it('Mdlinks should be a function', () => {
      expect(typeof mdLinks).toBe('function')
  });

  it('Mdlinks should return mock validate false', () => {
      return mdLinks(dataMock.absolutePath, { validate: false }).then(data => {
          expect(data).toEqual(dataMock.validateFalse)
      })
  });
  it('Mdlinks should return mock validate true', () => {
      return mdLinks(dataMock.absolutePath, { validate: true }).then(data => {
          expect(data).toEqual(dataMock.validateTrue)
      })
  });

  it('Mdlinks should read only .md files', () => {
      return mdLinks('Prueba\\archivo.txt', { validate: false }).catch((data) => {
          console.log(data);
          expect(data).toEqual('❌❌ It´s not a markdown file');
      })
  });
});
