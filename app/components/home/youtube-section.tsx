import { LogosYoutube } from "../icons/youtube-logo"
import styles from "./youtube.module.scss"


const YoutubeSection = () => {
    return(<div className="fluid-container">
        <div className={styles.section}>
            <LogosYoutube />

            <p>
                Join our community on Youtube, <br /> so you never miss a video
            </p>

            <button>Join Now</button>
        </div>
    </div>)
}
export default YoutubeSection