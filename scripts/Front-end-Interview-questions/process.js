'use strict'

const fs = require('fs')
const path = require('path')
const DEST_DIR = '../../questions'

let from = 'https://github.com/hawx1993/Front-end-Interview-questions'
let dir_img = './source/img'
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

create_question('web')
create_question('javascript')
create_question('css')
// let res = render({
//   type: 'type',
//   tag: 'tag',
//   difficulty: '1',
//   from: 'from',
//   description: 'description',
//   answer: 'answer',

// })

console.log('生成完毕🐔')

