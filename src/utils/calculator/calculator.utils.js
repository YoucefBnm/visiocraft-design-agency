import { pricing } from "../../constants/data";

const { additionnalServices, subCategories } = pricing;

export function updateSubCategoryPrice(e) {
  const { id, value } = e.target;

  const updatedCategories = subCategories.map((category) => {
    if (category.id === id) {
      category.value = Number(value);
    }
    return category;
  });

  return updatedCategories;
}

export function updateAdditionalCategoryPrice(e) {
  const { id } = e.target;

  const updatedCategories = additionnalServices.map((category) => {
    if (category.id === id) {
      category.isChecked = !category.isChecked;
    }

    return category;
  });
  return updatedCategories;
}
