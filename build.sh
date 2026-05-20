npm i -g @asciidoctor/core asciidoctor-pdf
npm install
npm run docs:build
mkdir -p docs/.vitepress/dist
asciidoctor-web-pdf   --template-require ./template.js -D docs/.vitepress/dist  cv.adoc