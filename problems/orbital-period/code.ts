interface PlanetaryInfo {
  name: string
  avgAlt: number
}

interface Transformed {
  name: string
  orbitalPeriod: number
}

export function orbitalPeriod(arr: Array<PlanetaryInfo>) {
  const GM = 398600.4418
  const radius = 6367.4447

  const calc = (avgAlt: number) =>
    Math.round(2 * Math.PI * Math.sqrt(Math.pow(radius + avgAlt, 3) / GM))

  const mapFunc = (el: PlanetaryInfo): Transformed => ({
    name: el.name,
    orbitalPeriod: calc(el.avgAlt),
  })

  return arr.map(mapFunc)
}

/*
TIME
O(n)

SPACE
O(n)
*/
