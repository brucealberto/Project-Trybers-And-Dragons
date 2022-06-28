import Race from './Race';

export default class Orc extends Race {
  private static _createdRacesInstances = 0;
  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 74,
  ) {
    super(name, dexterity);

    Orc._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}