const scripts = assets => Object.keys(assets).reduce((scripts, key) => {
    
    return scripts + `<script src="${assets[key].js}" defer crossorigin></script>`;

}, '');

export default scripts;