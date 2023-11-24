const namesList: string[] = [];

const addNames = (name: string): void => {
  namesList.push(name);
};

const takeNames = (): void => {
  namesList.forEach((name) => console.log(name));
};

const removeName = (index: number): void => {
  namesList.splice(index, 1);
};

const UpdateName = (index: number, name: string): void => {
  namesList.splice(index, 1, name);
};

addNames("Alex");
addNames("Otavio");
addNames("Robert");

removeName(1);

UpdateName(1, "Osvaldo");

takeNames();
