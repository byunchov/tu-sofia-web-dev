export interface Hero {
  id: Number;
  name: string;
  universe: Universe;
  powers: Power[];
}

export interface Power {
  id: number;
  strength: number;
  name: string;
}

export interface Universe {
  id: number;
  name: string;
}
