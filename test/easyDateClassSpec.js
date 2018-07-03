import { EasyDate } from '../easy-date'

describe('EasyDate', () => {

  it('#getDate', () => {
    const date = new Date()
    const es = new EasyDate(date)
    expect(es.getDate()).toBe(date)
  })

  it('#format', () => {
    const date = new Date("2018-01-01")
    const es = new EasyDate()
    expect(es.format("yyyy")).toBe("2018")
  })
})
