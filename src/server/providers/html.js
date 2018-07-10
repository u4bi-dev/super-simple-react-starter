import styles from './styles';
import scripts from './scripts';

const html = (assets, title, markup, state) => {

    return `<!doctype html>
        <html lang="">
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        ${ styles(assets) }
        </head>
        <body>
        <div id="root"><!--markup--></div>
        <script><!--state--></script>
        ${ scripts(assets) }
        </body>
        </html>`
        .replace(/>(\s|\n)+</g, '><')
        .replace('<!--markup-->', markup)
        .replace('<!--state-->', 'window.__state__=' + JSON.stringify(state));

};
  
export default html;