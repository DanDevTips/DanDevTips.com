import hljs from 'highlight.js/lib/core';


import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import htmlbars from 'highlight.js/lib/languages/htmlbars';
import xml from 'highlight.js/lib/languages/xml';
import ini from 'highlight.js/lib/languages/ini';
import yaml from 'highlight.js/lib/languages/yaml';
import markdown from 'highlight.js/lib/languages/markdown';
import go from 'highlight.js/lib/languages/go';
import php from 'highlight.js/lib/languages/php';
import python from 'highlight.js/lib/languages/python';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('html', htmlbars);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('ini', ini);
hljs.registerLanguage('toml', ini);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('md', markdown);
hljs.registerLanguage('go', go);
hljs.registerLanguage('php', php);
hljs.registerLanguage('python', python);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block);
  });
  // hljs.highlightAll();
});
