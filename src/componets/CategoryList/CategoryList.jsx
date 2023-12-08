import { Categorys } from "../Categorys/Categorys";

export const CategoryList = ({ products }) => {
  const rubros = products.map(function (r) {
    return r.rubro;
  });

  let rubrosFilter = rubros.filter((value, index) => {
    return rubros.indexOf(value) === index;
  });

  return (
    <div className="container d-flex flex-sm-wrap">
      <Categorys rubros={rubrosFilter} />
    </div>
  );
};
