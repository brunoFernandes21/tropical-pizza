import React from "react";

const Pizza = () => {
  const bases = [
    {
      id: 1,
      image: "meals-app.png",
      title: "The Ultimate Spicy Meatball",
      calories: "2641kcal",
      serves: "Serves 3-3",
    },
    {
      id: 2,
      image: "meals-app.png",
      title: "The Ultimate Spicy Meatball",
      calories: "2641kcal",
      serves: "Serves 3-3",
    },
    {
      id: 3,
      image: "meals-app.png",
      title: "The Ultimate Spicy Meatball",
      calories: "2641kcal",
      serves: "Serves 3-3",
    },
    {
      id: 4,
      image: "meals-app.png",
      title: "The Ultimate Spicy Meatball",
      calories: "2641kcal",
      serves: "Serves 3-3",
    },
  ];
  return (
    <section className="p-4 md:px-20 ">
      <h1 className="text-slate-100 text-center text-xl font-bold bg-blue-900 rounded p-2 w-[100px] mx-auto">
        PIZZA
      </h1>
      <div className="flex justify-center flex-col md:grid md:grid-cols-3 md:gap-6 mt-6">
        {bases.map((base) => {
          const { image, title, calories, serves } = base;
          return (
            <div
              key={base.id}
              className="bg-white cursor-pointer flex flex-row justify-center rounded base__items mt-4"
            >
              <img
                src={image}
                alt="Spicy Meatball"
                className="h-[120px] rounded-tl rounded-bl"
              />
              <div className="ml-2 pt-2 flex flex-col">
                <p className="text-slate-800 font-semibold">{title}</p>
                <p className="text-slate-800 text-sm">
                  {calories}|{serves}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pizza;
