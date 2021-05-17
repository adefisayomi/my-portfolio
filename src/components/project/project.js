import styles from './style/project.module.css'


export default function Project ({project}) {

    return (
        <div className= {styles.project}>
            <img src= {project && project.image ? project.image : 'https://image.flaticon.com/icons/png/512/1087/1087927.png'} alt="" />
            <div>
                <h1>{project.title || ''}</h1>
                <p>{project.description || ''}</p>
            </div>
        </div>
    )
}