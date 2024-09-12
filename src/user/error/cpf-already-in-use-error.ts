export class CpfAlreadyUsed extends Error {
  constructor() {
    super('Cpf already used!');
  }
}
