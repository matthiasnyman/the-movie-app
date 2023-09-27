"use client";

import CategoryBox from "./CategoryBox";

type Category = {
  name: string;
  id: string;
};

type Props = {
  categories: Category[];
  selectedCategory: string | undefined;
};

const CategoryList: React.FC<Props> = ({ categories, selectedCategory }) => {
  return (
    <section className="flex flex-wrap gap-2 pb-8">
      {categories?.map(({ id, name }: Category) => (
        <CategoryBox
          key={id}
          id={id}
          name={name}
          selected={id == selectedCategory}
        />
      ))}
    </section>
  );
};

export default CategoryList;
