interface Charact {
  name: string;
  specialMove: string;
}

interface DbCharact extends Charact {
  id: number;
}

const db: DbCharact[] = [];

interface IModel {
  create: (character: Charact) => Promise<DbCharact>;
  getById: (id: number) => Promise<DbCharact>;
  getAll: () => Promise<DbCharact[]>;
  update: (id: number, character: Charact) => Promise<DbCharact>;
  delete: (id: number) => Promise<boolean>;
}

class LocalDbModel implements IModel {
  create = async (character: Charact) => {
    const lastId = db[db.length - 1]?.id ?? 0;
    //  const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { ...character, id: lastId + 1 };
    db.push(newCharacter);
    return newCharacter;
  };

  findIndexById = (id: number) => {
    const index = db.findIndex((character) => character.id === id);
    if (index === -1) {
      throw new Error('Character not found');
    }
    return index;
  }

  getById = async (id: number) => {
    const index = this.findIndexById(id);
    return db[index];
  }

  getAll = async () => db;

  update = async (id: number, character: Charact) => {
    const indexToUpdate = this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ... character };
    return db[indexToUpdate];
  }

  delete = async (id: number) => {
    const indexToDelete = this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length === 0) return false;
    return true;
  }
}

class CharacterService {
  constructor(readonly model: IModel) {}

  async create(character: Charact) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async getById(id: number) {
    const character = await this.model.getById(id);
    return ({ status: 200, data: character });
  }

  async getAll() {
    const characters = await this.model.getAll();
    return ({ status: 200, data: characters });
  }

  async update(id: number, character: Charact) {
    const updatedCharacter = await this.model.update(id, character);
    return ({ status: 200, data: updatedCharacter });
  }

  async delete(id: number) {
    const deletedCharacter = await this.model.delete(id);
    return ({ status: 200, data: deletedCharacter });
  }
}

class MockDbModel implements IModel {
  async create(character: Charact) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove: 'Toad' };
  }

  async update(id: number, character: Charact) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
  }

  async delete(id: number) {
    console.log('character deleted');
    return true;
  }

  async getAll() {
    return [
      { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
      { id: 2, name: 'Kirby', specialMove: 'Inhale' },
    ];
  }

  async getById(id: number) {
    return { id: 1, name: 'Mario', specialMove: 'Fireball' };
  }
}

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);