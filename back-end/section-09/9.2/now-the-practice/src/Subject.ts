class Subject {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }
  set name(value: string) {
    if (value.length < 3) {
      throw new Error("The name must have at least 3 characters.");
    }
    this._name = value;
  }
}

export default Subject;
