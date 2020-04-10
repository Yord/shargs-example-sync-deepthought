#!/usr/bin/env node

const {parser} = require('shargs')
const {number, string, flag} = require('shargs-opts')
const {cast, flagsAsBools, requireOptions, splitShortOptions} = require('shargs-parser')
const {note, optsList, space, synopsis, usage} = require('shargs-usage')

const opts = [
  string('question', ['-q', '--question'], {desc: 'A question.', required: true}),
  number('answer', ['-a', '--answer'], {desc: 'The answer.', defaultValues: [42]}),
  flag('help', ['-h', '--help'], {desc: 'Print this help message and exit.'})
]

const deepThought = parser({
  argv: [splitShortOptions],
  opts: [requireOptions, cast],
  args: [flagsAsBools]
})

const docs = usage([
  synopsis('deepThought'),
  space,
  optsList,
  space,
  note(
    'Deep Thought was created to come up with the Answer to ' +
    'The Ultimate Question of Life, the Universe, and Everything.'
  )
])

const style = {
  line: {width: 80},
  cols: [{width: 25}, {width: 55}]
}

const argv = process.argv.slice(2)

const {args} = deepThought(opts)(argv)

const help = docs(opts)(style)

if (args.help) {
  console.log(help)
} else {
  console.log('The answer is: ' + args.answer)
}

console.log(args)