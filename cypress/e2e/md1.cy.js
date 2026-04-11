import grid from '../pages/GridPage'

describe('grid selection check', () => {
  it('selects some items and ignores the rest', () => {

    grid.open()
    grid.switchToGrid()
    grid.pick('Two')
    grid.pick('Four')
    grid.pick('Six')
    grid.pick('Eight')
    grid.isActive('Two')
    grid.isActive('Four')
    grid.isActive('Six')
    grid.isActive('Eight')
// pārējie nedrīkst būt izvēlēti
    grid.isNotActive('One')
    grid.isNotActive('Three')
    grid.isNotActive('Five')
    grid.isNotActive('Seven')
    grid.isNotActive('Nine')
  })
})