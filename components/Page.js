import DynamicComponent from './DynamicComponent'
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from '../styles/Home.module.css'

const Page = ({ blok }) => (
   <div className={styles.grid}>
      
            {blok.page ? blok.page.map((blokItem) =>
                <>
                    <div >
                        <DynamicComponent blok={blokItem} key={blokItem._uid} />
                    </div>
                    {console.log("BlokItem:",blokItem)}
                </>
            ) : null}
      
    </div>
)

export default Page