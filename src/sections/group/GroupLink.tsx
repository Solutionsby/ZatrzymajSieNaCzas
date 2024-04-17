import './group.scss'
import{groupSection} from '../../assets/db/group.json'


interface GroupProps{
    groupID:React.RefObject<HTMLDivElement>
}

export const GroupLink:React.FC<GroupProps> = ({groupID}) =>{
    return( 
        <div className="grup-wrapper" ref={groupID}>
            <h2>{groupSection.groupTitle}</h2>
            <p>{groupSection.groupContent}</p>
            <ul>
            {groupSection.groupList.map(({id,listText}:{id:number,listText:string})=>(
                <li key={id}>{id}.{listText}</li>
            ))}
            </ul>
            
            <div className="eterapiButton">
                <a className='eterapia-link'href="http://twoja-eterapia.pl">{groupSection.eterpiTitle}</a>
                </div>       
            
        </div>
    )
}



