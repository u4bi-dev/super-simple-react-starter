const styles = assets => Object.keys(assets).reduce((styles, key) => {

    let link = assets[key].css;

    return styles + (link ? `<link rel="stylesheet" href="${link}" />` : '');

}, '');

export default styles;