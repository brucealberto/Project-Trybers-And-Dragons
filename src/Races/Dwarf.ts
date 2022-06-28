import Race from './Race';

export default class Dwarf extends Race {
  private static _createdRacesInstances = 0;
  constructor(
    name :string,
    dexterity: number,
    private _maxLifePoints: number = 80,
  ) {
    super(name, dexterity);
    Dwarf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
  
  // set maxLifePoints(maxLifePoints: number) {
  //   this._maxLifePoints = maxLifePoints;
  // }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
// const dwarf = new Dwarf('John', 10, 80);
// console.log(dwarf);
