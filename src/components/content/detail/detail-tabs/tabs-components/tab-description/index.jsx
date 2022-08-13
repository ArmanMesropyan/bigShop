import React from 'react'
import './style.scss'

const TabDescription = ({productById}) => {
    return (
        <div className='L-tab-product-description'>
            <h6 className='L-tab-product-description-title'>Product Description</h6>
            <p>
                {productById.description}.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur ea inventore laborum
                mollitia nihil nobis omnis quos sunt, tenetur, totam unde. A accusamus ad aperiam aspernatur beatae
                commodi consectetur consequatur doloremque eligendi et eum explicabo fuga hic id ipsam, iure maiores
                molestias, mollitia natus nesciunt nihil numquam porro quam quibusdam reiciendis repellat rerum sapiente
                sequi sunt suscipit tempora veniam veritatis voluptatibus. Ab accusamus ad adipisci animi at autem cum
                dolorem dolorum enim error est ex exercitationem fuga fugit id in iusto modi nemo nesciunt perspiciatis
                quidem repellat, sapiente soluta tenetur vel vero voluptate voluptatum! Dignissimos magnam maxime
                molestias sed?
            </p>
        </div>
    )
}
export default TabDescription