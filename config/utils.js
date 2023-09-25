const sanitize = require('sanitize-html');
const slugify = require('slugify');

const slugifyString = str => {
 return slugify(str, {
  replacement: '-',
  remove: /[#,&,+()$~%.'":*?<>{}]/g,
  lower: true
 });
}

const sanitizeHtml = html => {
 return sanitize(html, {
  allowedAttributes: {
   ...sanitize.defaults.allowedAttributes,
   //syntax highlighting
   pre: ['class'],
   code: ['class'],
   span: ['class'],
   //styled lists
   ol: ['class'],
   ul: ['class']
  }
 });
}

module.exports = {
 slugifyString,
 sanitizeHtml
}