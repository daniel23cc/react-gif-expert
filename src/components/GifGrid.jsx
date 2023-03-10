import { GifIem } from "./GifIem"
import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)
    //console.log({ isLoading })
    /* const [images, setImages] = useState([])

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }

    useEffect(() => {
        getImages()
    }, []) */

    return (
        <>
            <h3>{category}</h3>
            
            {
                isLoading
                ? (<h2>Cargando...</h2>)
                : null
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        //<li key={id}>{title}</li>
                        <GifIem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
