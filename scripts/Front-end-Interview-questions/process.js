'use strict'

const fs = require('node-fs-extra')
const path = require('path')
const DEST_DIR = '../../questions'
const SOURCE_IMG_DIR = './source/img'
const DEST_IMG_DIR = '../../questions/img'

//资料来源
let from = 'https://github.com/hawx1993/Front-end-Interview-questions'
let source = {
  'web': './source/web.md',
  'javascript': './source/javascript.md',
  'css': './source/css.md'
}

function render(question) {
  let tpl = `
- type: ${question.type}
- tag: ${question.tag}
- difficulty:  ${question.difficulty}
- from: ${question.from}

--------

${question.description}

---------

${question.answer}
`
  return tpl
}


function create_question(type) {
  let content = fs.readFileSync(source[type], { encoding: 'utf-8' })
  let lines = content.split('\n');
  let questions = []
  let answer_lines = []
  let q = {}
  lines.forEach((line, index) => {
    // console.log(index, line)
    if (line.startsWith('###')) {
      if (q.description) {
        q.answer = answer_lines.join('\n')
        questions.push(q)
      }
      //next
      answer_lines = []
      q = {
        type: 'reply',
        tag: type,
        difficulty: '1',
        from: from,
        description: line.replace('### ', ''),
        answer: ''
      }
    }else{
      answer_lines.push(line)
    }
  })
  //last one
  q.answer = answer_lines.join('\n')
  questions.push(q)
  
  //create markdown
  questions.forEach( (question, index) =>{
    let render_content = render(question)
    fs.writeFileSync(path.join(DEST_DIR, type+'_'+index+'.md'),render_content, {encoding: 'utf-8'})
  })
}

function copyImageDir(){
  try {
    let res = fs.copySync(SOURCE_IMG_DIR, DEST_IMG_DIR)
    console.log('copy finish')
  } catch (err) {
    console.error(err)
  }  
}

create_question('web')
create_question('javascript')
create_question('css')

copyImageDir()

console.log('生成完毕🐔')

