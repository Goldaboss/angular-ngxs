export class AddAnimals {
  static readonly type = '[Zoo] Add Animal';

  constructor(public name: string) {
  }
}

export class RemoveAnimal {
  static readonly type = '[Zoo] Remove Animal'

  constructor(public id: number) {
  }
}

export class RenameAnimal {
  static readonly type = '[Zoo] Rename Animal'

  constructor(public id: number, public name: string) {
  }
}
