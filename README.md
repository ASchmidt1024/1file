# 1file

one html, one css and one javascript to rule them all

## Includes

- [Bootstrap](http://getbootstrap.com/)
- [Font Awesome](http://fontawesome.io/)

## Requirements

- [Node.js®](https://nodejs.org/)
- [Gulp](https://gulpjs.com/)

## Installation

First you need Node.js® to run Gulp. Node.js® is a JavaScript runtime.[Go to nodejs.org](https://nodejs.org/en/) to downlad the latest version for your operation system (Linux, MacOS or ... or ... What was the name of these one main OS again? ... Ah! ... Windo ... Windo ... Windows).

Now with the Node.js package manager (npm) you can install Gulp. Open a console (or terminal or any command line tool) and write these magic words:

	npm install -g gulp

Et voilà! You have anything to run this awesome boilerplate. Download it, unzip it or clone it. Whatever. Then go to the directory of the project to automate and enhance your workflow.

	npm install
	gulp

That's it! Double click `dist/index.html` to see the result.

## Target files

- dist/index.html
- dist/style.css
- dist/script.js

As target this three files come down to the `dist` directory. This will be done by `gulpfile.js`. So, after your great work just take this directory and put it on the target server. That's all. Really. 

## Working files

To keep your good work use the following three files (see it from root):

- index.html
- scss/\_custom.scss
- js/script.js

But maybe you want to customize the bootstrap files, too. I have prepared something for you. Take look at 

- scss/\_variables.scss

There you can override all variables found in `scss/bootstrap/_variables.scss` and bring your page in a fantastic new look. Awesome. Just copy and paste a variable without the `!default` statement and give it the value you want to have.

## Why

Sometimes I have to build a landingpage with only one site and as a brave frontend developer I only want to use one html file, one css and one javascript, because it is the best case you can have. So feel free and have fun to build your own page and I'm happy to see [some issues](https://github.com/Bloggerschmidt/1file/issues) from you to make it better! Maybe! Maybe? No. May the force be with you!

