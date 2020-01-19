export const renderStringFromArray = ({ items }) => {
  return items.reduce((acc, tech, index) => {
    const isLastItem = index === items.length - 1
    const isSecondToLastItem = index === items.length - 2
    acc += tech + (isSecondToLastItem ? ', and ' : !isLastItem ? ', ' : '')
    return acc
  }, '')
}
