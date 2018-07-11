import styles from './styles';
import scripts from './scripts';

export const injectHTML = (assets, html, title, meta, link, markup, state) => {

    return `<!doctype html>
        <html ${ html }>
        <head>
        ${ title }
        ${ meta }
        ${ link }
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