const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

const filename = './src/index.js'

// js code string
const content = fs.readFileSync(filename, 'utf8')
console.log(content);

// import message from './message.js'
// console.log(message)

const ast = parser.parse(content, {
  sourceType: 'module', // babel官方规定必须加这个参数，不然无法识别ES Module
})

// console.log(ast);

const dependencies = {}

// 遍历 ast
traverse(ast, {
  //获取通过import引入的模块
  ImportDeclaration({ node }) {
    const dirname = path.dirname(filename)
    const newFile = './' + path.join(dirname, node.source.value)
    // 保存依赖的模块
    dependencies[node.source.value] = newFile
  }
})


const { code } = babel.transformFromAst(ast, null, {
  presets: ['@babel/preset-env'],
})

console.log(code);

// output:

// var _message = _interopRequireDefault(require("./message.js"));
// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// console.log(_message["default"]);

console.log(dependencies);