import styles from '../../Styles/Map.module.css'


const Map = () => {
    return (
        <section>
            <div>
                <h3>Google мапа</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1512.2655628153605!2d30.50917905548956!3d50.39792245250369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c94b47d3a02f%3A0xa0a5d4afb1d840c3!2sNotarius%20Simonova%20Viktoriya%20Valeriyivna!5e0!3m2!1sru!2sua!4v1709158299239!5m2!1sru!2sua" 
                width="600" 
                height="450" 
                loading="lazy" 
                >

                </iframe>
            </div>
        </section>
    )
}

export {Map}