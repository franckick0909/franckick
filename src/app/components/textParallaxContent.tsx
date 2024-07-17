import ImageScroll from "./imageScroll"





export const TextParallaxContent = () => {
    return (
        <div className=" bg-white">
            <ImageScroll
             imgUrl="/img/img1.jpg"
              heading="Never to promise."
               subheading="Quality">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </ImageScroll><TextParallax />
            <ImageScroll
             imgUrl="/img/img2.jpg"
              heading="Built fot all of us."
               subheading="Collaborate">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            
            </ImageScroll><TextParallax />
            <ImageScroll
             imgUrl="/img/img3.jpg"
              heading="Apple"
               subheading="Apple">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            
            </ImageScroll><TextParallax />
        </div>
    )
}

const TextParallax = () => {
    return (
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 pb-24 pt-12 md:grid-cols-12 px-8 md:px-12 lg:px-16 xl:px-20">

                <h2 className="col-span-1 text-5xl font-bold md:col-span-4">Apple</h2>


            <div className="grid col-span-2 md:col-span-8 gap-8">
                <p className="text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque odit in pariatur error omnis, quidem dolores inventore laudantium natus aliquid temporibus adipisci, quod odio numquam asperiores soluta nobis voluptate officiis minima non at. Sint eligendi accusamus ex! Et ipsam perspiciatis in tenetur labore quaerat sequi, fuga fugit eligendi autem?</p>

                <button className="bg-black text-white px-4 py-2 rounded-md block">Read More</button>
            </div>


        </div>
    )
}