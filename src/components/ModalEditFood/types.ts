export interface IFood {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export interface IModalEditFoodProps {
  setIsOpen: () => void;
  handleUpdateFood: (data: Omit<IFood, "id" | "available">) => void;
  isOpen: boolean;
  editingFood: IFood;
}
