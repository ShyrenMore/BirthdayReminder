import React from "react";

const List = ({ people }) => {
  const changeCol = () => {
    // /*
    // let El = document.getElementsByClassName('not-wished')[0]
    let El = document.getElementById('btnEl')
    El.style.background = '#4ed4ac'
    El.innerText = 'Wished!!'
    console.log("in changeCol")
    // */
    
    /*
    var collection = document.getElementsByClassName("not-wished");
    for (var i = 0; i < collection.length; ++i) {
      {
        collection[i].style.background = "#4ed4ac";
        collection[i].innerText = "Wished!!";
      }
      */
  };

  /*
  set two states, one for innerText
  */
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt="image" />
            <div>
              <h4>{name}</h4>
              <p>{age} years </p>
              <button className="not-wished" id="btnEl" onClick={() => { changeCol() }}>
                Not wished
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
