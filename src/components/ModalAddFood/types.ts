export interface IAddFood {
  image: string;
  name: string;
  price: string;
  description: string;
}

export interface IModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: IAddFood) => void;
}
