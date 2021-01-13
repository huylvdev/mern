import styles from './styles';
export default function Trends(params) {
    return (
        <>
            <div className={styles.view}>
                <a href="#" ><img alt="Monday Note" src="https://miro.medium.com/fit/c/20/20/1*kSJsBH9TGPH2A-U9IR_TFQ.png" width="20" height="20" />
                </a>
                <div>
                    <a href="#"><h4>Jean-Louis Gassée</h4></a>
                    <div>
                        <h4>in</h4>
                        <a href="#"><h4>Monday Note</h4></a>
                    </div>
                </div>

                <h2>Joining Apple 40 Years Ago</h2>
                <div>Dec 21<div>
                    <span>·</span>
                </div>
                    <span>5 min read</span>
                </div>
            </div>
        </>
    )
}