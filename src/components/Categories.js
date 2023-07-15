import React from "react";



export function Categories() {
  const [activeCategorie, setActivCategory] = React.useState(0)

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  // const chooseCategorie =(index)=>{
  //   setActivCategory(index)
  // }

    return (
      <div className="categories">
        <ul>
          {categories.map((value,i)=> <li onClick={()=> setActivCategory(i)} className={activeCategorie === i ? "active" : ''}>{value}</li>)}
        </ul>
      </div>
    );
  }