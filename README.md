shargs-example-deepthought is a sample application of [shargs][shargs] 🦈.

See the [`shargs` github repository][shargs] for more details!

[![node version][shield-node]][node]
[![license][shield-license]][license]
[![PRs Welcome][shield-prs]][contribute]

## Setup

```bash
$ git clone https://github.com/Yord/shargs-example-deepthought.git
$ cd shargs-example-deepthought
$ npm i
$ chmod +x ./deepThought
```

## Example

This repository is a simple example of a program using the [shargs][shargs] command-line parser.
The program can be found in the [`deepThought`][deepThought] script.

## Run the Example

The example may be run with different parameters:

### Printing Usage Documentation

Providing a `--help` flag:

```bash
$ ./deepThought --help
```

Prints the following text to the console:

```bash
deepThought [-a|--answer] [-h|--help]                                           
deepThought ask [--format] [--no-html] [-h|--help] (<question>)                 
                                                                                
-a, --answer=<number>    The answer. [default: 42]                              
-h, --help               Print this help message and exit.                      
ask                      Ask a question. [required]                             
    --format=<json|xml>  Respond either with json or xml. [default: json]       
    --no-html            Removes HTML tags from texts.                          
    -h, --help           Print this help message and exit.                      
    <question>           State your question. [required]                        
                                                                                
Deep Thought was created to come up with the Answer to The Ultimate Question of 
Life, the Universe, and Everything.                                             
```

Providing `ask --help`:

```bash
$ ./deepThought ask --help
```

Prints text in a different usage format:

```bash
deepThought ask [--format] [--no-html] [-h|--help] (<question>)                 
                                                                                
--format=<json|xml> [default: json]                                             
    Respond either with json or xml.                                            
--no-html                                                                       
    Removes HTML tags from texts.                                               
-h, --help                                                                      
    Print this help message and exit.                                           
<question> [required]                                                           
    State your question.                                                        
                                                                                
Deep Thought was created to come up with the Answer to The Ultimate Question of 
Life, the Universe, and Everything.                                             
```

### The Answer to the Ultimate Question

Providing `ask` with a question:

```bash
$ ./deepThought ask "What is the meaning of life, the universe, and everything?"
```

Prints the following answer and `args` object:

```bash
The answer is: 42
{
  "_": [],
  "answer": 42,
  "ask": {
    "_": [],
    "question": "What is the meaning of life, the universe, and everything?",
    "format": "json"
  }
}
```

### Error Output

Providing no `ask` command:

```bash
$ ./deepThought --answer 23
```

Prints the following error:

```bash
Required option is missing: An option that is marked as required has not been provided.
```

Providing a wrong `--format`:

```bash
$ ./deepThought ask --format csv
```

Prints the following error:

```bash
Value restriction violated: A value lies outside the allowed values of an option.
```

## Reporting Issues

Please report issues [in the `shargs` tracker][issues]!

## License

`shargs-example-deepthought` is [MIT licensed][license].



[contribute]: https://github.com/Yord/shargs#contributing
[deepThought]: https://github.com/Yord/shargs-example-deepthought/blob/master/deepThought
[issues]: https://github.com/Yord/shargs/issues
[license]: https://github.com/Yord/shargs-example-deepthought/blob/master/LICENSE
[node]: https://nodejs.org/
[shargs]: https://github.com/Yord/shargs
[shield-license]: https://img.shields.io/badge/license-MIT-yellow.svg?labelColor=313A42
[shield-node]: https://img.shields.io/node/v/shargs?color=red&labelColor=313A42
[shield-prs]: https://img.shields.io/badge/PRs-welcome-green.svg?labelColor=313A42