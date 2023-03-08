import { personnagesList } from "../../datas/personnagesList";
import Card from "../card";

function ImageGallery() {

    return (
            <ul className='ImageGallery'>
				{personnagesList.map(({id, src, name}) => (
						<div key={id}>
							<Card
								name={name}
                                src={src}
							/>
						</div>
					)
				)}
			</ul>
    )

}

export default ImageGallery