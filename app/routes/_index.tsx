import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="py-24">
        <h1 className="text-3xl font-bold w-full text-center mb-8">
          Bienvenida a tu ejercicio
        </h1>
        <div className="px-4">
          <h2 className=" font-inter font-thin text-gray-900 text-2xl">Aqui aprenderas todo lo que te hace falta!</h2>
        </div>
        <div className="flex w-full flex-col px-4">
          <div className="font-inter my-8">
            <h3 className="font-thin text-xl">Hola soy un Bacon</h3>
            <p className="font-thin text-md py-4">
            Bacon ipsum dolor amet beef doner kevin, sirloin cupim short ribs filet mignon. Cow meatball picanha turkey, bresaola hamburger kevin. Boudin cow pork meatball leberkas, cupim picanha shankle. Pancetta corned beef shankle brisket venison rump, bacon ham hock hamburger shoulder salami sirloin jowl landjaeger bresaola. Leberkas shank capicola meatball ball tip jerky chicken turducken biltong t-bone frankfurter bacon meatloaf.<br /><br/>
              Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!
            </p>
          </div>
          <div className="font-inter mb-64">
            <h3 className="font-thin text-xl">Hola soy el ultimo</h3>
            <p className="font-thin text-md py-4">
            Bacon ipsum dolor amet beef doner kevin, sirloin cupim short ribs filet mignon. Cow meatball picanha turkey, bresaola hamburger kevin. Boudin cow pork meatball leberkas, cupim picanha shankle. Pancetta corned beef shankle brisket venison rump, bacon ham hock hamburger shoulder salami sirloin jowl landjaeger bresaola. Leberkas shank capicola meatball ball tip jerky chicken turducken biltong t-bone frankfurter bacon meatloaf.<br /><br/>
              Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
