import React, { useState } from "react";
import {useForm} from "@formspree/react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {ref, uploadBytesResumable} from "firebase/storage";
import storage from "../../firebase";


const Own_opinions = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [opinion, setOpinions] = useForm("xlekvzpd");
    const [formName, setFormName] = useState("");
    const [formMessage, setFormMessage] = useState("");
    const handleFileChange = (event) => {
        setSelectedFiles(Array.from(event.target.files));
    };
    const handleNameChange = (event) => {
        setFormName(event.target.value);
    };

    const handleMessageChange = (event) => {
        setFormMessage(event.target.value);
    };
    const handleUpload = () => {
        event.preventDefault();

        if (selectedFiles.length > 0) {
            for (const file of selectedFiles) {
                const storageRef = ref(storage, `opinions_user/${file.name}`);
                const uploadTask = uploadBytesResumable(storageRef, file);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress =
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log(`Upload is ${progress}% done`);
                    },
                    (error) => {
                        console.log(error);
                    },
                    async () => {
                        console.log("Upload is complete");
                        await setOpinions({
                            name: formName,
                            message: formMessage,
                            file: selectedFiles.map((file) => file.name),
                        });
                    }
                );
            }
        } else {
            setOpinions({
                name: formName,
                message: formMessage,
                file: null,
            });
        }
    };



    return (
        <>
            <div className="own-opinion">
                <h2>ZOSTAW SWOJĄ OPINIĘ!</h2>
                {opinion.succeeded ?  (<p className="success-message-reservation success-message-opinions">Dziękujemy za przesłanie opinii :)</p>) : (
                    <div className="own-opinion-form">
                        <form onSubmit={handleUpload}>
                            <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Imię"
                                value={formName}
                                onChange={handleNameChange}
                                required
                            />
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Twoja opinia"
                                value={formMessage}
                                onChange={handleMessageChange}
                                required
                            ></textarea>
                            <input type="file" accept="image/*" onChange={handleFileChange} multiple />
                            <div className="button button-footer">
                                <button
                                    className="button-classic button-footer-classic"
                                    type="submit"
                                    disabled={opinion.submitting}
                                >
                                    WYŚLIJ
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                <div className="own-opinion-other">
                    <h2>LUB ZOSTAW OCENKĘ NA NASZYCH SOCIALACH!</h2>
                    <div className="own-opinion-social">
                        <div className="own-opinion-social-facebook">
                            <Link href="https://www.facebook.com/profile.php?id=100090355616685">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </Link>
                            <h3>Nallipop</h3>
                        </div>
                        <div className="own-opinion-social-instagram">
                            <Link href="/">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </Link>
                            <h3>Nallipop</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Own_opinions;
