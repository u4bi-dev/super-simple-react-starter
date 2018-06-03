import React from 'react'

const SvgIcon = ({ svg, className }) => (
  <span className={className} dangerouslySetInnerHTML={{ __html: svg }} />
)

export default SvgIcon
