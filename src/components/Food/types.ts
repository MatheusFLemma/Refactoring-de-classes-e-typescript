export interface IFood {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export interface IFoodProps {
  food: IFood;
  handleEditFood: (food: IFood) => void;
  handleDelete: (id: number) => void;
}

export interface IContainerProps {
  available: boolean;
}
