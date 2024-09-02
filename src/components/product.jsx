import React from "react";

export default function Product() {
    const cardComponents = ['1칸', '2칸', '3칸', '4칸', '5칸', '6칸', '7칸', '8칸'];

    return (
        <div className="product-container">
            <div className="product-cardview">
                {cardComponents.map((component, index) => (
                    <div key={index} className="product-card">
                        {component}
                    </div>
                ))}
            </div>
        </div>
    );
}
