npm i -g @asciidoctor/core asciidoctor-pdf
npm run docs:build
asciidoctor-web-pdf   --template-require ./template.js -D docs/.vitepress/dist  *.adoc