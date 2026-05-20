module.exports = {
  paragraph: (node) => `<p class="paragraph">${node.getContent()}</p>`,
  document: (node) => `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${node.getDocumentTitle()}</title>
  <link href="https://fonts.googleapis.com/css?family=Bitter|Fira+Sans:100,200,300,400,700" rel="stylesheet">
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="page-bleed"></div>
  <div class="header">
    <h1>${node.getHeader().getTitle()}</h1>
  </div>
  <div id="content">
    ${node.getContent()}
  </div>
  <div class="footer">
    <p class="quote"><center>
        “Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.” 
        <span class="author">— A. de Saint-Exupéry</span>
    </center></p>
  </div>
</body>`,
  section: (node) => {
        const title = node.getTitle() === '!' ? '' : `<h${node.getLevel()}>${node.getTitle()}</h${node.getLevel()}>`
        return `<div class="section section${node.getLevel()} ${node.getRole()}">
  ${title}
  ${node.getContent()}
</div>`
  }
}
