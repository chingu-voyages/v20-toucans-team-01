import React from "react";

export default function RecipeLayout({ children }) {
  var sliceIndex = children.findIndex((el) => el.props.mdxType == "ol");
  return sliceIndex ? (
    <>
      <div>
        <h2>Ingredients</h2>
        {children.slice(0, sliceIndex)}
      </div>
      <div>
        <h2>Steps</h2>
        {children.slice(sliceIndex)}
      </div>
    </>
  ) : (
    <>{children}</>
  );
}
