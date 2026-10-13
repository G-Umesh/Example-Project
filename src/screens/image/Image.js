
import { useEffect, useState } from "react";

function Image() {
    const [image, setImage] = useState("");

    useEffect(() => {
        const fetchImage = () => {
            fetch("https://dummyjson.com/image/400x200?type=webp&text=I+am+a+webp+image")
                .then((res) => res.blob())
                .then((blob) => {
                    const imageUrl = URL.createObjectURL(blob);
                    setImage(imageUrl);
                })
                .catch((error) => console.log(error));
        };

        fetchImage();
    }, []);

    console.log(image, "image");

    return (
        <div>
            <h1>Fetched Image</h1>

            {image && (
                <img
                    src={image}
                    alt="Fetched API"
                    width="400"
                />
            )}
        </div>
    );
}

export default Image;
