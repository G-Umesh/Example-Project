
import { useState, useEffect } from "react";

function DynamicImage() {
    const [dynamicimage, setDynamicImage] = useState("");

    useEffect(() => {
        const fetchDynamicImage = () => {
            fetch("https://dummyjson.com/icon/abc123/150")
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Failed to fetch image");
                    }
                    return res.blob();
                })
                .then((blob) => {
                    const imageUrl = URL.createObjectURL(blob);
                    setDynamicImage(imageUrl);
                })
                .catch((error) => console.log(error));
        };

        fetchDynamicImage();
    }, []);

    console.log(dynamicimage, "DynamicImage");

    return (
        <div>
            <h1>Dynamic Image</h1>

            {dynamicimage && (
                <img
                    src={dynamicimage}
                    alt="Fetched API"
                    width="150"
                />
            )}
        </div>
    );
}

export default DynamicImage;
